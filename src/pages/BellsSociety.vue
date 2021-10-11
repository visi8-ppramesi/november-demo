<template>
    <div style="background-color: #1C1A1A;">
        <div style="display: flex; justify-content: center;">
            <img :src="logo" style="width: 270px; height: 270px; margin-top: 80px;" />
            <div style="margin-left: 80px;">
               <p style="font-size: 70px; color: white;">
                    Bells <strong style="color: #5C4040;">Society</strong> 
                    <br /> 
                    science Discovers 
                    <br /> 
                    <strong style="color: #7E4C4C;">art Creates </strong>
                </p>
            </div>
        </div>

        <hr style="width: 90%;"/>

        <div>
            <p style="color: white; text-align: center; margin: 80px;">
                <strong style="color: #7E4C4C;">Bell Society</strong> is a biomaterial company that produces Misel, a eco sheet of cellulose that is strong.
                <br /> <br />
                <strong style="color: #7E4C4C;">Misel</strong> is made by converting organic waste resources that we collected by using the power of bacteria. 
                and also produced trough a process of discoveries and innovation. 
                <br /> <br />
                We believe that it is best to make use of what nature has given to us, rather than create a synthetic replacement for our needs.  
                <br /><br />
                We are striving to become a brand that will produce something that could save the biodiversity, and also something that is reachable for anyone
            </p>
        </div>

        <div>
            <p style="color: white; text-align: center; font-size: 120px;">Our Team</p>
            <img :src="founder1" style="border-radius: 50%; height: 300px; width: 300px; display: block; margin-left: auto; margin-right: auto;" width="250px;" />
            <p style="color: white; text-align: center; margin: 50px;">Arka Irfani <br />CEO/CTO and Founder</p>
            <img :src="founder2" style="border-radius: 50%; height: 300px; width: 300px; display: block; margin-left: auto; margin-right: auto; margin-top: 50px;" width="250px;" />
            <p style="color: white; text-align: center; margin: 50px;">Semeru Gita L <br /> COO and Founder</p>
        </div>

        <div>
            <p style="color: white; font-size: 100px; margin-left: 70px;">Our Products</p>
            <div class="container">
                <div style="display: flex;">
                    <img :src="product1" />
                    <img :src="product2" />
                    <img :src="product3" />
                </div>
            </div>
        </div>

        <div style="display: flex; margin: 180px 50px 50px 50px;">
            <p style="color: white; font-size: 50px; text-align: left; width: 400px;">One of DSI’s subsidiary, IIB (Ideanation) acquired 26% shares of Bell Society with the value of IDR 500 mio</p>
            <div>
                <img style="width: 400px; margin-top: 50px; margin-left: 40px;" :src="pic" />
            </div>
        </div>

        <div style="display: flex; margin: 180px 50px 50px 50px;">
            <div>
                <img style="width: 400px; margin-top: 50px; margin-right: 40px; height: 500px;" :src="pic" />
            </div>
            <p style="color: white; font-size: 50px; text-align: right; width: 400px;">Currently Bell Society owned one workshop in Bandung with production capacity of 100m2/month. Expected to be expanded to 300m2/month by using the investment proceed</p>
        </div>

        <div style="background-color: black; margin: 10%; border-radius: 5%;">
            <p style="color: white; text-align: center; padding: 10%;">
                <strong>Future Project :</strong>
                <br /> <br />
                Collaborate with PT. Mitrabara Adiperdana Tbk, for one of their post mining project. 
                To set up new workshop in Malinau with production capacity of 400 m2/month. 
                The compay’s post mining area will be utilized as the plantation and workshop 
                for misel production
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bells-society',
    data(){
        return {
            logo: require('../assets/images/bells_society/Picture1.png'),
            founder1: require('../assets/images/bells_society/founder1.png'),
            founder2: require('../assets/images/bells_society/founder2.png'),
            product1: require('../assets/images/bells_society/product1.png'),
            product2: require('../assets/images/bells_society/product2.png'),
            product3: require('../assets/images/bells_society/product3.png'),
            pic: require('../assets/images/bells_society/pic.jpg'),

        }
    }
}
</script>

<style scoped>
    .container {
    margin-left: 70px;
    overflow-x:scroll;
    width: 85%;
    }
</style>