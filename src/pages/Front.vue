<template>
    <div>
        <div id="root">
            <div class="App">
                <nav style="background-color: #151515; margin-bottom: 50px;" class="navbar navbar-expand-lg sticky-top navbar-light">
                    <div class="container">
                        <a aria-current="page" style="color: black" class="nav-link active" id="logo" href="/">
                            <img alt="CrossPunks Logo" src="/cp_logo.svg" class="d-inline-block align-top" style="margin-right: 5px;" height="45">
                        </a>
                        <button @click="toggleCollapse" aria-controls="responsive-navbar-nav" type="button"
                                aria-label="Toggle navigation"
                                class="navbar-toggler navbar-dark collapsed">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="ml-auto navbar-collapse" v-bind:class="{ 'collapse' : showMenu }" id="responsive-navbar-nav">
                            <div class="ml-auto navbar-nav">
                                <router-link @click.native="toggleCollapse" :to="{ name : 'mint' }" class="crosspunk-link">
                                    <b style="color: #d93d76 !important; text-shadow: #d93d76 0 0 10px;">Mint</b>
                                </router-link>
                                <router-link @click.native="toggleCollapse" :to="{ name : 'myPunks' }" class="crosspunk-link">
                                    My Punks
                                </router-link>
                                <router-link @click.native="toggleCollapse" :to="{ name : 'gallery' }" class="crosspunk-link">
                                    Gallery
                                </router-link>
                                <router-link @click.native="toggleCollapse" :to="{ name : 'marketplace' }" class="crosspunk-link">
                                    Marketplace
                                </router-link>
                                <router-link @click.native="toggleCollapse" :to="{ name : 'referralLink' }" class="crosspunk-link">
                                    My referral link
                                </router-link>
                                <a id="bscscan" target="_blank" class="crosspunk-link" :href="(`https://bscscan.com/address/${this.walletManager.nftAddr}`)">
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
                <div class="row mb-5 flex-row">
                    <div class="col-6">
                        <router-link :to="{ name : 'limitationOfLiability' }" class="crosspunk-limitation">
                            <b style="color: #d93d76 !important; text-shadow: #d93d76 0 0 10px;">Limitation of Liability</b>
                        </router-link>
                    </div>
                    <div class="col-6" style="text-align: end;">
                        <a id="twitter" target="_blank" href="https://twitter.com/crosspunks" class="p-1">
                            <img src="/img/soc_tw.png" style="width: 30px; height: 30px;">
                        </a>
                        <a id="discord" target="_blank" href="https://discord.gg/AyZPkypcfZ" class="p-1">
                            <img src="/img/discord-icon.png" style="width: 30px; height: 30px;">
                        </a>
                        <a id="telegram" target="_blank" href="https://t.me/crosspunks" class="p-1">
                            <img src="/img/soc_tg.png" style="width: 30px; height: 30px;">
                        </a>
                        <a id="youtube" target="_blank" href="https://www.youtube.com/channel/UCCycMj-nlN1brjI_IhmS_sA" class="p-1">
                            <img src="/img/soc_yb.png" style="width: 30px; height: 30px;">
                        </a>
                        <a id="medium" target="_blank" href="https://medium.com/@crosspunks" class="p-1">
                            <img src="/img/soc_md.png" style="width: 30px; height: 30px;">
                        </a>
                        <a id="github" target="_blank" href="https://github.com/crosspunks" class="p-1">
                            <img src="/img/soc_gh.png" style="width: 30px; height: 30px;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media only screen and (max-width: 767px) {
    #logo img {
        height: 35px;
    }
    .crosspunk-limitation {
        font-size: 10pt !important;
    }
}

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

.crosspunk-link {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: #e7e2e2 !important;
    padding-right: .5rem;
    padding-left: .5rem;
}

a:hover {
    text-decoration: none;
}
</style>

<script>
export default {
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
    }
}
</script>
