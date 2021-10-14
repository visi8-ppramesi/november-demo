<template>
    <div style="background-color: #203950; ">
        <div>
            <img :src="logo" class="py-8" style=" max-width: 200px; margin-left: auto; margin-right: auto;" />
        </div>

        <div class="px-4">
            <hr style="color:white"/>
        </div>

        <div>
            <div class="text-brush brush-height">
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
                    <img :src="founder2" style="border-radius: 50%; height: 5rem; width: 5rem; display: block; margin-left: 5%;" />
                    <div style="background-color: #819FB5; border-radius: 10px; margin-left: 5%;" class="ml-2">
                        <p style="color: white; font-weight: 700; padding: 5%; text-align: center;" class="text-xl">Respati Hafidz Budi (Direz)</p>
                    </div>
                </div>

                <div style="display: flex; margin-top: 10%; justify-content: end; margin-right: 5%;">
                    <div style="background-color: #819FB5; border-radius: 10px; margin-left: 5%;">
                        <p style="color: white; font-weight: 700; padding: 5%; text-align: center;" class="text-xl">Respati Hafidz Budi (Direz)</p>
                    </div>
                    <img :src="founder3" style="border-radius: 50%; height: 5rem; width: 5rem; display: block; margin-left: 5%;"  class="ml-2"/>
                </div>

                <div style="display: flex; margin-top: 10%; justify-content: start;">
                    <img :src="founder4" style="border-radius: 50%; height: 5rem; width: 5rem; display: block; margin-left: 5%;" />
                    <div style="background-color: #819FB5; border-radius: 10px; margin-left: 5%;" class="ml-2">
                        <p style="color: white; font-weight: 700; padding: 5%; text-align: center;" class="text-xl">Arundana Pratamasunu (Dana)</p>
                    </div>
                </div>
            </div>

            <div class="px-4 mb-12">
                <p class="text-2xl font-bold" style="color: white; text-align: center;">Our Products</p>
                <div style="display: grid; grid-template-columns: auto auto;">
                    <router-link to="/scene/company/bluesville/model/product2">
                        <img class="slider-image" :src="product2" />
                    </router-link>
                    <router-link to="/scene/company/bluesville/model/product3">
                        <img class="slider-image" :src="product3" />
                    </router-link>
                    <router-link to="/scene/company/bluesville/model/product4">
                        <img class="slider-image" :src="product4" />
                    </router-link>
                    <router-link to="/scene/company/bluesville/model/product5">
                        <img class="slider-image" :src="product5" />
                    </router-link>
                </div>
            </div>

            <div class="px-4">
                <p class="font-bold" style="text-align: center; color: white;">
                    Founded: 2015
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
        margin-top: 10%;
        margin-bottom: 60px;
    }

    .brush-height{
        min-height: 260px;
    }

    .product {
        height: 95%;
        width: 95%;
        margin: 3%;
    }
</style>