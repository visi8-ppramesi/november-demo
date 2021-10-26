<template>
    <div style="background-color: #203950; ">
        <div>
            <img :src="logo" class="py-8" style=" max-width: 200px; margin-left: auto; margin-right: auto;" />
        </div>

        <div class="px-4">
            <hr style="color:white"/>
        </div>

        <div>
            <div class="mt-4 text-brush brush-height">
                <!-- <div style="color: white; width: 70%; text-align: center; padding-top: 20%; padding-left: 12%; font-size: 25px;">
                    <strong style="color: #2F5BF8;">Bluesville</strong> is a menswear brand with a focus on preservation of traditional processes and Indonesian culture that applied to the modern 
                    and relevant men’s clothing
                </div> -->
                <div class="flex brush-height">
                    <div class="m-auto px-16" style="color:white;">
                        <strong style="color: #2F5BF8;">Bluesville</strong> is a menswear brand with a focus on preservation of traditional processes and Indonesian culture that applied to the modern and relevant men’s clothing
                    </div>
                </div>
            </div>

            <div class="px-4 mb-12">
                <div style="display: flex; justify-content: start;">
                    <img class="ml-4" :src="founder2" style="border-radius: 50%; height: 5rem; width: 5rem; display: block;" />
                    <div class="ml-4" style="background-color: #819FB5; border-radius: 10px;">
                        <p style="color: white; font-weight: 700; text-align: center;" class="p-5 text-xl">Respati Hafidz Budi (Direz)</p>
                    </div>
                </div>

                <div class="mr-4 mt-8" style="display: flex; justify-content: end;">
                    <div class="ml-4" style="background-color: #819FB5; border-radius: 10px;">
                        <p style="color: white; font-weight: 700; text-align: center;" class="p-5 text-xl">Respati Hafidz Budi (Direz)</p>
                    </div>
                    <img :src="founder3" style="border-radius: 50%; height: 5rem; width: 5rem; display: block;" class="ml-4"/>
                </div>

                <div class="mt-8" style="display: flex; justify-content: start;">
                    <img class="ml-4" :src="founder4" style="border-radius: 50%; height: 5rem; width: 5rem; display: block;" />
                    <div class="ml-4" style="background-color: #819FB5; border-radius: 10px;">
                        <p style="color: white; font-weight: 700; text-align: center;" class="p-5 text-xl">Arundana Pratamasunu (Dana)</p>
                    </div>
                </div>
            </div>

            <div class="px-4 mb-12">
                <p class="text-2xl font-bold" style="color: white; text-align: center;">Our Products</p>
                <div class="pt-3" style="display: grid; grid-template-columns: auto auto;">
                    <router-link to="/scene/company/bluesville/model/product2">
                        <img class="pr-3 slider-image" :src="product2" />
                        <div class="flex bg-white mr-3 rounded-bl rounded-br border-t-2 items-center justify-center">
                            <button class="my-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                    <router-link to="/scene/company/bluesville/model/product3">
                        <img class="slider-image" :src="product3" />
                        <div class="flex bg-white rounded-bl rounded-br border-t-2 items-center justify-center">
                            <button class="my-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                    <router-link to="/scene/company/bluesville/model/product4">
                        <img class="pr-3 pt-3 slider-image" :src="product4" />
                        <div class="flex bg-white mr-3 rounded-bl rounded-br border-t-2 items-center justify-center">
                            <button class="my-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                    <router-link to="/scene/company/bluesville/model/product5">
                        <img class="pt-3 slider-image" :src="product5" />
                        <div class="flex bg-white rounded-bl rounded-br border-t-2 items-center justify-center">
                            <button class="my-3 bg-blue-500 hover:bg-blue-2oo text-white py-1 px-2 rounded">
                                View AR
                            </button>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="px-4 pb-5 mt-10">
                <p class="font-bold" style="text-align: center; color: white;">
                    Founded: 2017
                    <br /><br />
                    DSI Participation: 2021<br />
                    DSI Investment: IDR 1 Bn (IDR 810 Mio Equity – IDR 190 Mio SH loan)<br />
                    DSI ownership: 16.5%<br />
                    Post-money Valuation: IDR 4.9 Bn<br />
                    On-going Project in collaboration with DSI<br />
                    Indigofera Nursery and Plantation in Anyer<br />
                    Natural Dying workshop and experiential destination in Anyer<br />
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bluesville',
    data(){
        return {
            logo: require('../assets/images/bluesville/logo.png'),
            product2: require('../assets/images/bluesville/product2.png'),
            product3: require('../assets/images/bluesville/product3.png'),
            product4: require('../assets/images/bluesville/product4.png'),
            product5: require('../assets/images/bluesville/product5.png'),
            founder2: require('../assets/images/bluesville/founder2.png'),
            founder3: require('../assets/images/bluesville/founder3.png'),
            founder4: require('../assets/images/bluesville/founder4.png'),
        }
    },
}
</script>

<style scoped>
    .text-brush {
        background-image: url('../assets/images/bluesville/brush.png');
        background-repeat: no-repeat;
        background-size: contain;
        width: 100vw;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 60px;
    }

    .brush-height{
        min-height: 260px;
    }

    .slider-image {
        height: 75%;
        width: 100%;
    }
</style>