<template>
    <div style="background-color: #1C1A1A;">
        <div class="px-4 flex content-center items-center justify-center align-center">
            <img :src="logo" class="pt-4" style="width: 33vw; max-width:150px" />
            <div class="flex flex-col pl-2">
                <div class="text-3xl mb-4">
                    <span style="color:white">Bells</span> <strong style="color: #5C4040;">Society</strong> 
                </div>
                <div>
                    <div class="text-xl" style="color:white; line-height:1rem;">science Discovers</div> 
                    <strong class="text-xl" style="color: #7E4C4C; line-height:1rem;">art Creates </strong>
                </div>
            </div>
        </div>
        <div class="px-4">
            <hr class="my-2" style="color:white"/>
        </div>
        <div>
            <p class="m-10" style="color: white; text-align: center;">
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

        <div class="px-4">
            <p style="color: white; text-align: center" class="text-3xl font-bold mb-4">Our Team</p>
            <img :src="founder1" style="object-fit:cover; border-radius: 50%; height: 150px; width: 150px; display: block; margin-left: auto; margin-right: auto;" width="250px;" />
            <p style="color: white; text-align: center;" class="my-8">Arka Irfani <br />CEO/CTO and Founder</p>
            <img :src="founder2" style="object-fit:cover; border-radius: 50%; height: 150px; width: 150px; display: block; margin-left: auto; margin-right: auto; margin-top: 50px;" width="250px;" />
            <p style="color: white; text-align: center;" class="my-8">Semeru Gita L <br /> COO and Founder</p>
        </div>

        <div class="px-4">
            <p style="color: white;" class="text-xl">Our Products</p>

            <div class="scrolling-wrapper">
                <div class="w-screen card p-2 bg-white scroller-container mr-1">
                    <router-link to="/scene/company/bellssociety/model/product1">
                        <img :src="product1" />
                    </router-link>
                    <div class="ar-button-container flex">
                        <router-link to="/scene/company/bellssociety/model/product1">
                            <div class="ar-button text-xl">
                                Show AR
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="w-screen card p-2 bg-white scroller-container mr-1">
                    <router-link to="/scene/company/bellssociety/model/product2">
                        <img :src="product2" />
                    </router-link>
                    <div class="ar-button-container flex">
                        <router-link to="/scene/company/bellssociety/model/product2">
                            <div class="ar-button text-xl">
                                Show AR
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="w-screen card p-2 bg-white scroller-container mr-1">
                    <router-link to="/scene/company/bellssociety/model/product3">
                        <img :src="product3" />
                    </router-link>
                    <div class="ar-button-container flex">
                        <router-link to="/scene/company/bellssociety/model/product3">
                            <div class="ar-button text-xl">
                                Show AR
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div style="display: flex;" class="px-4 py-10">
            <div class="bottom-image">
                <img :src="pic" />
            </div>
            <p class="ml-2" style="color: white; text-align: right; width: 400px;">Currently Bell Society owned one workshop in Bandung with production capacity of 100m2/month. Expected to be expanded to 300m2/month by using the investment proceed</p>
        </div>

        <div class="mt-6" style="background-color: black; padding: 10%; border-top-left-radius: 10%; border-top-right-radius: 10%;">
            <p style="color: white; text-align: center; padding: 3%;">
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
        height: calc(100% - 100px);
        -o-object-fit: cover;
        object-fit: cover;
    }
    .scroller-container{
        /* max-height: 334px; */
        min-width: 300px;
        /* height: 205px; */
        border-radius: 10px;
        max-height: 400px;
        background-color: white;
    }
    .image{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 80px;
        max-width: 100%;
    }
    .scroller-block{
        height: calc(100vh - 64px);
        background-size: cover;
        background-position: center;
        max-height: 100%;
    }
    .ar-button-container{
        height: 100px;
        justify-content: center;
        align-items: center;
    }
    .ar-button{
        padding: 15px 30px;
        background-color: rgb(28, 26, 26);
        border-radius: 10px;
        color: white;
    }
</style>