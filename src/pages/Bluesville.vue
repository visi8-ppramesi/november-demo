<template>
    <div style="background-color: #203950; ">

        <div>
            <img :src="logo" style=" width: 250px; display: block; margin-left: auto; margin-right: auto; margin-top: 10%;" />

            <hr style="width: 90%;" />

            <div class="text-brush">
                <p style="color: white; width: 70%; text-align: center; padding-top: 20%; padding-left: 12%; font-size: 25px;">
                    <strong style="color: #2F5BF8;">Bluesville</strong> is a menswear brand with a focus on preservation of traditional processes and Indonesian culture that applied to the modern 
                    and relevant men’s clothing
                </p>
            </div>

            <div>
                <div style="display: flex; justify-content: start;">
                    <img :src="founder2" style="border-radius: 50%; height: 150px; width: 150px; display: block; margin-left: 5%;" />
                    <div style="background-color: #819FB5; border-radius: 10px; margin-left: 5%;">
                        <p style="color: white; font-weight: 700; font-size: 30px; padding: 5%;">Respati Hafidz Budi (Direz)</p>
                    </div>
                </div>

                <div style="display: flex; margin-top: 10%; justify-content: end; margin-right: 5%;">
                    <div style="background-color: #819FB5; border-radius: 10px; margin-left: 5%;">
                        <p style="color: white; font-weight: 700; font-size: 30px; padding: 5%;">Respati Hafidz Budi (Direz)</p>
                    </div>
                    <img :src="founder3" style="border-radius: 50%; height: 150px; width: 150px; display: block; margin-left: 5%;" />
                </div>

                <div style="display: flex; margin-top: 10%; justify-content: start;">
                    <img :src="founder4" style="border-radius: 50%; height: 150px; width: 150px; display: block; margin-left: 5%;" />
                    <div style="background-color: #819FB5; border-radius: 10px; margin-left: 5%;">
                        <p style="color: white; font-weight: 700; font-size: 30px; padding: 5%;">Arundana Pratamasunu (Dana)</p>
                    </div>
                </div>
            </div>

            <div>
                <p style="color: white; font-size: 60px; text-align: center;">Our Products</p>
                <div style="display: grid; grid-template-columns: auto auto;">
                    <img class="product" :src="product2" />
                    <img class="product" :src="product3" />
                    <img class="product" :src="product4" />
                    <img class="product" :src="product5" />
                </div>
            </div>

            <div>
                <p style="text-align: center; color: white; padding: 10%;">
                    Founded: 2015
                    <br /><br />
                    DSI Participation: 2021
                    DSI Investment: IDR 1 Bn (IDR 810 Mio Equity – IDR 190 Mio SH loan)
                    DSI ownership: 16.5%
                    Post-money Valuation: IDR 4.9 Bn
                    On-going Project in collaboration with DSI
                    Indigofera Nursery and Plantation in Anyer
                    Natural Dying workshop and experiential destination in Anyer


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
        width: 500px; 
        height: 500px;
        display: block; 
        margin-left: auto; 
        margin-right: auto; 
        margin-top: 10%;
    }

    .product {
        height: 95%;
        width: 95%;
        margin: 3%;
    }
</style>