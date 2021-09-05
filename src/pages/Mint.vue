<template>
    <div class="container-fluid" style="min-height: 500px">
        <div class="row">
            <div class="col">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4 card">
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

                            <!-- <div class="row mb-3">
                                <p class="link-primary button" style="font-size: 12px; color: blue; display: inline-block; margin: 0 auto; cursor: pointer;" @click="toggleIL">
                                    i have invite code
                                </p>
                            </div> -->
                            <div class="form-group row" v-if="toggleInviteLink">
                                <div class="col-md-3"></div>
                                <div class="col-md-6">
                                    <input type="text" value="" placeholder="invite code" class="form-control" v-model="invite_code_input" />
                                </div>
                                <div class="col-md-3"></div>
                            </div>

                            <button v-if="this.walletStatus" class="btn btn-primary" @click="getPunk">
                                Mint a CrossPunks
                                <div v-if="btn_loading" class="spinner-border" style=" width: 1rem; height: 1rem; margin-bottom: 4px;" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </button>
                            <button v-else @click="walletManager.connectToMetamask()" class="btn btn-primary">
                                Connect Wallet
                            </button>
                            <!-- <button v-else class="btn btn-primary">
                                connect to wallet
                                <div class="spinner-border" style="width: 1rem; height: 1rem; margin-bottom: 4px;" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </button> -->

                            <p class="text-success">{{ box_msg }}</p>
                            <p class="text-danger">{{ box_msg_danger }}</p>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Mint",
    data() {
        return {
            walletStatus: false,
            punkLeft: "",
            loadPunk: false,
            box_msg: "",
            box_msg_danger: "",
            btn_loading: false,
            toggleInviteLink: false,
            invite_code_input: "",
            crosspunks_count: 1,
        };
    },
    mounted() {
        let item = window.localStorage.getItem("inviteKey");
        if (item > 0) {
            this.invite_code_input = item;
        }

        setInterval(() => {
            this.walletStatus = this.walletManager.walletStatus;
            if (this.walletStatus && !this.loadPunk) {
                this.loadPunk = true;
                this.loadPunkLeft();
            } else if (!this.walletStatus) {
                this.walletManager.connectToMetamask();
            }
        }, 100);
    },
    methods: {
        async getPunk() {
            let from = await this.walletManager.web3Global.eth.getCoinbase();
            if (!this.btn_loading) {
                this.btn_loading = true;
                this.box_msg = "";
                this.box_msg_danger = "";
                try {
                    let invite_code = this.invite_code_input.trim();
                    let fee = 0;
                    if (this.crosspunks_count <= 3) {
                        fee = 300000000;
                    } else if (this.crosspunks_count <= 10) {
                        fee = 600000000;
                    } else {
                        fee = 1000000000;
                    }
                    // await this.walletManager.contract.mintNFT(this.crosspunks_count).send({
                    await this.walletManager.nft.methods
                        .mintNFTAirDrop(
                            this.crosspunks_count,
                            invite_code > 0 ? invite_code : 0
                        )
                        .send({
                            from,
                            feeLimit: fee,
                            value: this.walletManager.web3Global.utils.toWei((this.crosspunks_count * 100).toString(), 'finney'),
                            shouldPollResponse: false,
                        });

                    this.box_msg =
                        "Your transaction has been broadcast to network!";
                } catch (e) {
                    this.box_msg_danger = e.message;
                    console.log(e.message);
                }

                setTimeout(() => {
                    this.loadPunkLeft();
                }, 10000);

                this.btn_loading = false;
            }
        },
        async loadPunkLeft() {
            setTimeout(async () => {
                let number = await this.walletManager.nft.methods
                    .totalSupply()
                    .call();
                this.punkLeft = 10000 - number;
            }, 1000);
        },

        async toggleIL() {
            this.toggleInviteLink = !this.toggleInviteLink;
        },
    },
};
</script>
