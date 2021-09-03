<template>
    <div class="container-fluid" style="min-height: 500px">
        <div class="row">
            <div class="col">
                <div class="row" >
                    <div class="col-md-1" ></div>
                    <div class="col-md-10" >
                        <div id="home" class="p-8 mv-8 border-8 bg-pinku bg-opacity-90 pageboxborder border-opacity-100 my-6 flex flex-col w-11/12 ">
                            <span class="flex-wrap  text-center text-blau vw5 charriot mb-4 ">About</span>
                            <div class="row" >
                                <div class="col-md-1" ></div>
                                <div class="col-md-10" >
                                    <div id="hr_top" ></div>
                                </div>
                                <div class="col-md-1" ></div>
                            </div>

                            <div style="margin-top: 30px;"></div>

                            <span class=" flex-wrap vw2 mb-4 text-blau font-bold">
                                CrossPunks project has started as a hobby NFT project of i <a href="https://twitter.com/mondiblo" >@mondiblo</a> and  (<a href="https://twitter.com/bastardber" >@bastardber</a>) there were two main reasons for me to initiate this project:
                            </span>

                            <span class=" flex-wrap vw2 mb-4 text-green-900 font-bold">
                                - to practice Generative Adversarial Networks (GANs) with my own dataset,
                            </span>
                            <span class=" flex-wrap vw2 mb-4 text-pink-500 font-bold">
                                - even though Cryptopunks were way cheaper last year than now, I had no money to buy any, so I challenged myself to make them "interesting enough" . So we came up with the CrossPunks concept. CrossPunks carry the original Cryptopunk but they carry many different traits such as justin sun CrossPunks and more attributes,  And you know, sometimes childrens are much cooler than their parents. 😉
                            </span>
                        </div>
                    </div>
                    <div class="col-md-1" ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>
    #hr_top{
        border-top: 3px dashed #0b2e13;
    }
</style>
