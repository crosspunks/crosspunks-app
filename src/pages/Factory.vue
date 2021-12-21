<template>
    <div class="container-fluid" style="min-height: calc(100vh - 225px)">
        <div class="row">
            <div class="col">
                <div class="row factory-header">
                    <h2>Fuel up to survive!</h2>
                </div>
                <div class="row">
                    <div class="factory-item">
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
</style>