<template>
    <div>
        <div class="text-center" style="margin-top: -50px">
            <div style="height: 450px" class="crosspunk-block">
                <div class="bg-mint-image"></div>
                <div class="bg-mint-text">
                    <h1 class="crosspunk-h1">
                        Mint your CrossPunk now or watch your friends become millionaires later!
                    </h1>
                </div>
            </div>
            <div style="height: 450px" class="crosspunk-block">
                <div class="bg-stats-image"></div>
                <div class="bg-stats-text">
                    <h1 class="crosspunk-h1">Have a quick peek at some global Punks stats!</h1>
                    <p>The lowest selling price currently stands at 94.99 ETH ($ 358,906.43).</p>
                    <p>The average rate over the past year was 35.89 ETH (135,620.85 USD).</p>
                    <p>The average open bid is 4.09 ETH ($ 15,464.49).</p>
                    <p>The total cost of all current applications is 2,717.69 ETH (10,268,420.59 USD).</p>
                    <p>The average selling price of punk over the past year is 35.63 ETH ($ 134,615.76).</p>
                    <p>The total value of punks sold over the last year is 472,909.33 ETH (1,786,821,759.52 USD).</p>
                    <p>Just think about these numbers! Breathtaking, huh?</p>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            searchById: "",
            punks: [],
        };
    },
    mounted() {
        let params = this.$route.params["id"];
        if (params > 0) {
            window.localStorage.setItem("inviteKey", params);
        }
    },
    methods: {},
};
</script>

<style>
.crosspunk-h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 60pt;
    font-weight: 700;
    text-transform: uppercase;
}

.crosspunk-block {
    position: relative;
}

.bg-mint-image {
    /* The image used */
    background-image: url("/punk_bg.jpg");
    /* Add the blur effect */
    filter: blur(4px);
    -webkit-filter: blur(4px);
    /* Full height */
    height: 100%;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    width: 95%;
}

.bg-mint-text {
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0);
    /* Black w/opacity/see-through */
    color: white;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    width: 80%;
}

@media only screen and (max-width: 600px) {
    .crosspunk-block {
        height: 400px !important;
    }
}

.bg-pinku {
    background-color: rgba(255, 192, 203, var(--tw-bg-opacity));
}

.pageboxborder {
    border-radius: 4px;
    border-color: #003760;
}

.vw5 {
    font-size: 5vw;
}

.text-blau {
    color: #296588 !important;
}

.text-center {
    text-align: center;
}

.vw2 {
    font-size: 2vw;
}

.text-pink-500 {
    --tw-text-opacity: 1;
    color: rgba(236, 72, 153, var(--tw-text-opacity));
}

.text-green-900 {
    --tw-text-opacity: 1;
    color: rgba(6, 78, 59, var(--tw-text-opacity));
}

.flex-wrap {
    display: block;
}

.border-8 {
    border-width: 8px;
    border-style: dashed;
}

.p-8 {
    padding: 2rem;
}
</style>
