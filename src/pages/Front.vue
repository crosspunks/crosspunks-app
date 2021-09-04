<template>
    <div>
        <div id="root">
            <div class="App">
                <nav style="margin-bottom: 50px;" class="navbar navbar-expand-lg navbar-light ">
                    <div class="container">
                        <a aria-current="page" style="color: black" class="nav-link active" id="logo" href="/">
                            <img alt="" src="/crosspunks_logo.png" class="d-inline-block align-top" style="margin-right: 5px;" height="40">
                        </a>
                        <button @click="toggleCollapse" aria-controls="responsive-navbar-nav" type="button"
                                aria-label="Toggle navigation"
                                class="navbar-toggler collapsed">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="ml-auto navbar-collapse" v-bind:class="{ 'collapse' : showMenu }"
                             id="responsive-navbar-nav">
                            <div class="ml-auto navbar-nav">
                                <router-link @click.native="toggleCollapse" :to="{ name : 'mint'}" class="nav-link ">
                                    Mint
                                </router-link>
                                <router-link @click.native="toggleCollapse" :to="{ name : 'myPunks'}" class="nav-link ">
                                    MyCrossPunks
                                </router-link>
                                <router-link @click.native="toggleCollapse" :to="{ name : 'gallery'}" class="nav-link ">
                                    Gallery
                                </router-link>
                                <router-link @click.native="toggleCollapse" :to="{ name : 'marketplace'}" class="nav-link ">
                                    Marketplace
                                </router-link>
                                <router-link @click.native="toggleCollapse" :to="{ name : 'referralLink'}" class="nav-link ">
                                    My referral link
                                </router-link>
                                <a target="_blank" class="nav-link" :href="(`https://bscscan.com/address/${this.walletManager.nftAddr}`)">
                                    Contract
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
               <router-view></router-view>
            </div>
        </div>
        <div class="container" >
            <div class="container" style="margin-top: 20px;">
                <div class="row mb-5 flex-row-reverse">
                    <div style="">
                        <a target="_blank" href="https://t.me/CrossPunks" class="p-1">
                            <img src="/telegram.svg" style="width: 30px; height: 30px;">
                        </a>
                        <a target="_blank"  href="https://twitter.com/crosspunks_official" class="p-1">
                            <img src="/twitter.svg" style="width: 30px; height: 30px;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped >
    .onoffswitch {
        position: relative; width: 90px;
        -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
    }
    .onoffswitch-checkbox {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    .onoffswitch-label {
        display: block; overflow: hidden; cursor: pointer;
        border: 2px solid #999999; border-radius: 20px;
        margin: 5px 0 0 0 !important;
        height: 31px;
    }
    .onoffswitch-inner {
        display: block; width: 200%; margin-left: -100%;
        transition: margin 0.3s ease-in 0s;
    }
    .onoffswitch-inner:before, .onoffswitch-inner:after {
        display: block; float: left; width: 50%; height: 30px; padding: 0; line-height: 30px;
        font-size: 14px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
        box-sizing: border-box;
    }
    .onoffswitch-inner:before {
        content: "Light";
        padding-left: 10px;
        background-color: #378ea3; color: #FFFFFF;
    }
    .onoffswitch-inner:after {
        content: "Dark";
        padding-right: 10px;
        background-color: #EEEEEE; color: #999999;
        text-align: right;
    }
    .onoffswitch-switch {
        display: block; width: 18px;
        height: 18px;
        margin: 6px;
        background: #FFFFFF;
        position: absolute; top: 6px; bottom: 0;
        right: 56px;
        border: 2px solid #999999; border-radius: 20px;
        transition: all 0.3s ease-in 0s;
    }
    .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
        margin-left: 0;
    }
    .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
        right: 0px;
    }
</style>

<script>
    // import FlipCountdown from 'vue2-flip-countdown'
    export default {
        // components: { FlipCountdown },
        data() {
            return {
                showMenu: true,
                winner: [],
                win_reward: {
                    0: '1M',
                    1: '500K',
                    2: '250K',
                    3: '100K',
                    4: '50K'
                },
                themeMode : false
            }
        },
        mounted() {
            // setTimeout(() => {
            //     this.showAirDropGift();
            // }, 2000);
            // setInterval(() => {
            //     this.showAirDropGift();
            // }, 10000);
        },
        methods: {
            toggleCollapse() {
                this.showMenu = !this.showMenu
            },
            async showAirDropGift() {
                let win = [];
                for (let i = 0; i < 5; i++) {
                    let winners = await this.walletManager.contract.winners(i).call();
                    winners = this.walletManager.ttronWeb.address.fromHex(winners);
                    if (winners == this.walletManager.ttronWeb.address.fromHex('410000000000000000000000000000000000000000'))
                        break;
                    let w = await this.walletManager.contract.usersAirdrop(winners).call();
                    w.address = winners;
                    win.push(w);
                }
                this.winner = win;
            },
            closeSidebar(){
                document.getElementById("mySidebar").style.width = "0";
                document.getElementById("sidebarCover").classList.add('hideCover')
            }
        },
    }
</script>
