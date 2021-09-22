<template>
    <div class="container-fluid" style="min-height: calc(100vh - 225px)">
        <div class="row">
            <div class="col">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4 crosspunk-card">
                        <div class="card-body" style="text-align: center">
                            <h4 class="card-title pb-2">
                                <strong>Mint A CrossPunk</strong>
                            </h4>
                            <p class="card-text">
                                It costs 0.1 BNB to mint a CrossPunk
                            </p>
                            <p class="card-text">CrossPunks left : {{ punkLeft }}</p>
                            <div class="form-group row">
                                <div class="col-md-3"></div>
                                <div class="col-md-6">
                                    <select class="form-control" v-model="crosspunks_count">
                                        <option value="1">1 x CrossPunk</option>
                                        <option value="2">2 x CrossPunk</option>
                                        <option value="5">5 x CrossPunk</option>
                                        <option value="10">10 x CrossPunk</option>
                                        <option value="15">15 x CrossPunk</option>
                                        <option value="20">20 x CrossPunk</option>
                                    </select>
                                </div>
                                <div class="col-md-3"></div>
                            </div>

                            <div class="row mb-3">
                                <p class="link-primary button" style="font-size: 12px; display: inline-block; margin: 0 auto; cursor: pointer;" @click="toggleIL">
                                    I have invite code
                                </p>
                            </div>
                            <div class="form-group row" v-if="toggleInviteLink">
                                <div class="col-md-3"></div>
                                <div class="col-md-6">
                                    <input type="text" value="" placeholder="Invite code" class="form-control" v-model="invite_code_input" />
                                </div>
                                <div class="col-md-3"></div>
                            </div>

                            <button id="mint" v-if="this.walletStatus" class="btn crosspunk-btn" @click="getPunk">
                                Mint a CrossPunks
                                <div v-if="btn_loading" class="spinner-border" style=" width: 1rem; height: 1rem; margin-bottom: 4px;" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </button>
                            <ConnectWallet v-else></ConnectWallet>

                            <p class="text-success">{{ box_msg }}</p>
                            <p class="text-danger">{{ box_msg_danger }}</p>

                            <div style="text-align: left;">
                                <p>1) Choose CrossPunk amout you want to buy, click the Mint button</p>
                                <p>2) Click on Metamask pop-up and change network to Binance Smart Chain (if needed)</p>
                                <p>3) Click the Mint button another time to initiate the process</p>
                                <p>4) Wait till the end of Minting</p>
                                <p>5) Create your referal link to share with your friends!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ConnectWallet from "../components/ConnectWallet.vue"

export default {
    name: "Mint",
    data() {
        return {
            walletStatus: false,
            punkLeft: "0",
            loadPunk: false,
            box_msg: "",
            box_msg_danger: "",
            btn_loading: false,
            toggleInviteLink: false,
            invite_code_input: "",
            crosspunks_count: 1,
            error_connect: false
        };
    },
    components: {
        ConnectWallet
    },
    mounted() {
        let item = window.localStorage.getItem("inviteKey");
        if (item > 0) {
            this.invite_code_input = item;
        }

        setInterval(() => {
            this.walletStatus = this.walletManager.walletStatus;
            if (!this.loadPunk) {
                this.loadPunk = true;
                this.loadPunkLeft();
            }
        }, 100);
    },
    methods: {
        async getPunk() {
            let signer = await this.walletManager.web3Global.getSigner();
            let nftSigner = this.walletManager.nft.connect(signer);

            if (!this.btn_loading) {
                this.btn_loading = true;
                this.box_msg = "";
                this.box_msg_danger = "";

                try {
                    let invite_code = this.invite_code_input.trim();

                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "begin_checkout",
                        ecommerce: {
                            items: [{
                                item_name: "Punk", // Name or ID is required.
                                item_id: "0",
                                price: 50.0,
                                item_brand: "CrossPunks",
                                index: 1,
                                quantity: this.crosspunks_count
                            }]
                        }
                    });

                    if (window.ym) {
                        window.ym(85239514,'reachGoal','mint');
                    }

                    await nftSigner
                        .mintNFTAirDrop(
                            this.crosspunks_count,
                            invite_code > 0 ? invite_code : 0,
                            {
                                value: this.walletManager.ethers.utils.parseUnits((this.crosspunks_count * 100).toString(), 'finney'),
                                gasLimit: 400000 * this.crosspunks_count,
                                gasPrice: 20000000000
                            }
                        );

                    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "purchase",
                        ecommerce: {
                            transaction_id: "T12345",
                            affiliation: invite_code,
                            value: "50.0",
                            currency: "EUR",
                            items: [{
                                item_name: "Punk",
                                item_id: "0",
                                price: "50.0",
                                item_brand: "CrossPunks",
                                quantity: 1
                            }]
                        }
                    });

                    if (window.ym) {
                        window.ym(85239514,'reachGoal','purchase');
                    }

                    this.box_msg = "Your transaction has been broadcast to network!";
                } catch (e) {
                    if (e.data) {
                        this.box_msg_danger = e.data.message;
                    } else {
                        this.box_msg_danger = e.message;
                    }
                    this.btn_loading = false;
                }

                setTimeout(() => {
                    this.loadPunkLeft();
                }, 10000);

                this.btn_loading = false;
            }
        },
        async loadPunkLeft() {
            await this.walletManager.checkId();
            setTimeout(async () => {
                let number = await this.walletManager.nft.totalSupply();
                this.punkLeft = 10000 - number;
            }, 1000);
        },
        async toggleIL() {
            this.toggleInviteLink = !this.toggleInviteLink;
        }
    }
};
</script>
