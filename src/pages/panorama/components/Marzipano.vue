<template>
    <div class="container">
        <div id="viewer" ref="view" class="h-screen-custom w-screen" @click="getCoords">
        </div>
        <div v-for="(arrow, idx) in arrows" :ref="arrow.name" class="arrow-container" :key="'arrow-' + idx">
            <router-link :to="arrow.link">
                <div class="text-white">{{ arrow.title }}</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="arrow" fill="white" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script>
import createMarzipano from '../../../utils/marzipanoBuilder.js'
export default {
    props: {
        arrows: {
            default: () => [],
            type: Array
        },
        sceneUrl: {
            default: '',
            type: String
        }
    },
    beforeDestroy(){
        document.body.style.overflow = "visible";
        this.marzObj.viewer.destroyAllScenes();
    },
    mounted(){
        const elem = this.$refs.view
        this.marzObj = createMarzipano(elem, this.sceneUrl)
        this.hotSpots = this.arrows.map((arrow) => {
            return this.marzObj.scene.hotspotContainer().createHotspot(this.$refs[arrow.name][0], arrow.coord)
        })
        document.body.style.overflow = "hidden";

        document.querySelector('#viewer div').style.height = '100vh'
        document.querySelector('#viewer canvas').style.height = '100vh'
    },
    data(){
        return {
            marzObj: null,
            hotSpots: {
            }
        }
    },
    methods: {
        getCoords(e){
            console.log(this.marzObj.view.screenToCoordinates({x: e.clientX, y: e.clientY}))
        }
    }
}
</script>

<style scoped>

</style>

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
    .h-screen-custom{
        height: var(--viewport-height);
    }
</style>