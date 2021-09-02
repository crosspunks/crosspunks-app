<template>
    <div class="container-fluid" style="min-height: 500px">
        <div class="row">
            <div class="col">
                <div class="">
                    <div class="" >

                        <div v-if="this.walletStatus" class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <div class="row"><h1>Your Wallet</h1></div>
                                    <div class="row"><p>{{ walletManager.ttronWeb.defaultAddress.base58 }}</p></div>
                                </div>
                                <div class="col">
<!--                                    <div v-if="userAirDrop.isExists == null" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px"   role="status">-->
<!--                                        <span class="sr-only">Loading...</span>-->
<!--                                    </div>-->
<!--                                    <div v-else>-->
<!--                                        <div v-if="userAirDrop.isExists" >-->
<!--                                            <div style="margin-top: 20px;" class="row"><p><b>You Invited To Buy</b> {{ userAirDrop.referral_buy_index }} <b>CrossPunks</b></p></div>-->
<!--                                            <div class="row">-->
<!--                                               <div class="col" >-->
<!--                                                   <div class="row" >-->
<!--                                                       <p>your invite code : <b>{{ userAirDrop.id }}</b></p>-->
<!--                                                   </div>-->
<!--                                                   <div class="row" >-->
<!--                                                       <p>your invite link : <a v-bind:href="'https://crosspunks.com/i/' + userAirDrop.id">https://crosspunks.com/i/{{ userAirDrop.id }}</a></p>-->
<!--                                                   </div>-->
<!--                                               </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div v-else >-->
<!--                                            <div class="row">-->
<!--                                                <button type="button" class="btn btn-primary" @click="getAirDropLink">Generate Invite Link-->
<!--                                                    <div v-if="airDropLoading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px"   role="status">-->
<!--                                                        <span class="sr-only">Loading...</span>-->
<!--                                                    </div>-->
<!--                                                </button>-->
<!--                                            </div>-->
<!--                                        </div>-->

<!--                                    </div>-->

<!--                                    <div class="row" >-->
<!--                                        <p class="text-success">{{ withdraw_msg }}</p>-->
<!--                                    </div>-->
                                </div>
                            </div>
                            <div class="row"><h3>Owned CrossPunks <b>({{ tronPunksBalance }})</b></h3></div>
                        </div>

                        <div v-if="!this.walletStatus" class="row">

                            <div v-if="this.walletStatus==false" style="margin: 0 auto;">
                                <button  type="button" class="btn" >
                                    <div class="spinner-border" style="width: 3rem; height: 3rem;margin-bottom: 4px"   role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button>
                            </div>
                            <div v-else class="text-center" style="margin: 0 auto;">
                                <h1> Connect your Tron Wallet </h1>
                                <div class="text-center" style="margin-bottom: 20px;">
                                </div>
                                <button v-if="this.walletStatus == null" @click="walletManager.connectToTronLInk()" type="button" class="btn btn-primary">
                                    Connect Wallet
                                </button>
                                <button v-else type="button" class="btn btn-primary">
                                    Connect Wallet
                                    <div class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px"   role="status">
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
  name: "Details",
  data(){
    return {
        walletStatus : false,
        is_load_data : false,
        tronPunksBalance : '',
        withdraw_msg : '',
        userBalanceOf : '',
        userAirDrop : {},
        airDropLoading : false
    }
  },
  mounted() {
      setInterval(()=>{
          this.walletStatus = this.walletManager.walletStatus;
          if(this.walletStatus && !this.is_load_data){
              this.is_load_data = true;
              this.showData();
          }
      }, 100);
  },
    methods: {
      async showData(){
          (async()=>{
              let bf = await this.walletManager.contract.balanceOf(this.walletManager.ttronWeb.defaultAddress.base58).call();
              this.tronPunksBalance = this.walletManager.tronWebGlobal.BigNumber(bf).toNumber();
          })();
          (async()=>{
              this.userAirDrop = await this.walletManager.contract.usersAirdrop(this.walletManager.ttronWeb.defaultAddress.base58).call();
              this.airDropLoading = false;
          })();
      },

      async withdrawTronPunksTRX() {
            if (this.userBalanceOf > 0) {
                this.withdraw_msg = '';
                try {
                    await this.walletManager.contract.withdraw().send({
                        feeLimit: 300000000,
                        shouldPollResponse: false
                    });

                    this.withdraw_msg = 'Your transaction has been broadcast to network !'

                } catch (e) {
                    console.log(e.message);
                }
            }
        },

      async getAirDropLink(){
        if(!this.airDropLoading){
            this.airDropLoading = true;

            try {
                await this.walletManager.contract.startAirDrop().send({
                    feeLimit: 300000000,
                    shouldPollResponse: false
                });
            }catch (e) {
                console.log(e.message);
            }
            setTimeout(()=>{
                this.showData();
            }, 5000);

        }
      }

  },
};
</script>
