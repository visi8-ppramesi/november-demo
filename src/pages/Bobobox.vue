<template>
    <div style="background-color: #006f66;" class="h-content">
        <div>
            <div class="flex items-center justify-center">
                <img class="h-36 pb-3" :src=logo />
            </div>
        </div>

        <hr class="ml-5 mr-5" />

        <div>
            <section class="p-5 text-white">
                <strong class="text-xl">let's see what bobocabin <br /> looks like !</strong>
            </section>
        </div>

        <div>
            <div class="px-5 pb-2">
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
            <div class="text-center text-xl font-bold text-white">Experience with Our AR Feature</div>
            <img class="pt-3" :src="bobo9" />
            <div>
                <div class="flex items-center justify-center py-3">
                    <router-link to="/scene/company/bobobox/model/product1" class="bobobox-link">
                        <button style="background-color: #089c94;" class="text-white py-2 mt-3 px-4 rounded-xl">
                            View With AR
                        </button>
                    </router-link>
                </div>
                <div class="flex items-center justify-center py-3">
                    <router-link to="/panorama/" class="bobobox-link">
                        <button style="background-color: #089c94;" class="text-white py-2 mt-3 px-4 rounded-xl">
                            View 360
                        </button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="px-4 pb-5">
            <p style="color: white; text-align: center" class="text-2xl font-bold mt-4">Our Team</p>
            <div class="flex items-center justify-center mt-3 divide-x">
                <img :src="founder1" style="object-fit:cover; height: 100px; width: 100px;" />
                <p class="text-white my-7 mx-5 pl-5"><strong>Indra Gunawan</strong> <br />CEO</p>
            </div>
            <div class="flex items-center justify-center mt-3 divide-x">
                <img :src="founder2" style="object-fit:cover; height: 100px; width: 100px;" />
                <p class="text-white my-6 mx-5 pl-5"><strong>Antonius Bong</strong> <br /> President</p>
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