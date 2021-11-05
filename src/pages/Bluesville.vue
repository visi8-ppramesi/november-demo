<template>
    <div style="background-color: #203950; ">
        <div>
            <img :src="logo" class="py-5" style=" max-width: 200px; margin-left: auto; margin-right: auto;" />
        </div>

        <div class="px-4 pb-4">
            <hr style="color:white"/>
        </div>

        <div>
            <div class="px-4">
                <div class="mt-4 rounded border border-white" style="background-color: #203950;">
                    <div class="m-auto px-5 py-5 text-md" style="color:white;">
                        <strong style="color: #2F5BF8;">Bluesville</strong> is a menswear brand with a focus on preservation of traditional processes and Indonesian culture that applied to the modern and relevant men’s clothing
                        <br /> <br />
                        <strong style="color: #2F5BF8;">Bluesville</strong> continues the tradition of respecting color by extracting it directly from nature. Creating a unique character of color that cannot be replicated by man made dye.
                        <br /> <br />
                        We make natural dye accessible to everybody by making it in more suitable and practical form for everyday wear
                    </div>
                </div>
            </div>

            <div class="px-4 mb-12">
                <p class="text-center font-bold text-xl text-white py-4">Our Founder</p>
                <div class="mt-8" style="display: flex; justify-content: start;">
                    <img class="ml-4 mr-3" :src="founder4" style="border-radius: 50%; height: 5rem; width: 5rem; display: block;" />
                    <div class="ml-4 mt-5 h-7 px-3" style="background-color: #819FB5; border-radius: 50px;">
                        <p style="color: white; font-weight: 700; text-align: center;" class="text-md">Arundana Pratamasunu</p>
                    </div>
                </div>

                <div class="flex mt-8">
                    <img class="ml-4 mr-3" :src="founder2" style="border-radius: 50%; height: 5rem; width: 5rem; display: block;"/>
                    <div class="ml-4 mt-5 h-7 px-3" style="background-color: #819FB5; border-radius: 50px;">
                        <p style="color: white; font-weight: 700; text-align: center;" class="text-md">Respati Hafidz Budi</p>
                    </div>
                </div>

                <div class="mt-8" style="display: flex; justify-content: start;">
                    <img class="ml-4 mr-3" :src="founder3" style="border-radius: 50%; height: 5rem; width: 5rem; display: block;" />
                    <div class="ml-4 mt-5 h-7 px-3" style="background-color: #819FB5; border-radius: 50px;">
                        <p style="color: white; font-weight: 700; text-align: center;" class="text-md">Osi Suheili</p>
                    </div>
                </div>
                
            </div>

            <div class="px-4">
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

    .slider-image {
        height: 75%;
        width: 100%;
    }
</style>