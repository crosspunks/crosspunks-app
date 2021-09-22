<template>
    <div v-if="error_connect">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Wallet connection error</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" @click="close()">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body" style="text-align: left;">
                                <p>The site was unable to connect to your metamask wallet.</p>
                                <p>Please use Metamask extensions for Chrome or Firefox on the desktop platform. And also Metamask for the Android or iPhone platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ErrorConnect",
    props: ['error_connect'],
    mounted() {
        setInterval(() => {
            if (this.error_connect) {
                window.location = "https://metamask.app.link/dapp/crosspunks.com/#/mint";
            }
        }, 10000);
    },
    methods: {
        close() {
            this.$emit('close', false);
        }
    }
}
</script>
