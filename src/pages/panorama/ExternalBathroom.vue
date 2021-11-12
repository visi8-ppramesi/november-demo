<template>
    <marzipano 
        sceneUrl="/assets/scenes/ExternalBathroom_BLANK.jpg"
        :arrows="arrows"
    />
    <!-- <div class="container">
        <div id="viewer" ref="view" class="h-screen-custom w-screen" @click="getCoords">
        </div>
        <div ref="arrowOne" class="arrow-container">
            <router-link to="/panorama/bathroom/">
                <div class="text-white">Bathroom view</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="white" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
            </router-link>
        </div>
        <div ref="arrowTwo" class="arrow-container">
            <router-link to="/panorama/bigroom/">
                <div class="text-white">Big Bobocabin view</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="white" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
            </router-link>
        </div>
        <div ref="arrowThree" class="arrow-container">
            <router-link to="/panorama/smallroom/">
                <div class="text-white">Small Bobocabin view</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="white" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
            </router-link>
        </div>
        <div ref="arrowFour" class="arrow-container">
            <router-link to="/panorama/exterior/">
                <div class="text-white">Exterior view</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="white" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
            </router-link>
        </div>
    </div> -->
</template>

<script>
import Marzipano from './components/Marzipano.vue'
export default {
    components: {
        Marzipano
    },
    // beforeDestroy(){
    //     document.body.style.overflow = "visible";
    //     this.marzObj.viewer.destroyAllScenes();
    // },
    // mounted(){
    //     const elem = this.$refs.view
    //     const arrowOne = this.$refs.arrowOne
    //     const arrowTwo = this.$refs.arrowTwo
    //     const arrowThree = this.$refs.arrowThree
    //     const arrowFour = this.$refs.arrowFour
    //     this.marzObj = createMarzipano(elem, '/assets/scenes/ExternalBathroom_BLANK.jpg')
    //     this.hotSpots.arrowOne = this.marzObj.scene.hotspotContainer().createHotspot(arrowOne, this.coords.arrowOne)
    //     this.hotSpots.arrowTwo = this.marzObj.scene.hotspotContainer().createHotspot(arrowTwo, this.coords.arrowTwo)
    //     this.hotSpots.arrowThree = this.marzObj.scene.hotspotContainer().createHotspot(arrowThree, this.coords.arrowThree)
    //     this.hotSpots.arrowFour = this.marzObj.scene.hotspotContainer().createHotspot(arrowFour, this.coords.arrowFour)
    //     document.body.style.overflow = "hidden";

    //     document.querySelector('#viewer div').style.height = '100vh'
    //     document.querySelector('#viewer canvas').style.height = '100vh'
    // },
    data(){
        return {
            // marzObj: null,
            // hotSpots: {

            // },
            // coords: {
            //     arrowOne: {yaw: -0.0014463205333328233, pitch: -0.22321076545841656},
            //     arrowTwo: {yaw: 1.3695532183947634, pitch: -0.18171578633322483},
            //     arrowThree: {yaw: -2.47489079317225, pitch: 0.21068823038624274},
            //     arrowFour: {yaw: 2.413352138231991, pitch: 0.2281757697878355},
            // }
            arrows: [
                {
                    name: 'arrowOne',
                    link: '/panorama/bathroom/',
                    title: 'Bathroom view',
                    coord: {
                        yaw: -0.0014463205333328233, pitch: -0.22321076545841656
                    }
                },
                {
                    name: 'arrowTwo',
                    link: '/panorama/bigroom/',
                    title: 'Duluxe Bobocabin view',
                    coord: {
                        yaw: 1.3695532183947634, pitch: -0.18171578633322483
                    }
                },
                {
                    name: 'arrowThree',
                    link: '/panorama/smallroom/',
                    title: 'Standard Bobocabin view',
                    coord: {
                        yaw: -2.47489079317225, pitch: 0.21068823038624274
                    }
                },
                {
                    name: 'arrowFour',
                    link: '/panorama/exterior/',
                    title: 'Exterior view',
                    coord: {
                        yaw: 2.413352138231991, pitch: 0.2281757697878355
                    }
                },
            ],
        }
    },
    created(){
        var img1 = new Image();
        img1.src = '/assets/scenes/Bathroom_BLANK.jpg';
    }
    // methods: {
    //     getCoords(e){
    //         console.log(this.marzObj.view.screenToCoordinates({x: e.clientX, y: e.clientY}))
    //     },
    //     updateLocation(){
    //         this.hotSpots.arrowOne.setPosition(this.coords.arrowOne)
    //     }
    // }
}
</script>

<style>
    .arrow-container{
        width: 70px;
        height: 70px;
        margin-left: -35px;
        margin-top: -70px;
        text-align: center;
        width: 100px;
        text-shadow: rgb(0 0 0) -1px -1px 0px, rgb(0 0 0) 1px -1px 0px, rgb(0 0 0) -1px 1px 0px, rgb(0 0 0) 1px 1px 0px;
    }
    .arrow{
        width: 60px;
        height: 60px;
        margin: auto;
    }
</style>