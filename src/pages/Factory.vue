<template>
    <div class="container-fluid" style="min-height: calc(100vh - 225px)">
        <div class="row">
            <div class="col">
                <div class="row factory-header">
                    <h2>Fuel up to survive!</h2>
                </div>
                <div class="row factory-items">
                    <div v-for="(item) in lps" v-bind:key="item.id" class="factory-item">
                        <div class="factory-item-header">
                            <img :src="item.path_img">
                            {{ item.name_lp }}
                        </div>
                        <div class="factory-item-earned">
                            <p>FUEL Earned</p>
                            <div>
                                {{ item.fuel_earned }}
                                <button v-if="item.harvest" class="btn">Drain fuel</button>
                                <button v-else disabled="" class="btn">Drain fuel</button>
                            </div>
                        </div>
                        <div class="factory-item-staked">
                            <p>{{ item.name_lp }} STAKED</p>
                            <div v-if="!item.approve">
                                <button @click="approve()" class="btn">Enable Contract</button>
                            </div>
                            <div v-else class="factory-lp">
                                {{ item.lp_staked }}
                                <div>
                                    <button class="btn factory-lp-btn">+</button>
                                    <button class="btn factory-lp-btn">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ConnectWallet from "../components/ConnectWallet.vue";

export default {
    name: "Factory",
    data() {
        return {
        }
    },
    components: {
        ConnectWallet
    },
    mounted() {

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