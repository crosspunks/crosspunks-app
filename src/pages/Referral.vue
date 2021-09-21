<template>
    <div class="container-fluid" style="min-height: calc(100vh - 225px)">
        <div class="row">
            <div class="col">
                <div class="">
                    <div class="">
                        <div v-if="this.walletStatus" class="container-fluid crosspunk-card">
                            <div class="col">
                                <div class="col">
                                    <div class="row justify-content-center"><h1>Your Wallet</h1></div>
                                    <div class="row justify-content-center">
                                        <p style="text-overflow: ellipsis; width: 100%; overflow: hidden;">{{ walletAddr }}</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div v-if="userAirDrop.isExists == null" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                    <div v-else>
                                        <div v-if="userAirDrop.isExists">
                                            <div style="margin-top: 20px;" class="row justify-content-center"><p><b>You Invited To Buy</b> {{ userAirDrop.referral_buy_index }} <b>CrossPunks</b></p></div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="row justify-content-center">
                                                        <p>Your invite code : <b>{{ userAirDrop.id }}</b></p>
                                                    </div>
                                                    <div class="row justify-content-center">
                                                        <p>Your invite link : <a class="crosspunk-a" v-bind:href="'https://crosspunks.com/#/i/' + userAirDrop.id">https://crosspunks.com/#/i/{{ userAirDrop.id }}</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="row justify-content-center">
                                                <button id="invite-link" type="button" class="btn crosspunk-btn" @click="getAirDropLink">Generate Invite Link
                                                    <div v-if="airDropLoading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                        <span class="sr-only">Loading...</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-md-center">
                                        <div class="crosspunk-reward">
                                            <p>CrossPunks has a decentralized reward system for inviting users! 10% of the purchase amount will be sent directly to your BNB wallet! No worries the price for your friend won't change.</p>
                                            <p>Click on the button above to generate a referral link!</p>
                                        </div>
                                    </div>
                                    <div class="row" >
                                        <p class="text-success">{{ withdraw_msg }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="row">
                                <h3>
                                    Owned CrossPunks
                                    <b>({{ crossPunksBalance }})</b>
                                </h3>
                            </div> -->
                        </div>

                        <div v-if="!this.walletStatus" class="row">
                            <!-- <div v-if="this.walletManager.web3Global !== false" style="margin: 0 auto">
                                <button type="button" class="btn">
                                    <div class="spinner-border" style="width: 3rem; height: 3rem; margin-bottom: 4px;" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button>
                            </div> -->
                            <div class="text-center" style="margin: 0 auto">
                                <h1>Connect your Metamask</h1>
                                <div class="text-center" style="margin-bottom: 20px"></div>
                                <button id="connect-wallet" @click="walletManager.connectToMetamask()" type="button" class="btn crosspunk-btn">
                                    Connect Wallet
                                </button>
                                <!-- <button v-else type="button" class="btn crosspunk-btn">
                                    Connect Wallet
                                    <div class="spinner-border" style="width: 1rem; height: 1rem; margin-bottom: 4px;" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media only screen and (min-width: 992px) {
    .crosspunk-reward {
        width: 50%;
    }
}

p {
    text-align: center;
}

.crosspunk-reward {
    margin-top: 15px;
}
</style>

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
            await this.walletManager.checkId();
            let signer = await this.walletManager.web3Global.getSigner();
            this.walletAddr = await signer.getAddress();
            (async () => {
                let bf = await this.walletManager.nft.balanceOf(this.walletAddr);
                this.crossPunksBalance = bf;
            })();

            (async () => {
                this.userAirDrop = await this.walletManager.nft.usersAirdrop(this.walletAddr);
                this.airDropLoading = false;
            })();
        },
        async getAirDropLink() {
            if (!this.airDropLoading) {
                this.airDropLoading = true;
                let signer = await this.walletManager.web3Global.getSigner();
                let nftSigner = this.walletManager.nft.connect(signer);
                try {
                    await nftSigner.startAirDrop();
                } catch (e) {
                    console.log(e.message);
                }

                setTimeout(() => {
                    this.showData();
                }, 10000);
            }
        },
    },
};
</script>
