<template>
    <div style="background-color: #34A453;" class="pb-4">
        <div>
            <img :src="logo" class="py-4" style=" max-width: 300px; margin-left: auto; margin-right: auto;" />
        </div>

        <div class="px-4">
            <hr class="my-2" style="color:white"/>
        </div>

        <div class="mb-12">
            <p class="m-4 pr-28" style="text-align: left; color: white;">
                <strong class="text-xl">What is Biomagg ?</strong>
                <br /><br />
                <strong style="color: #46E96A;">BIOMAGG</strong> is a start-up that focuses on processing organic waste, especially food waste, using bioconversion technology 
                of black soldier flies (BSF) to create a circular economy. 
                <br /> <br />
                <strong style="color: #46E96A;">BIOMAGG</strong> aim to be a sustainable protein provider in the future, while solving the organic waste problem
            </p>
        </div>

        <div class="mb-12">
            <p class="text-2xl font-bold mb-4" style="color: white; text-align: center;">Our Products</p>
            <div class="scrolling-wrapper px-1">
                <div class="scroller-container mr-1">
                    <router-link to="/scene/company/biomagg/model/product1">
                        <img class="pt-5" :src="product1" />
                        <div class="flex items-center justify-center pt-2">
                            <button class="mt-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="scroller-container mr-1">
                    <router-link to="/scene/company/biomagg/model/product2">
                        <img class="pt-5" :src="product2" />
                        <div class="flex items-center justify-center pt-2">
                            <button class="mt-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="scroller-container mr-1">
                    <router-link to="/scene/company/biomagg/model/product3">
                        <img class="pt-5" :src="product3" />
                        <div class="flex items-center justify-center pt-2">
                            <button class="mt-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="scroller-container mr-1">
                    <router-link to="/scene/company/biomagg/model/product4">
                        <img class="pt-5" :src="product4" />
                        <div class="flex items-center justify-center pt-2">
                            <button class="mt-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="scroller-container mr-1">
                    <router-link to="/scene/company/biomagg/model/product5">
                        <img class="pt-5" :src="product5" />
                        <div class="flex items-center justify-center pt-2">
                            <button class="mt-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="scroller-container mr-1">
                    <router-link to="/scene/company/biomagg/model/product6">
                        <img class="pt-5" :src="product6" />
                        <div class="flex items-center justify-center pt-2">
                            <button class="mt-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="mb-12">
            <p style="color: white; text-align: center;" class="text-2xl font-bold mb-4">Founder of Biomagg</p>
            <img :src="founder1" style="border-radius: 50%; height: 150px; width: 150px; display: block; margin-left: auto; margin-right: auto;" width="250px;" />
            <p style="color: white; text-align: center;" class="mb-12 mt-4">Aminudi <br />Founder and CEO</p>
            <img :src="founder2" class="mt-4" style="border-radius: 50%; height: 150px; width: 150px; display: block; margin-left: auto; margin-right: auto;" width="250px;" />
            <p style="color: white; text-align: center;" class="mb-12 mt-4">Pandudamai Insani Taufiq <br /> Founder and COO</p>
        </div>

        <div class="rounded-xl mx-8" style="background-color: #63D161;">
            <p class="p-4" style="color: white; text-align: center;">
                <strong>Future Collaboration Project : </strong>
                <br /> <br />
                One of DSI’s subsidiary, IIB (Ideanation) will collaborate with Biomagg to establish a workshop in Anyer (Banten)
                <br /><br />
                The Anyer Workshop will manage organic waste from surrounding area (including food waste from industrial district in Cilegon), to be converted into animal feedstock and fertilizer that can be used for our fishery and plantation activity. 
                <br /><br />
                This first stage Workshop will have processing capacity of 300 kg organic waste/day
                <br /><br />
                This workshop will also be one of edutainment destination in Anyer.

            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'biomagg',
    data(){
        return {
            logo: require('../assets/images/biomagg/logo.png'),
            product1: require('../assets/images/biomagg/product1.png'),
            product2: require('../assets/images/biomagg/product2.png'),
            product3: require('../assets/images/biomagg/product3.png'),
            product4: require('../assets/images/biomagg/product4.png'),
            product5: require('../assets/images/biomagg/product5.png'),
            product6: require('../assets/images/biomagg/product6.png'),
            founder1: require('../assets/images/biomagg/founder1.png'),
            founder2: require('../assets/images/biomagg/founder2.png'),
        }
    },
}
</script>

<style scoped>
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
        height: 100%;
        display: table;
    }
    .scrolling-wrapper{
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
    .scrolling-wrapper.card{
        flex: 0 0 auto;
    }
    .scrolling-wrapper::-webkit-scrollbar {
        display: none;
    }
    .scroller-container img{    
        width: 100%;
        height: 85%;
        -o-object-fit: none;
        object-fit: none;
        border-radius: 10px;
    }
    .scroller-container{
        /* max-height: 334px; */
        min-width: 250px;
        /* height: 205px; */
        border-radius: 10px;
        max-height: 450px;
        background-color: white;
    }
    .scroller-block{
        height: calc(100vh - 64px);
        background-size: cover;
        background-position: center;
        max-height: 100%;
    }
</style>