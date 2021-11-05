<template>
    <div style="background-color: #3C81C1; ">
        <div class="mb-5">
            <div class="flex items-center justify-center">
                <img class="w-12" :src="logo" />
            </div>
            <p class="text-center text-white font-bold text-xl">senormal</p>
        </div>

        <hr class="ml-5 mr-5" />

        <div>
            <div style="background-color: #225F82;" class="float-right mt-10 rounded-tl-md rounded-bl-md w-60 sm:w-80">
                <article class="w-60 p-5 text-white">
                    <font class="font-bold text-xl">Who is senormal ?</font>
                    <br /><br />
                    Senormal is a household product brand
                    that focuses on innovating everyday
                    household items into magic cleaning
                    tablets✨ Our main purpose as a brand
                    is to minimize plastic waste while
                    tightening family ties and creating a
                    better environment for the whole
                    family - it all started from the problems
                    experience by our Co-founder, Devi and
                    her daughter, Luna
                </article>
            </div>
        </div>

        <div class="founder text-white">
            <div style="background-color: #176E9F;" class="mt-5 rounded-tr-md rounded-br-md w-60 sm:w-80">
                <div class="p-3">
                    <p class="ml-3">Karaeng Adjie</p>
                    <div class="mt-3 flex items-center justify-center">
                        <img class="w-24" :src="founder1" />
                        <p class="text-center text-sm ml-3 w-24">CO-founder Chief Executive Officer</p>
                    </div>
                </div>
            </div>
        
            <div style="background-color: #176E9F;" class="mt-5 rounded-tr-md rounded-br-md w-60 sm:w-80">
                <div class="p-3">
                    <p class="ml-3">Devi Yolanda</p>
                    <div class="mt-3 flex items-center justify-center">
                        <img class="w-24" :src="founder2" />
                        <p class="text-center text-sm ml-3 w-24">CO-founder Product, Category, and Operations</p>
                    </div>
                </div>
            </div>

            <div style="background-color: #176E9F;" class="mt-5 rounded-tr-md rounded-br-md w-60 sm:w-80">
                <div class="p-3">
                    <p class="ml-3">Xandega Tahajuansya</p>
                    <div class="mt-3 flex items-center justify-center">
                        <img class="w-24" :src="founder3" />
                        <p class="text-center text-sm ml-3 w-24">CO-founder Marketing and CX</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="text-2xl text-white px-5 pt-10">Our Products :</div>
            <div>
                <div class="px-5 scrolling-wrapper">
                <div class="bg-white p-2 scroller-container mr-1">
                    <router-link to="/scene/company/senormal/model/product2">
                        <img :src="product2" />
                        <div class="flex items-center justify-center">
                            <button class="mt-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="p-2 scroller-container mr-1">
                    <router-link to="/scene/company/senormal/model/product3">
                        <img :src="product3" />
                        <div class="flex items-center justify-center">
                            <button class="mt-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="p-2 scroller-container mr-1">
                    <router-link to="/scene/company/senormal/model/product4">
                        <img :src="product4" />
                        <div class="flex items-center justify-center">
                            <button class="mt-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                </div>
            </div>
            </div>
        </div>

        <div class="mt-3 pb-32">
            <p class="text-center text-2xl py-3 mt-5" style="background-color: #95B8C2;">Why Senormal ?</p>
            <div>
                <div class="bg-white mt-5 rounded-tr-md rounded-br-md w-60">
                    <div class="p-3">
                        <div class="flex">
                            <div class="bg-blue-200 w-6 h-6 rounded-full">
                                <p class="text-center">1</p>
                            </div>
                            <div class="ml-3 font-bold text-m">Cost Efficient</div>
                        </div>
                        <section class="text-xs ml-9 mt-2">
                            By not having to re-buy plastic
                            bottles and water.
                        </section>
                    </div>
                </div>
                <div class="absolute right-0 bg-white mt-5 rounded-tl-md rounded-bl-md w-60">
                    <div class="p-3">
                        <div class="flex">
                            <div class="bg-purple-200 w-6 h-6 rounded-full">
                                <p class="text-center">2</p>
                            </div>
                            <div class="ml-3 font-bold text-m">Functional</div>
                        </div>
                        <section class="text-xs ml-9 mt-2">
                            Performs better, and Made with family and
                            environmentally safe ingredients.
                        </section>
                    </div>
                </div>
                <div class="bg-white mt-40 rounded-tr-md rounded-br-md w-60">
                    <div class="p-3">
                        <div class="flex">
                            <div class="bg-red-200 w-6 h-6 rounded-full">
                                <p class="text-center">3</p>
                            </div>
                            <div class="ml-3 font-bold text-m">Easy and Compact</div>
                        </div>
                        <section class="text-xs ml-9 mt-2">
                            No more spills, no emergency run to the store and more space
                        </section>
                    </div>
                </div>
                <div class="absolute right-0 bg-white mt-7 rounded-tl-md rounded-bl-md w-60">
                    <div class="p-3">
                        <div class="flex">
                            <div class="bg-green-200 w-6 h-6 rounded-full">
                                <p class="text-center">4</p>
                            </div>
                            <div class="ml-3 font-bold text-m">Responsible</div>
                        </div>
                        <section class="text-xs ml-9 mt-2">
                            Cut down single plastic usage with out refillable tablets
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'senormal',
    data(){
        return {
            logo: require('../assets/images/senormal/logo.png'),
            founder1: require('../assets/images/senormal/founder1.png'),
            founder2: require('../assets/images/senormal/founder2.png'),
            founder3: require('../assets/images/senormal/founder3.png'),
            product2: require('../assets/images/senormal/product2.png'),
            product3: require('../assets/images/senormal/product3.png'),
            product4: require('../assets/images/senormal/product4.png'),
        }
    }
}
</script>

<style scoped>
    .image-container{
        overflow-x: scroll;
        width: calc(100vw);
    }
    .founder {
        margin-top: 145%;
    }
    .bottom-image{
        max-width: 40vw;
    }
    .container {
        overflow-x: scroll;
        max-width: 100vw;
    }
    .products img{
        max-width: 100%;
        height: auto;
    }
    .product-container{
        width: 300px;
        display: table;
    }
    .scrolling-wrapper{
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        padding-top: 5px;
    }
    .scrolling-wrapper.card{
        flex: 0 0 auto;
    }
    .scrolling-wrapper::-webkit-scrollbar {
        display: none;
    }
    .scroller-container img{    
        width: 100%;
        height: 75%;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 10px;
    }
    .scroller-container{
        /* max-height: 334px; */
        min-width: 150px;
        /* height: 205px; */
        border-radius: 10px;
        max-height: 400px;
        background-color: white;
    }
    .scroller-block{
        height: calc(100vh - 64px);
        background-size: cover;
        background-position: center;
        max-height: 100%;
    }
    @media (min-width: 640px) {
        .founder {
            margin-top: 80%;
        }
     }
    /* .container-top {
        position: absolute;
        left: 49%;
        margin-top: 10%;
    }
    .card-top {
        background-color: #225F82;
        border-radius: 10px;
        width: 100%;
    }
    .profile-card {
        background-color: #225F82;
        border-radius: 10px;
        position: relative;
        right: 50%;
        margin-top: 10%;
    }
    .container {
        margin-left: 50px;
        overflow-x:scroll;
        width: 90%;
    }
    .footer-card {
        background-color: #ffffff;
        border-radius: 10px;
        position: relative;
        right: 50%;
        margin-top: 10%;
    }
    .footer-card2 {
        background-color: #ffffff;
        border-radius: 10px;
        position: relative;
        right: 50%;
        margin-top: 40%;
    }
    .card-text {
        background-color: #ffffff;
        border-radius: 10px;
        width: 100%;
    }
    .footer-card-right {
        position: absolute;
        left: 60%;
    }
    .footer-card-right2 {
        position: absolute;
        left: 51%;
    } */
</style>