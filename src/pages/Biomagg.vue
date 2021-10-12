<template>
    <div style="background-color: #34A453;" class="pb-4">
        <div>
            <img :src="logo" class="py-4" style=" max-width: 300px; margin-left: auto; margin-right: auto;" />
        </div>

        <div class="px-4">
            <hr class="my-2" style="color:white"/>
        </div>

        <div class="mb-12">
            <p style="text-align: left; margin: 5%; padding-right: 35%; color: white;">
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
            <div class="container">
                <div style="display: flex;">
                    <img class="slider-image" :src="product2" />
                    <img class="slider-image" :src="product3" />
                    <img class="slider-image" :src="product4" />
                    <img class="slider-image" :src="product5" />
                    <img class="slider-image" :src="product2" />
                </div>
            </div>
        </div>

        <div class="mb-12">
            <p style="color: white; text-align: center;" class="text-2xl font-bold mb-4">Founder of Biomagg</p>
            <img :src="founder1" style="border-radius: 50%; height: 150px; width: 150px; display: block; margin-left: auto; margin-right: auto;" width="250px;" />
            <p style="color: white; text-align: center;" class="mb-12 mt-4">Aminudi <br />Founder and CEO</p>
            <img :src="founder2" style="border-radius: 50%; height: 150px; width: 150px; display: block; margin-left: auto; margin-right: auto; margin-top: 50px;" width="250px;" />
            <p style="color: white; text-align: center;" class="mb-12 mt-4">Pandudamai Insani Taufiq <br /> Founder and COO</p>
        </div>

        <div style="background-color: #63D161; margin: 10%; border-radius: 5%;">
            <p style="color: white; text-align: center; padding: 10%;">
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
            product2: require('../assets/images/biomagg/product2.png'),
            product3: require('../assets/images/biomagg/product3.png'),
            product4: require('../assets/images/biomagg/product4.png'),
            product5: require('../assets/images/biomagg/product5.png'),
            founder1: require('../assets/images/biomagg/founder1.png'),
            founder2: require('../assets/images/biomagg/founder2.png'),
        }
    },
}
</script>

<style scoped>
   .container {
        padding-left: 10px;
        overflow-x:scroll;
        width: 100vw;
    }
    .scroller-container img{    
        width: 100%;
        height: calc(100% - 100px);
        -o-object-fit: cover;
        object-fit: cover;
        margin-right: 10px;
        border-radius: 10px;
    }
    .scroller-container{
        /* max-height: 334px; */
        min-width: 300px;
        /* height: 205px; */
        border-radius: 10px;
        max-height: 400px;
        background-color: white;
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
    .slider-image{
        margin-right: 10px;
        border-radius: 10px;
    }
</style>