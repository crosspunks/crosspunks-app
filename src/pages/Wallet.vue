<template>
    <div class="container-fluid" style="min-height: 500px">
        <div class="row">
            <div class="col">
                <div class="">
                    <div class="">
                        <div v-if="this.walletStatus" class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <div class="row"><h1>Your Wallet</h1></div>
                                    <div class="row">
                                        <p>{{ walletAddr }}</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div v-if="userAirDrop.isExists == null" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <div v-else>
                                        <div v-if="userAirDrop.isExists">
                                            <div style="margin-top: 20px;" class="row"><p><b>You Invited To Buy</b> {{ userAirDrop.referral_buy_index }} <b>CrossPunks</b></p></div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="row">
                                                        <p>your invite code : <b>{{ userAirDrop.id }}</b></p>
                                                    </div>
                                                    <div class="row" >
                                                        <p>your invite link : <a v-bind:href="'https://crosspunks.com/i/' + userAirDrop.id">https://crosspunks.com/i/{{ userAirDrop.id }}</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else >
                                            <div class="row">
                                                <button type="button" class="btn btn-primary" @click="getAirDropLink">Generate Invite Link
                                                    <div v-if="airDropLoading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                        <span class="sr-only">Loading...</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" >
                                        <p class="text-success">{{ withdraw_msg }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <h3>
                                    Owned CrossPunks
                                    <b>({{ crossPunksBalance }})</b>
                                </h3>
                            </div>
                        </div>

                        <div v-if="!this.walletStatus" class="row">
                            <div v-if="this.walletManager.web3Global !== false" style="margin: 0 auto">
                                <button type="button" class="btn">
                                    <div class="spinner-border" style="width: 3rem; height: 3rem; margin-bottom: 4px;" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button>
                            </div>
                            <div v-else class="text-center" style="margin: 0 auto">
                                <h1>Connect your Metamask</h1>
                                <div class="text-center" style="margin-bottom: 20px"></div>
                                <button v-if="this.walletStatus == null" @click="walletManager.connectToMetamask()" type="button" class="btn btn-primary">
                                    Connect Wallet
                                </button>
                                <button v-else type="button" class="btn btn-primary">
                                    Connect Wallet
                                    <div class="spinner-border" style="width: 1rem; height: 1rem; margin-bottom: 4px;" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Wallet",
    data() {
        return {
            walletStatus: false,
            is_load_data: false,
            crossPunksBalance: "",
            withdraw_msg: "",
            userBalanceOf: "",
            userAirDrop: {},
            airDropLoading: false,
            walletAddr: "",
        };
    },
    mounted() {
        setInterval(() => {
            this.walletStatus = this.walletManager.walletStatus;
            if (this.walletStatus && !this.is_load_data) {
                this.is_load_data = true;
                this.showData();
            }
        }, 100);
    },
    methods: {
        async showData() {
            (async () => {
                this.walletAddr = await this.walletManager.web3Global.eth.getCoinbase();

                let bf = await this.walletManager.nft.methods
                    .balanceOf(
                        this.walletAddr
                    )
                    .call();
                // this.crossPunksBalance = this.walletManager.web3Global.utils
                //     .BN(bf)
                //     .toString();

                this.crossPunksBalance = bf;
            })();

            (async () => {
                this.walletAddr = await this.walletManager.web3Global.eth.getCoinbase();

                this.userAirDrop = await this.walletManager.nft.methods
                    .usersAirdrop(
                        this.walletAddr
                    )
                    .call();
                this.airDropLoading = false;
            })();
        },

        async withdrawCrossPunksBNB() {
            if (this.userBalanceOf > 0) {
                this.withdraw_msg = "";
                try {
                    await this.walletManager.nft.methods.withdraw().send({
                        feeLimit: 300000000,
                        shouldPollResponse: false,
                    });

                    this.withdraw_msg =
                        "Your transaction has been broadcast to network!";
                } catch (e) {
                    console.log(e.message);
                }
            }
        },

        async getAirDropLink() {
            if (!this.airDropLoading) {
                this.airDropLoading = true;

                try {
                    await this.walletManager.ntf.methods.startAirDrop().send({
                        feeLimit: 300000000,
                        shouldPollResponse: false,
                    });
                } catch (e) {
                    console.log(e.message);
                }

                setTimeout(() => {
                    this.showData();
                }, 5000);
            }
        },
    },
};
</script>
