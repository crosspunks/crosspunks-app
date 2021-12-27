<template>
    <div class="container-fluid" style="min-height: calc(100vh - 225px)">
        <div class="row">
            <div class="col">
                <div class="row factory-header">
                    <h2>Fuel up to survive!</h2>
                </div>
                <div class="row factory-items">
                    <div v-for="(item, index) in lps" v-bind:key="item.id" class="factory-item">
                        <div class="factory-item-header">
                            <img :src="item.path_img">
                            {{ item.name_lp }}
                        </div>
                        <div class="factory-item-earned">
                            <p>FUEL Earned</p>
                            <div>
                                {{ item.fuel_earned }}
                                <button v-if="item.harvest" @click="drain(index)" class="btn">
                                    Drain fuel
                                    <div v-if="item.harvest_btn_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </button>
                                <button v-else disabled="" class="btn">Drain fuel</button>
                            </div>
                        </div>
                        <div class="factory-item-staked">
                            <p>{{ item.name_lp }} STAKED</p>
                            <div v-if="!item.approve">
                                <button @click="approve(index)" class="btn">Enable Contract</button>
                            </div>
                            <div v-else class="factory-lp">
                                {{ item.lp_staked }}
                                <div>
                                    <button @click="enableModalStake(index)" class="btn factory-lp-btn">+</button>
                                    <button @click="enableModalUnstake(index)" class="btn factory-lp-btn">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="modal_stake">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Stake tokens</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" @click="modal_stake = false">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="form" >
                                        <div class="form-group">
                                            <label>Stake</label>
                                            <input v-model="stake_amount" type="number" class="form-control" placeholder="0">
                                        </div>
                                    </div>
                                    <div>
                                        <p v-if="stake_error" class="text-danger">{{ stake_error }}</p>
                                        <p v-if="stake_msg" class="text-success">{{ stake_msg }}</p>
                                    </div>
                                </div>
                                <div class="modal-footer" style="display: block">
                                    <button type="button" class="btn btn-secondary" style="float: left" @click="modal_stake = false">Close</button>
                                    <div>
                                        <button id="submit" type="button" class="btn factory-btn" @click="deposit()" style="float: right">
                                            Submit
                                            <div v-if="stake_btn_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div v-if="modal_unstake">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Unstake tokens</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" @click="modal_unstake = false">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="form" >
                                        <div class="form-group">
                                            <label>Unstake</label>
                                            <input v-model="unstake_amount" type="number" class="form-control" placeholder="0">
                                        </div>
                                    </div>
                                    <div>
                                        <p v-if="unstake_error" class="text-danger">{{ unstake_error }}</p>
                                        <p v-if="unstake_msg" class="text-success">{{ unstake_msg }}</p>
                                    </div>
                                </div>
                                <div class="modal-footer" style="display: block">
                                    <button type="button" class="btn btn-secondary" style="float: left" @click="modal_unstake = false">Close</button>
                                    <div>
                                        <button id="submit" type="button" class="btn factory-btn" @click="withdraw()" style="float: right">
                                            Submit
                                            <div v-if="unstake_btn_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ConnectWallet from "../components/ConnectWallet.vue";

export default {
    name: "Factory",
    data() {
        return {
            walletStatus : false,
            walletAddr: '',
            is_load_factory: false,
            tx_error: '',
            // Stake modal
            modal_stake: false,
            stake_amount: 0,
            stake_error: '',
            stake_msg: '',
            stake_btn_loading: false,
            stake_id: 0,
            // Unstake modal
            modal_unstake: false,
            unstake_amount: 0,
            unstake_error: '',
            unstake_msg: '',
            unstake_btn_loading: false,
            unstake_id: 0,
            // LP data
            lps: [{}]
        }
    },
    components: {
        ConnectWallet
    },
    mounted() {
        this.walletStatus = this.walletManager.walletStatus;

        setInterval(()=>{
            this.walletStatus = this.walletManager.walletStatus
            if(!this.is_load_factory){
                this.is_load_factory = true;
                this.loadData();
            }
        }, 100);
    },
    methods: {
        async loadData() {
            try {
                await this.walletManager.checkId();
                let signer = await this.walletManager.web3Global.getSigner();
                this.walletAddr = await signer.getAddress();
            } catch (e) {
                console.log(e);
            }

            for(let i = 0; i < this.lps.length; i++) {
                this.lps[i].contract = await this.walletManager.connectToContractToken(this.lps[i].address_lp);
                this.checkApproved(i);
                this.getEarned(i);
                this.getStaked(i);
            }
        },
        enableModalStake(id) {
            this.modal_stake = true;
            this.stake_id = this.lps[id].id;
        },
        enableModalUnstake(id) {
            this.modal_unstake = true;
            this.unstake_id = this.lps[id].id;
        },
        async checkApproved(id) {
            let amount = await this.lps[id].contract.allowance(this.walletAddr, this.walletManager.stakingAddr);
            if (amount == 0) {
                this.lps[id].approve = false;
            } else {
                this.lps[id].approve = true;
            }
        },
        async approve(id) {
            let signer = await this.walletManager.web3Global.getSigner();
            let contractSigner = this.lps[id].contract.connect(signer);

            try {
                await contractSigner.approve(this.walletManager.stakingAddr, this.walletManager.ethers.constants.MaxUint256);
            } catch (e) {
                console.log(e);
            }

            setTimeout(async () => {
                await this.checkApproved(id);
            }, 10000);
        },
        async getStaked(id) {
            let staked = await this.walletManager.staking.userInfo(this.lps[id].id, this.walletAddr);
            this.lps[id].lp_staked = this.formatEther(this.walletManager.ethers.utils.formatEther(staked.amount));
        },
        formatEther(str) {
            let index = str.indexOf(".");
            return str.substring(0, index + 4);
        },
        async drain(id) {
            let signer = await this.walletManager.web3Global.getSigner();
            let stakingSigner = this.walletManager.staking.connect(signer);

            this.tx_error = '';

            if (!this.lps[id].harvest_btn_loading) {
                this.lps[id].harvest_btn_loading = true;
                try {
                    await stakingSigner.deposit(this.lps[id].id, 0);

                    setTimeout(async () => {
                        await this.loadData();
                        this.lps[id].harvest_btn_loading = false;
                    }, 10000);
                } catch (e) {
                    await this.loadData();

                    if (e.data) {
                        this.tx_error = e.data.message;
                    } else {
                        this.tx_error = e.message;
                    }

                    this.lps[id].harvest_btn_loading = false;
                }
            }
        },
        async deposit() {
            let signer = await this.walletManager.web3Global.getSigner();
            let stakingSigner = this.walletManager.staking.connect(signer);

            this.stake_msg = '';
            this.stake_error = '';

            if (!this.stake_btn_loading) {
                this.stake_btn_loading = true;
                try {
                    let amount = this.walletManager.ethers.utils.parseUnits(this.stake_amount.toString(), 'ether');
                    await stakingSigner.deposit(this.stake_id, amount);

                    this.stake_msg = "Your transaction has been broadcast to network!";

                    setTimeout(async () => {
                        await this.loadData();
                        this.stake_btn_loading = false;
                        this.modal_stake = false;
                    }, 10000);
                } catch (e) {
                    await this.loadData();

                    if (e.data) {
                        this.stake_error = e.data.message;
                    } else {
                        this.stake_error = e.message;
                    }

                    this.stake_btn_loading = false;
                }
            }
        },
        async withdraw() {
            let signer = await this.walletManager.web3Global.getSigner();
            let stakingSigner = this.walletManager.staking.connect(signer);

            this.unstake_msg = '';
            this.unstake_error = '';

            if (!this.unstake_btn_loading) {
                this.unstake_btn_loading = true;
                try {
                    let amount = this.walletManager.ethers.utils.parseUnits(this.unstake_amount.toString(), 'ether');
                    await stakingSigner.withdraw(this.unstake_id, amount);

                    this.unstake_msg = "Your transaction has been broadcast to network!";

                    setTimeout(async () => {
                        await this.loadData();
                        this.unstake_btn_loading = false;
                        this.modal_unstake = false;
                    }, 10000);
                } catch (e) {
                    await this.loadData();

                    if (e.data) {
                        this.unstake_error = e.data.message;
                    } else {
                        this.unstake_error = e.message;
                    }

                    this.unstake_btn_loading = false;
                }
            }
        }
    }
}
</script>

<style scoped>
    .container-fluid {
        margin-top: -50px;
    }

    .factory-header {
        height: 230px;
        background-image: url('/img/factories.svg');
        color: white;
    }

    .factory-header > h2 {
        margin: auto;
        color: white;
        background: rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        padding: 10px 20px;
    }

    .factory-items {
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }

    .factory-item {
        color: white;
        font-weight: 500;
        border-radius: 15px;
        border: #4f6c59 solid 2px;
        padding: 20px;
        width: 350px;
    }

    .factory-item-header {
        font-size: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .factory-item-header > img {
        width: 50px;
    }

    .factory-item-earned > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .factory-item-earned > p, .factory-item-staked > p {
        font-size: 12px;
    }

    .factory-item-earned .btn, .factory-item-staked .btn {
        background-color: #4f6c59;
        color: white;
    }

    .factory-item-staked .btn {
        width: 100%;
    }

    .factory-lp {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .factory-lp-btn {
        width: 40px !important;
        height: 40px;
        margin-left: 10px;
    }
</style>