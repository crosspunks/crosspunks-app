<template>
    <div class="crosspunk-home">
        <div class="text-center" style="margin-top: -50px">
            <div style="height: 670px" class="crosspunk-mint-block">
                <div class="bg-mint-image"></div>
                <div class="bg-mint-text">
                    <h1 class="crosspunk-h1">
                        Mint your CrossPunk now or watch your friends become millionaires later!
                    </h1>
                </div>
            </div>
            <div style="height: 800px" class="crosspunk-stats-block">
                <div class="bg-stats-image"></div>
                <div class="bg-stats-text">
                    <h2 class="crosspunk-h1">Have a quick peek at some global Punks stats!</h2>
                    <p>The lowest selling price currently stands at <b>94.99 ETH ($ 358,906.43).</b></p>
                    <p>The average rate over the past year was <b>35.89 ETH (135,620.85 USD).</b></p>
                    <p>The average open bid is <b>4.09 ETH ($ 15,464.49).</b></p>
                    <p>The total cost of all current applications is <b>2,717.69 ETH (10,268,420.59 USD).</b></p>
                    <p>The average selling price of punk over the past year is <b>35.63 ETH ($ 134,615.76).</b></p>
                    <p>The total value of punks sold over the last year is <b>472,909.33 ETH (1,786,821,759.52 USD).</b></p>
                    <p><b>Just think about these numbers! Breathtaking, huh?</b></p>
                </div>
            </div>
            <div style="height: 530px" class="crosspunk-what-block">
                <div class="bg-what-image"></div>
                <div class="bg-what-text">
                    <h2 class="crosspunk-h1">What are the CrossPunks</h2>
                    <div>
                        <img src="/img/CP_PUNKS.png" style="float: left;">
                        <div style="margin-right: 0;">
                            <p>This is the first of its kind NFT cross-chain collection. 10,000 unique pixel characters. Including 11 the most important influencers in the Crypto World ever! 11 rare figures brought crypto and NFT future forward. Who inspired us as well!</p>
                            <p>Each punk you buy is 1 in 10,000 steps towards realizing the newest ability to move your NFTs across all blockchain networks.</p>
                        </div>
                    </div>
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
@media only screen and (min-width: 1601px) {
    .crosspunk-h1, .bg-stats-text h2, .bg-stats-text h2 {
        font-size: 60pt;
    }

    .bg-stats-text p, .bg-what-text p, .bg-how-text p {
        font-size: 18pt;
    }
}

@media only screen and (max-width: 1600px) {
    .crosspunk-h1, .bg-stats-text h2, .bg-stats-text h2 {
        font-size: 40pt;
    }

    .bg-stats-text p, .bg-what-text p, .bg-how-text p {
        font-size: 14pt;
    }
}

@media only screen and (min-width: 1051px) {
    .bg-what-text div {
        width: 80%;
        margin: auto;
    }

    .bg-what-text div div {
        text-align: left;
    }
}

@media only screen and (max-width: 1050px) {
    .bg-what-text img {
        display: none;
    }

    .crosspunk-what-block {
        height: 600px !important;
    }
}

@media only screen and (max-width: 700px) {
    .crosspunk-h1, .bg-stats-text h2, .bg-stats-text h2 {
        font-size: 30pt;
    }

    .bg-stats-text p, .bg-what-text p, .bg-how-text p {
        font-size: 12pt;
    }
}

@media only screen and (max-width: 600px) {
    .crosspunk-mint-block {
        height: 400px !important;
    }

    .crosspunk-h1, .bg-stats-text h2, .bg-stats-text h2 {
        font-size: 20pt;
    }

    .bg-stats-text p, .bg-what-text p, .bg-how-text p {
        font-size: 10pt;
    }
}

.crosspunk-h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
}

.crosspunk-mint-block, .crosspunk-stats-block, .crosspunk-what-block, .crosspunk-how-block {
    position: relative;
}

.bg-mint-image, .bg-stats-image, .bg-what-image, .bg-how-image {
    /* Full height */
    height: 100%;
    /* Center and scale the image nicely */
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
}

.bg-mint-image {
    background-image: url("/img/cp_web_bg_01_punk.jpg");
}

.bg-stats-image {
    background-image: url("/img/cp_web_bg_02.jpg");
}

.bg-what-image {
    background-image: url("/img/bg_03.jpg");
}

.bg-how-image {
    background: rgb(217,61,118);
    background: linear-gradient(180deg, rgba(217,61,118,1) 0%, rgba(124,64,220,1) 50%);
}

.bg-mint-text, .bg-stats-text, .bg-what-text, .bg-how-text {
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

.bg-mint-text {
    top: 25%;
}

.bg-stats-text {
    top: 15%;
}

.bg-stats-text p, .bg-what-text p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
}

.bg-stats-text p b {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}

.bg-what-text {
    top: 20%;
}

.bg-what-text div img {
    margin-right: 20px;
}

.bg-how-text {
    position: relative;
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
