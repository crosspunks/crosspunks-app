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

    nftAddr = "0x51c5aF9FEcF83439d78FD07C834cfDf872ff2A38";
    dexAddr = "0xDe6b13a12F301763eb786D25f70aA6Bc9A7517f2";

    constructor() {
        if (window.ethereum) {
            this.web3Global = new Web3(ethereum);
            this.walletStatus = true;
            try {
                ethereum.enable();
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
            window.ethereum.request(TESTNET).catch((error) => {
                console.log(error);
            });

            window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                // params: [{ chainId: '0x38' }], // BSC Mainnet
                params: [{ chainId: '0x61' }], // BSC Testnet
            }).catch((error) => {
                console.log(error);
            });
        }

        if (this.walletStatus) {
            this.nft = new this.web3Global.eth.Contract(nftAbi.abi, this.nftAddr);
            this.dex = new this.web3Global.eth.Contract(dexAbi.abi, this.dexAddr);
        }
    }

    async connectToMetamask() {
        if (window.ethereum) {
            this.web3Global = new Web3(ethereum);
            this.walletStatus = true;
            try {
                ethereum.enable();
            } catch (error) {
                console.log(error);
            }
        } else if (window.web3) {
            this.web3Global = new Web3(web3.currentProvider);
            //this.walletStatus = true;
        } else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
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
