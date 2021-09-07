const Web3 = require('web3');
const nftAbi = require('./abi/CrossPunks.json');
const dexAbi = require('./abi/CrossPunksDex.json');

const TESTNET = {
    method: 'wallet_addEthereumChain',
    params: [{
        chainId: '0x61',
        chainName: 'Binance Smart Chain Testnet',
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18
        },
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
        blockExplorerUrls: ['https://testnet.bscscan.com/']
    }]
};

const MAINNET = {
    method: 'wallet_addEthereumChain',
    params: [{
        chainId: '0x38',
        chainName: 'Binance Smart Chain',
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18
        },
        rpcUrls: ['https://bsc-dataseed1.defibit.io/'],
        blockExplorerUrls: ['https://bscscan.com/']
    }]
}

class _walletManager {
    // status
    // null     => not connected
    // false    => trying to connect
    // true     => connect

    walletStatus = false;
    web3Global = false;

    nftAddr = "0x360673A34cf5055DfC22C53bc063e948A243293B";
    dexAddr = "0x36894d06ac91B09760b4310C75Ed2348E3eA063C";

    constructor() {
        this.connectToMetamask();

        if (this.walletStatus) {
            this.nft = new this.web3Global.eth.Contract(nftAbi.abi, this.nftAddr);
            this.dex = new this.web3Global.eth.Contract(dexAbi.abi, this.dexAddr);
        }
    }

    async connectToMetamask() {
        if (window.ethereum) {
            this.web3Global = new Web3(ethereum);
            try {
                ethereum.enable();
                this.walletStatus = true;
            } catch (error) {
                console.log(error);
            }
        } else if (window.web3) {
            this.web3Global = new Web3(web3.currentProvider);
            this.walletStatus = true;
        } else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }

        if (window.ethereum) {
            await window.ethereum.request(MAINNET).catch((error) => {
                this.walletStatus = false;
                console.log(error);
            });

            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x38' }], // BSC Mainnet
                // params: [{ chainId: '0x61' }], // BSC Testnet
            }).catch((error) => {
                this.walletStatus = false;
                console.log(error);
            });

            await window.ethereum.request({
                method: 'wallet_requestPermissions',
                params: [{
                  'eth_accounts': {},
                }]
            }).catch((error) => {
                this.walletStatus = false;
                console.log(error);
            })
        }
    }

    async connectToContract() {
        if (!this.nft) {
            this.nft = new this.web3Global.eth.Contract(nftAbi.abi, this.nftAddr);
        }

        if (!this.dex) {
            this.dex = new this.web3Global.eth.Contract(dexAbi.abi, this.dexAddr);
        }
    }

    async checkId() {
        let ID = await this.web3Global.eth.net.getId();
        if (ID != MAINNET.params[0].chainIdchainId) {
            await this.connectToMetamask();
        }
    }

    getStatus() {
        return this.walletStatus
    }
}

const walletManager = {
    install(Vue, options) {
        console.log(options);
        Vue.prototype.walletManager = new _walletManager();
    }
}

export default walletManager;
