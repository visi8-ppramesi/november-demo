<template>
    <div style="background-color: #34A453;">
        <div>
            <img :src="logo" style=" width: 300px; display: block; margin-left: auto; margin-right: auto; margin-top: 10%;" />
        </div>
        <hr style="width: 90%; margin-top: 5%;" />

        <div>
            <p style="text-align: left; margin: 5%; padding-right: 35%; color: white;">
                <strong style="font-size: 50px;">What is Biomagg ?</strong>
                <br /><br />
                <strong style="color: #46E96A;">BIOMAGG</strong> is a start-up that focuses on processing organic waste, especially food waste, using bioconversion technology 
                of black soldier flies (BSF) to create a circular economy. 
                <br /> <br />
                <strong style="color: #46E96A;">BIOMAGG</strong> aim to be a sustainable protein provider in the future, while solving the organic waste problem
            </p>
        </div>

        <div>
            <p style="color: white; font-size: 70px; text-align: center;">Our Products</p>
            <div class="container">
                <div style="display: flex;">
                    <img :src="product2" />
                    <img :src="product3" />
                    <img :src="product4" />
                    <img :src="product5" />
                    <img :src="product2" />
                </div>
            </div>
        </div>

        <div>
            <p style="color: white; text-align: center; font-size: 70px;">Founder of Biomagg</p>
            <img :src="founder1" style="border-radius: 50%; height: 300px; width: 300px; display: block; margin-left: auto; margin-right: auto;" width="250px;" />
            <p style="color: white; text-align: center; margin: 50px;">Aminudi <br />Founder and CEO</p>
            <img :src="founder2" style="border-radius: 50%; height: 300px; width: 300px; display: block; margin-left: auto; margin-right: auto; margin-top: 50px;" width="250px;" />
            <p style="color: white; text-align: center; margin: 50px;">Pandudamai Insani Taufiq <br /> Founder and COO</p>
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
    margin-left: 50px;
    overflow-x:scroll;
    width: 90%;
    }
</style>