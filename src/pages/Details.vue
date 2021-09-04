<template>
    <div class="container">
        <div class="row" style="min-height: 300px;">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div v-if="!this.walletStatus" class="row">
                    <div v-if="this.walletStatus==false" style="margin: 0 auto;">
                        <button type="button" class="btn">
                            <div class="spinner-border" style="width: 3rem; height: 3rem;margin-bottom: 4px" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </button>
                    </div>
                    <div v-else class="text-center" style="margin: 0 auto;">
                        <h1> Connect your Metamask</h1>
                        <div class="text-center" style="margin-bottom: 20px;"></div>
                        <button v-if="this.walletStatus == null" @click="walletManager.connectToMetamask()" type="button" class="btn btn-primary">
                            Connect Wallet
                        </button>
                        <button v-else type="button" class="btn btn-primary">
                            Connect Wallet
                            <div class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div v-if="punk_loading" class="text-center">
                    <button  type="button" class="btn" style="margin: 0 auto;">
                        <div class="spinner-border" style="width: 3rem; height: 3rem;margin-bottom: 4px" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </button>
                </div>
                <div v-else>
                    <div class="row" >
                        <div class="col-md-6" >
                            <img v-if="crypto_Punks.indexOf(currentPunk.idx) > -1" class="card-img-top pixelated" :src="(`/crypto/${currentPunk.idx}.png`)">
                            <img v-else class="card-img-top pixelated" :src="(`/crosspunks/punk${currentPunk.idx}.png`)">
                        </div>
                        <div class="col-md-6" >
                            <div class="pl-3">
                                <div class="row" >
                                    <h3>CrossPunk #{{ currentPunk.idx }}</h3>
                                </div>
                                <div class="row" >
                                    <h5>{{ currentPunk.type }}</h5>
                                </div>
                                <div class="row" >
                                    <p v-if="this.token_owner">owned by : <a target="_blank" :href="'https://bscscan.com/address/'+ this.token_owner">{{ this.token_owner.substr(0, 8)}}</a></p>
                                    <p v-else >not mined</p>
                                </div>
                                <div class="row" >
                                    <span v-for="(tag, index) in currentPunk.attributes" v-bind:key="index" style="margin-right: 4px; margin-bottom: 4px;" class="badge badge-primary">{{ tag }} ({{ punks_attributes[tag] }})</span>
                                </div>
                                <div class="row" >
                                    <p style="font-size: 18px">Rank {{ currentPunk.rank }}</p>
                                </div>
                                <hr />
                                <div v-if="this.token_owner">
                                    <div class="row" >
                                        <h5>Market Summary</h5>
                                    </div>
                                    <div v-if="!is_for_sale" class="row text-danger">
                                        <p>it's not for sale</p>
                                    </div>
                                    <div v-if="is_for_sale">
                                        <div class="row text-success">
                                            <p>Offered by owner for <span style="color: #000">{{ sale_by_owner }} BNB</span></p>
                                        </div>
                                        <div v-if="this.walletStatus">
                                            <div v-if="punkBids.hasBid" class="row text-warning" >
                                                <p>There is a bid of <span style="color: #000">{{ punkBids.value }} BNB</span> for this punk from <a :href="'https://bscscan.com/address/'+ this.punkBids.bidder">{{ this.punkBids.bidder.substr(0, 8)}}</a></p>
                                            </div>
                                            <div v-if="punkBids.bidder === walletAddr" class="row mb-2">
                                                <div class="col-md-12" >
                                                    <button class="btn btn-warning btn-block" @click="cancelBid">
                                                        Cancel Bid
                                                        <div v-if="cancel_btn_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                            <span class="sr-only">Loading...</span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>

                                            <div v-if="this.token_owner !== walletAddr" class="row">
                                                <div class="col-md-6" >
                                                    <button class="btn btn-success btn-block" @click="buy">
                                                        Buy
                                                        <div v-if="buy_btn_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                            <span class="sr-only">Loading...</span>
                                                        </div>
                                                    </button>
                                                </div>
                                                <div class="col-md-6" >
                                                    <button class="btn btn-primary btn-block" @click="showBidModal()">Bid</button>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <div v-if="punkBids && punkBids.hasBid" class="row mb-2">
                                                    <div class="col-md-12">
                                                        <button @click="acceptBid" class="btn btn-info btn-block" >
                                                            Accept Bid
                                                            <div v-if="accept_bid_btn_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                                <span class="sr-only">Loading...</span>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div  class="row">
                                                    <div class="col-md-12">
                                                        <button @click="cancelSelling" class="btn btn-warning btn-block">
                                                            Cancel Selling
                                                            <div v-if="cancel_btn_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                                <span class="sr-only">Loading...</span>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else-if="this.walletStatus && this.token_owner.toLowerCase() == this.walletAddr.toLowerCase()" class="row">
                                        <div class="col-md-12" >
                                            <button @click="showOfferForSale()" class="btn btn-primary btn-block">
                                                offer for sale
                                            </button>
                                        </div>
                                    </div>
                                    <div v-if="!this.walletStatus" class="row">
                                        <div class="text-center" style="margin: 0 auto;">
                                            <button v-if="this.walletStatus == null" @click="walletManager.connectToMetamask()" type="button" class="btn btn-primary">
                                                Connect Wallet
                                            </button>
                                            <button v-else type="button" class="btn btn-primary">
                                                Connect Wallet
                                                <div class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div style="margin-top: 40px; width: 100%"><h4 class="text-center">Market History</h4>
                            <table class="table table-sm table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>From</th>
                                        <th>Amount</th>
                                        <th>Txn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="row in marketHistory" v-bind:key="row.txID">
                                        <td>
                                            <span v-if="row.methodName == 'buyPunk'">Bought</span>
                                            <span v-if="row.methodName == 'acceptBidForPunk'">Accept Bid</span>
                                            <span v-if="row.methodName == 'offerPunkForSale'">Offered</span>
                                            <span v-if="row.methodName == 'punkNoLongerForSale'">Offer Withdrawn</span>
                                            <span v-if="row.methodName == 'enterBidForPunk'">Bid</span>
                                            <span v-if="row.methodName == 'withdrawBidForPunk'">Bid Withdrawn</span>
                                        </td>
                                        <td>
                                            <a target="_blank" :href="'https://bscscan.com/address/'+ row.ownerAddress">
                                                {{ row.ownerAddress.substr(0, 8) }}
                                            </a>
                                        </td>
                                        <td>
                                            <span v-if="row.methodName == 'offerPunkForSale'">
                                                {{ walletManager.web3Global.utils.fromWei(row.methodParam[1].hex) }} BNB ~(${{fixInThreeDec(walletManager.web3Global.utils.fromWei(row.methodParam[1].hex) * row.trx_price)}})
                                            </span>
                                            <span v-if="row.methodName == 'enterBidForPunk' || row.methodName == 'buyPunk'">
                                                {{ walletManager.web3Global.utils.fromWei(row.amount) }} BNB ~(${{fixInThreeDec(walletManager.web3Global.utils.fromWei(row.amount) * row.trx_price)}})
                                            </span>
                                        </td>
                                        <td>
                                            <a target="_blank" :href="'https://bscscan.com/tx/' + row.txID">
                                                {{ (new Date(row.blockTimestamp / 1)).getFullYear() + "/" + ((new Date(row.blockTimestamp / 1)).getMonth() + 1) + "/" + (new Date(row.blockTimestamp / 1)).getDate() }}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr v-if="birthday">
                                        <td><span>Born</span></td>
                                        <td>
                                            <a target="_blank" :href="'https://bscscan.com/address/'+ birthday.mint_by">
                                                {{ birthday.mint_by.substr(0, 8) }}
                                            </a>
                                        </td>
                                        <td>1000 BNB</td>
                                        <td>
                                            <span>
                                                {{ (new Date(birthday.mint_date / 1)).getFullYear() + "/" + ((new Date(birthday.mint_date / 1)).getMonth() + 1) + "/" + (new Date(birthday.mint_date / 1)).getDate() }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
        <div v-if="modalOfferForSale">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Offer for sale</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" @click="modalOfferForSale = false">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="form" >
                                        <div class="form-group">
                                            <label>price (BNB)</label>
                                            <input v-model="offer_price" type="number" min="0" class="form-control" placeholder="Enter price">
                                        </div>
                                        <div class="form-group">
                                            <label>sale to special address (optional)</label>
                                            <small class="form-text text-muted">enter wallet address, if you want to sale to special address</small>
                                            <input v-model="offer_wallet_address" type="text" class="form-control" placeholder="Enter Wallet Address">
                                        </div>
                                    </div>
                                    <div>
                                        <p v-if="offer_error" class="text-danger">{{ offer_error }}</p>
                                        <p v-if="offer_msg" class="text-success">{{ offer_msg }}</p>
                                    </div>
                                </div>
                                <div class="modal-footer" style="display: block">
                                    <button type="button" class="btn btn-secondary " style="float: left" @click="modalOfferForSale = false">Close</button>
                                    <div v-if="is_approved_first_time === false">
                                        <button type="button" class="btn btn-primary" @click="offerForSale" style="float: right" :disabled="offer_btn_submit2_disable">
                                            2-Submit
                                            <div v-if="offer_btn_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </button>
                                        <button type="button" class="btn btn-primary" @click="approve()" style="float: right; margin-right: 4px;" :disabled="offer_btn_approve_disable">
                                            1-Approve
                                            <div v-if="offer_btn_approve_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </button>
                                    </div>
                                    <div v-else >
                                        <button type="button" class="btn btn-primary" @click="offerForSale" style="float: right">
                                            Submit
                                            <div v-if="offer_btn_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
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
        <div v-if="modal_bid">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Bid</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" @click="modal_bid = false">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="form" >
                                        <div class="form-group">
                                            <label>price (BNB)</label>
                                            <input v-model="bid_price" type="number" :min="(punkBids.hasBid ? punkBids.value : '')" class="form-control" placeholder="Enter price">
                                        </div>
                                    </div>
                                    <div>
                                        <p v-if="bid_error" class="text-danger">{{ bid_error }}</p>
                                        <p v-if="bid_msg" class="text-success">{{ bid_msg }}</p>
                                    </div>
                                </div>
                                <div class="modal-footer" style="display: block">
                                    <button type="button" class="btn btn-secondary " style="float: left" @click="modal_bid = false">Close</button>
                                    <div>
                                        <button type="button" class="btn btn-primary" @click="bid" style="float: right">
                                            Submit
                                            <div v-if="bid_btn_loading" class="spinner-border" style="width: 1rem; height: 1rem;margin-bottom: 4px" role="status">
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
    export default {
        name: "Details",
        data(){
            return {
                walletStatus : false,
                currentPunk : '',
                is_load_this_punk : false,
                punk_loading : true,
                token_owner : false,
                crypto_Punks : [3442, 910, 846, 794, 377, 373, 300, 224, 220, 81, 57],
                punks_attributes : {},
                is_for_sale : false,
                sale_by_owner : false,
                punkBids : false,
                modalOfferForSale : false,
                offer_btn_loading : false,
                offer_price : '',
                offer_wallet_address : '',
                offer_error : '',
                offer_msg : '',
                is_approved : false,
                is_approved_first_time : null,
                offer_btn_approve_disable : true,
                offer_btn_submit2_disable : true,
                offer_btn_approve_loading : false,
                cancel_btn_loading : false,
                modal_bid : false,
                bid_price : '',
                bid_error : '',
                bid_msg : '',
                bid_btn_loading : false,
                balance : 0,
                accept_bid_btn_loading : false,
                cancel_bid_btn_loading : false,
                buy_btn_loading : false,
                marketHistory : [],
                birthday : false,
                walletAddr: '',
            }
        },
        mounted() {
            if (this.$route.params.id >= 0 && this.$route.params.id < 10000) {
                this.currentPunk = window.punks[this.$route.params.id];
                this.punks_attributes = window.punks_attributes;
                this.walletStatus = this.walletManager.walletStatus;

                setInterval(()=>{
                    if(this.walletStatus && !this.is_load_this_punk){
                        this.is_load_this_punk = true;
                        this.loadData();
                    } else if (!this.walletStatus) {
                        this.walletManager.connectToMetamask();
                        this.walletStatus = this.walletManager.walletStatus
                    }
                }, 100);
            } else {
                window.location.href = '/'
            }
        },
        methods: {
            async loadData() {
                this.walletAddr = await this.walletManager.web3Global.eth.getCoinbase();

                if (!this.walletManager.nft.methods.ownerOf) {
                    this.is_load_this_punk = false;
                } else {
                    try {
                        // let dataServer = await this.$http.get(`https://crosspunks.com/server/history?id=${this.currentPunk.idx}`)
                        // dataServer = JSON.parse(dataServer.data.msg);
                        // this.birthday = dataServer['birthday'] ? dataServer['birthday'][0] : false;
                        // this.marketHistory = [];
                        // for (let r in dataServer['trade_history']) {
                        //     if (dataServer['trade_history'][r].status == "SUCCESS") {
                        //         dataServer['trade_history'][r].data = JSON.parse(dataServer['trade_history'][r].data);
                        //         dataServer['trade_history'][r].methodParam = JSON.parse(dataServer['trade_history'][r].methodParam);
                        //         this.marketHistory.push(dataServer['trade_history'][r]);
                        //     }
                        // }

                        // console.log(this.marketHistory);

                        this.token_owner = await this.walletManager.nft.methods.ownerOf(this.currentPunk.idx).call();

                        this.punkBids = await this.walletManager.dex.methods.punkBids(this.currentPunk.idx).call();
                        if (this.punkBids && this.punkBids.hasBid) {
                            this.punkBids.value = this.punkBids.value / 1000000;
                        }

                        if (this.token_owner == this.walletManager.dexAddr) {
                            this.token_owner = false;
                            let offeredForSale = await this.walletManager.dex.methods.punksOfferedForSale(this.currentPunk.idx).call();
                            this.token_owner = offeredForSale.seller;
                            this.is_for_sale = offeredForSale.isForSale
                            this.sale_by_owner = this.walletManager.web3Global.utils.fromWei(offeredForSale.minValue);
                        } else {
                            this.is_for_sale = false;
                            this.sale_by_owner = false;
                            this.punkBids = false;
                            await this.checkApproved();
                        }

                        this.is_approved_first_time = this.is_approved;

                        if (this.walletStatus) {
                            this.balance = await this.walletManager.web3Global.eth.getBalance(this.walletAddr);
                        } else {
                            this.balance = 0;
                        }
                    } catch (e) {
                        console.log(e);
                    }
                    this.punk_loading = false;
                }

          // let mybalance = await this.walletManager.contract.balanceOf(this.walletManager.ttronWeb.defaultAddress.base58).call();
          // mybalance = (this.walletManager.ttronWeb.BigNumber(mybalance).toNumber());
          //
          // this.myAllPunks = [];
          //
          // for(let i=0; i<mybalance; i++){
          //     let number = await this.walletManager.contract.tokenOfOwnerByIndex(this.walletManager.ttronWeb.defaultAddress.base58, i).call();
          //     this.myAllPunks.push(window.punks[(this.walletManager.ttronWeb.BigNumber(number).toNumber())]);
          // }
            },
            async checkApproved() {
                if (this.token_owner.toLowerCase() === this.walletAddr.toLowerCase()) {
                    this.is_approved = await this.walletManager.nft.methods.isApprovedForAll(this.token_owner, this.walletManager.dexAddr).call();
                }
                if (this.is_approved) {
                    this.offer_btn_approve_disable = true;
                    this.offer_btn_submit2_disable = false;
                } else {
                    this.offer_btn_approve_disable = false;
                    this.offer_btn_submit2_disable = true;
                }
            },
            async showOfferForSale() {
                this.offer_error = "";
                this.offer_msg = "";
                this.offer_price = "";
                this.offer_wallet_address = "";

                if (this.is_approved) {
                    this.offer_btn_approve_disable = true;
                    this.offer_btn_submit2_disable = false;
                } else {
                    this.offer_btn_approve_disable = false;
                    this.offer_btn_submit2_disable = true;
                }

                this.modalOfferForSale = true;
            },
            async offerForSale() {
                let from = await this.walletManager.web3Global.eth.getCoinbase();
                if (!this.offer_btn_loading) {
                    this.offer_error = "";
                    this.offer_msg = "";

                    let price = parseFloat(this.offer_price);
                    let address = this.offer_wallet_address.trim();

                    if (!(price >= 0)) {
                        this.offer_error = "enter correct price (BNB)";
                    } else if(0.1 > price) {
                        this.offer_error = "you can not enter price lower than 0.1 BNB";
                    } else if((address.length > 0 && !this.walletManager.web3Global.utils.isAddress(address))) {
                        this.offer_error = "wallet address is not correct";
                    } else if((address.length > 0 && address === this.walletAddr)) {
                        this.offer_error = "you can not enter your wallet address";
                    } else {
                        this.offer_btn_loading = true;
                        try {
                            price = this.walletManager.web3Global.utils.toWei(price.toString(), 'ether');
                            console.log(address, address.length);
                            if (address.length > 0) {
                                await this.walletManager.dex.methods.offerPunkForSaleToAddress(this.currentPunk.idx, price, address).send({
                                    from,
                                    feeLimit: 100000000,
                                    callValue: 0,
                                    shouldPollResponse: false
                                });
                            } else {
                                await this.walletManager.dex.methods.offerPunkForSale(this.currentPunk.idx, price).send({
                                    from,
                                    feeLimit: 100000000,
                                    callValue: 0,
                                    shouldPollResponse: false
                                });
                            }

                            setTimeout(() => {
                                this.offer_msg = "Your transaction has been broadcast to network!";
                                setTimeout(async()=>{
                                    await this.loadData();
                                    this.offer_btn_loading = false;
                                    this.modalOfferForSale = false;
                                }, 1500);
                            }, 1000);
                        } catch(e) {
                            console.log(e)
                            await this.loadData();
                            this.offer_error = "failed!";
                            this.offer_btn_loading = false;
                        }
                    }
                }
            },
            async approve() {
                let from = await this.walletManager.web3Global.eth.getCoinbase();
                if (!this.offer_btn_approve_loading) {
                    this.offer_btn_approve_loading = true;
                    try {
                        await this.walletManager.nft.methods.setApprovalForAll(this.walletManager.dexAddr, true).send({
                            from,
                            feeLimit: 50000000,
                            callValue: 0,
                            shouldPollResponse: false
                        });
                    } catch (e) {
                        this.offer_btn_approve_loading = false;
                    }

                    setTimeout(async () => {
                        await this.checkApproved();
                        this.offer_btn_approve_loading = false;
                    }, 5000);
                }
            },
            async cancelSelling() {
                let from = await this.walletManager.web3Global.eth.getCoinbase();
                if (!this.cancel_btn_loading) {
                    this.cancel_btn_loading = true;
                    try {
                        await this.walletManager.dex.methods.punkNoLongerForSale(this.currentPunk.idx).send({
                            from,
                            feeLimit: 50000000,
                            callValue: 0,
                            shouldPollResponse: false
                        });

                        setTimeout(async () => {
                            await this.loadData();
                            this.cancel_btn_loading = false;
                        }, 4500)
                    } catch (e) {
                        await this.loadData();
                        this.cancel_btn_loading = false;
                    }
                }
            },
            async showBidModal() {
                this.modal_bid = true
                this.bid_error = "";
                this.bid_msg = "";
                this.bid_price = "";
            },
            async bid() {
                let from = await this.walletManager.web3Global.eth.getCoinbase();
                if (!this.bid_btn_loading) {
                    try {
                        this.balance = await this.walletManager.web3Global.eth.getBalance(this.walletAddr);
                    } catch (e) {
                        console.log(e);
                    }
                    this.bid_error = "";
                    this.bid_msg = "";
                    let price = parseInt(this.bid_price);
                    if (!(price >= 0)) {
                        this.bid_error = "enter correct price (BNB)";
                    } else if(this.punkBids && this.punkBids.hasBid && this.punkBids.value && this.punkBids.value >= price) {
                        this.bid_error = "you can not bid lower than last bid";
                    } else if(10000 > price) {
                        this.bid_error = "you can not bid lower than 10K BNB";
                    } else if(this.balance < (price * 1000000)) {
                        this.bid_error = "you don't have enough BNB";
                    } else {
                        this.bid_btn_loading = true;
                        try {
                            await this.walletManager.dex.methods.enterBidForPunk(this.currentPunk.idx).send({
                                from,
                                feeLimit: 100000000,
                                value: this.walletManager.web3Global.utils.toWei(price, 'ether'),
                                shouldPollResponse: false
                            });

                            setTimeout(() => {
                                this.bid_msg = "Your transaction has been broadcast to network!";
                                setTimeout(async () => {
                                    await this.loadData();
                                    this.bid_btn_loading = false;
                                    this.modal_bid = false;
                                }, 1500);
                            }, 1000);
                        } catch(e) {
                            await this.loadData();
                            this.bid_error = "failed!";
                            this.bid_btn_loading = false;
                        }
                    }
                }
            },
            async acceptBid() {
                let from = await this.walletManager.web3Global.eth.getCoinbase();
                if (!this.accept_bid_btn_loading) {
                    this.accept_bid_btn_loading = true;
                    try {
                        await this.walletManager.dex.methods.acceptBidForPunk(this.currentPunk.idx, (this.punkBids.value * 1000000)).send({
                            from,
                            feeLimit: 100000000,
                            callValue: 0,
                            shouldPollResponse: false
                        });

                        setTimeout(async () => {
                            await this.loadData();
                            this.accept_bid_btn_loading = false;
                        }, 2500);

                    } catch (e) {
                        this.accept_bid_btn_loading = false;
                    }
                }
            }, 
            async cancelBid() {
                let from = await this.walletManager.web3Global.eth.getCoinbase();
                if (!this.cancel_btn_loading) {
                    this.cancel_btn_loading = true;
                    try {
                        await this.walletManager.dex.methods.withdrawBidForPunk(this.currentPunk.idx).send({
                            from,
                            feeLimit: 100000000,
                            callValue: 0,
                            shouldPollResponse: false
                        });

                        setTimeout(async () => {
                            await this.loadData();
                            this.cancel_btn_loading = false;
                        }, 2500);
                    } catch(e) {
                        await this.loadData();
                        this.cancel_btn_loading = false;
                    }
                }
            },
            async buy() {
                let from = await this.walletManager.web3Global.eth.getCoinbase();
                if (!this.buy_btn_loading) {
                    this.buy_btn_loading = true;
                    try {
                        await this.walletManager.dex.methods.buyPunk(this.currentPunk.idx).send({
                            from,
                            feeLimit: 100000000,
                            value: this.walletManager.web3Global.utils.toWei(this.sale_by_owner, 'ether'),
                            shouldPollResponse: false
                        });

                        setTimeout(async () => {
                            await this.loadData();
                            this.buy_btn_loading = false;
                        }, 2500);
                    } catch(e) {
                        await this.loadData();
                        this.buy_btn_loading = false;
                    }
                }
            },
            fixInThreeDec(str) {
                let _s = parseFloat(str);
                _s = +_s.toFixed(3);
                return _s;
            }
        },
    };
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
</style>
