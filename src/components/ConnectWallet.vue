<template>
    <div>
        <button id="connect-wallet" @click="connect()" type="button" class="btn crosspunk-btn">
            Connect Wallet
        </button>
        <ErrorConnect :error_connect="error_connect" v-on:close="error_connect = $event"></ErrorConnect>
    </div>
</template>

<script>
import ErrorConnect from "../components/ErrorConnect.vue"

export default {
    name: "ConnectWallet",
    data() {
        return {
            error_connect: false
        }
    },
    components: {
        ErrorConnect
    },
    methods: {
        async connect() {
            let err = await this.walletManager.connectToMetamask();
            if (err != "") {
                this.error_connect = true;
            }
        }
    }
}
</script>
