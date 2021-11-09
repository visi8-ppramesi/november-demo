<template>
    <div style="background-color: #006f66;" class="h-content">
        <div>
            <div class="flex items-center justify-center">
                <img class="h-28 pb-2" :src=boboLogo />
            </div>
        </div>

        <hr class="ml-5 mr-5" />

        <div>
            <p class="p-5 text-center italic text-white">
                <strong class="text-lg">Bobobox</strong> is the first and largest tech-enabled sleeping experience eco-system in Indonesia.
                Bobobox are sleek capsule hotels equipped with IoT-enabled features to enhance guests’ experience and safety.
            </p>
        </div>

        <div class="grid sm:grid-rows-2 sm:grid-flow-col">
            <!-- <div> -->
                <img class="row-span-2 h-full w-full object-fill" :src=room2 />
                <img class="col-span-1 h-full w-full object-fill" :src=room1 />
                <img class="col-span-1 h-full w-full object-fill" :src=room3 />
            <!-- </div>
            <div> -->
            <!-- </div> -->
        </div>

        <div class="p-5 text-white">
            <p class="text-2xl font-bold">Bobobox Has :</p>
            <ul class="px-5 py-2 list-disc">
                <li>1.000 pods 14 branches</li>
                <li>Over 80% Ave. Occupancy Rate</li>
                <li>Over 90% Millennials and Younger</li>
                <li>Over 70% NPS and Direct Transactions</li>
                <li>$8 - $15 per Night</li>
            </ul>
        </div>

        <div class="flex items-center justify-center py-3">
            <router-link to="/panorama/malioboro/" class="bobobox-link">
                <button style="background-color: #089c94;" class="text-white py-2 mt-3 px-4 rounded-xl">
                    View 360 Malioboro
                </button>
            </router-link>
        </div>

        <div class="px-4 pb-5">
            <p style="color: white; text-align: center" class="text-2xl font-bold mt-5">Our Team</p>
            <div class="flex items-center justify-center mt-3 divide-x">
                <img :src="founder1" style="object-fit:cover; height: 100px; width: 100px;" />
                <p class="text-white my-7 mx-5 pl-5"><strong>Indra Gunawan</strong> <br />CEO</p>
            </div>
            <div class="flex items-center justify-center mt-3 divide-x">
                <img :src="founder2" style="object-fit:cover; height: 100px; width: 100px;" />
                <p class="text-white my-6 mx-5 pl-5"><strong>Antonius Bong</strong> <br /> President</p>
            </div>
        </div>

        <hr class="mt-5 border-gray border-4" />

        <div>
            <div class="flex items-center justify-center">
                <img class="h-36 mt-5 pb-3" :src=logo />
            </div>
        </div>

        <hr class="ml-5 mr-5" />

        <div>
            <section class="p-5 text-white">
                <strong class="text-xl">let's see what bobocabin <br /> looks like !</strong>
            </section>
        </div>

        <div>
            <div class="pb-2">
                <img class="shadow-xl" :src="bobo1" />
            </div>
            <div class="scrolling-wrapper pb-5">
                <div class="bg-white scroller-container mr-1">
                    <img :src="bobo4" />
                </div>
                <div class="scroller-container mr-1">
                    <img :src="bobo5" />
                </div>
                <div class="scroller-container mr-1">
                    <img :src="bobo6" />
                </div>
                <div class="scroller-container mr-1">
                   <img :src="bobo7" />
                </div>
                <div class="scroller-container mr-1">
                    <img :src="bobo8" />
                </div>
                <div class="scroller-container mr-1">
                    <img :src="bobo10" />
                </div>
            </div>
        </div>

        <div>
            <div class="text-center text-xl font-bold text-white">Experience with Our AR/VR Feature</div>
            <img class="pt-3" :src="bobo9" />
            <div>
                <div class="flex items-center justify-center py-3">
                    <router-link to="/scene/company/bobobox/model/product1" class="bobobox-link">
                        <button style="background-color: #089c94;" class="text-white py-2 px-4 rounded-xl">
                            View With AR
                        </button>
                    </router-link>
                </div>
                <div class="flex items-center justify-center pb-3">
                    <router-link to="/panorama/" class="bobobox-link">
                        <button style="background-color: #089c94;" class="text-white py-2 px-4 rounded-xl">
                            View 360 Bobocabin
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'bobobox',
   data: function () {
      return {
          logo: require('../assets/images/bobobox/logo.png'),
          boboLogo: require('../assets/images/bobobox/boboboxLogo.png'),
          bobo1: require('../assets/images/bobobox/bobo1.jpg'),
          bobo2: require('../assets/images/bobobox/bobo2.jpg'),
          bobo3: require('../assets/images/bobobox/bobo3.jpg'),
          bobo4: require('../assets/images/bobobox/bobo4.jpg'),
          bobo5: require('../assets/images/bobobox/bobo5.jpg'),
          bobo6: require('../assets/images/bobobox/bobo6.jpg'),
          bobo7: require('../assets/images/bobobox/bobo7.jpg'),
          bobo8: require('../assets/images/bobobox/bobo8.jpg'),
          bobo9: require('../assets/images/bobobox/bobo9.jpg'),
          bobo10: require('../assets/images/bobobox/bobo10.jpg'),
          room1: require('../assets/images/bobobox/room1.png'),
          room2: require('../assets/images/bobobox/room2.png'),
          room3: require('../assets/images/bobobox/room3.png'),
          founder1: require('../assets/images/bobobox/founder1.png'),
          founder2: require('../assets/images/bobobox/founder2.png'),
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
        padding-left: 5%;
        padding-right: 5%;
    }
    .scrolling-wrapper.card{
        flex: 0 0 auto;
    }
    .scrolling-wrapper::-webkit-scrollbar {
        display: none;
    }
    .scroller-container img{    
        width: 100%;
        height: 100%;
        -o-object-fit: contain;
        object-fit: contain;
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