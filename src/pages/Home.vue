<template>
  <div>
    <div class="text-center" style="margin-top: -50px">
      <div style="height: 300px" class="jumbotron">
        <div class="bg-image"></div>
        <div class="bg-text">
          <h1>
            <strong><em>CrossPunks</em></strong>
            the First NFT on Tron Blockchain
          </h1>
          <p>
            Minting has ended. Marketplace is live, we are working on
            Marketplace upgrade.
          </p>
          <!--          <p>We are currently minting the NFTs but are setting up for a marketplace once it is all done</p>-->
          <!--        <p>We are currently setting up the Marketplace</p>-->
          <p>
            <!--            <router-link :to="{ name : 'marketplace'}"   class="btn btn-primary">-->
            <!--              Check Out Upcoming Marketplace-->
            <!--            </router-link>-->
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <h4 class="text-center"></h4>
      <div></div>
    </div>
    <div class="container">
      <h4 class="text-center"></h4>
      <div class="infinite-scroll-component__outerdiv">
        <div
          class="infinite-scroll-component"
          style="height: auto; overflow: auto"
        >
          <div class="row"></div>
          <h4></h4>
        </div>
      </div>
    </div>

    <!--      <div class="container">-->
    <!--          <div class="col-md-12" align="center">-->

    <!--              &lt;!&ndash;            <h4><strong >Sale starts in </strong></h4>&ndash;&gt;-->
    <!--              &lt;!&ndash;            <flip-countdown deadline="2021-03-16 00:00:00"></flip-countdown>&ndash;&gt;-->
    <!--              <br>-->
    <!--              <span id="totalSupply"><h3><strong>Mint A Tpunk</strong></h3></span>-->
    <!--              <router-link :to="{ name : 'mint'}" class="btn btn-primary" id="buyBtn">-->
    <!--                  <strong> Mint </strong>-->
    <!--              </router-link>-->
    <!--              <br>-->
    <!--              <br>-->
    <!--          </div>-->

    <!--      </div>-->

    <div class="container">
      <div class="row">
        <div
          id="home"
          class="
            p-8
            mv-8
            border-8
            bg-pinku bg-opacity-90
            pageboxborder
            border-opacity-100
            my-6
            flex flex-col
            w-11/12
          "
        >
          <span class="flex-wrap text-center text-blau vw5 charriot mb-4"
            >HEYYYA VISITOR!</span
          >
          <span
            class="flex-wrap text-center vw2 charriot mb-4 text-black font-bold"
            >CrossPunks are 10,000 unique collectible characters like cryptopunks on
            the Tron blockchain. There are 9 aliens, 24 apes, 88 zombies and 11
            justin.</span
          >
          <span class="flex-wrap vw2 charriot mb-4 text-pink-500 font-bold"
            ><span class="text-black">&gt;</span> WELCOME TO THE "TPUNKS" FIRST
            NFT COLLECTIBLE PROJECT EVER ON TRON BLOCKCHAIN. </span
          ><span class="flex-wrap vw2 charriot mb-4 text-green-900 font-bold"
            ><span class="text-black">&gt;</span> DID YOU MISS THE OG
            CRYPTOPUNKS WAVE ? DO YOU WANNA HAVE ANOTHER CHANCE? (HOMAGE TO THE
            OG PUNKS) </span
          ><span class="flex-wrap vw2 charriot mb-4 text-red-900 font-bold"
            ><span class="text-black">&gt;</span> OR DO YOU JUST WANT TO OWN THE
            FIRST NFTS ON TRON????? (OPINIONS ARE SUBJECTIVE OF COURSE) </span
          ><span class="flex-wrap vw2 charriot mb-4 text-blau font-bold"
            ><span class="text-black">&gt;</span>TRC721 TPUNKS ARE HERE TO START
            THE NFT REVOLUTION ON TRON AND CREATE TRON NFT WORLD!!!!! 👊👊👊👊👊 </span
          ><span class="flex-wrap vw2 charriot mb-4 text-pink-600 font-bold"
            ><span class="text-black">&gt;</span>THERE ARE 10000 TPUNKS IN
            TOTAL. ( 9 ALIENS, 24 APES, 88 ZOMBIES AND 11 JUSTINS) </span
          >
          <!-- <span class="flex-wrap vw2 charriot mb-4 text-green-900 font-bold">
            <span class="text-black">&gt;</span> 2000 OF THEM ARE "HYPE AS FUCK"
            RARE(GENERATED UNIQ TPUNKS).
          </span> -->
          <span class="flex-wrap vw2 charriot mb-4 text-red-900 font-bold"
            ><span class="text-black">&gt;</span> ALL PUNKS ARE BEING MINTED
            RANDOMLY. </span
          ><span class="flex-wrap vw2 charriot mb-4 text-blau font-bold"
            ><span class="text-black">&gt;</span> EACH TPUNK NFT DESCRIPTION AND
            ATTRIBUTES CAN BE SEEN LIKE A FORTUNE COOKIE. </span
          ><span class="flex-wrap vw2 charriot mb-4 text-red-500 font-bold"
            ><span class="text-black">&gt;</span> THEY ALSO HAVE MANY ATTRIBUTES
            THAT DEFINES RARITY OF TPUNK. SOME OF THEM ARE VEEEEEEEEERY
            RAAAAAAAAAARE</span
          ><span class="flex-wrap vw2 charriot mb-4 text-pink-500 font-bold"
            ><span class="text-black">&gt;</span> TPUNKS WILL BE LISTED ON USWAP
            AND FANSFOREVER MARKETPLACE FIND A NEW HOME ❤️. </span
          ><span class="flex-wrap vw2 charriot mb-4 text-green-900 font-bold"
            ><span class="text-black">&gt;</span> THIS PROJECT IS NOT AFFILIATED
            WITH LARVA LABS. THANKS TO THEM FOR BEING SUCH AN INSPIRATION TO
            MANY OF US ❤️. THIS PROJECT IS A HOMAGE TO CRYPTOPUNKS AND A
            HYPOTHESIS ON HOW PUNKS ON TRON BLOCKCHAIN CAN BE WAY COOLER THAN
            THEIR BOOMER OGS.
          </span>
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
.jumbotron {
  position: relative;
}
.bg-image {
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
.bg-text {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  /*position: absolute;*/
  /*top: 50%;*/
  /*left: 50%;*/
  /*transform: translate(-50%, -50%);*/
  z-index: 2;
  width: 80%;
  /*padding: 20px;*/
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .jumbotron {
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
