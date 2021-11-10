<template>
    <div>
        <nav @click="goBack" v-if="$route.name !== 'LandingPage'" class="go-back-container fixed h-16">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16" fill="white" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
        </nav>
        <div class="text-white">
            <div class="powered fixed rounded-md w-32" style="background-color: rgba(40, 40, 40, 0.7);">
               <img class="powered-by-logo" :src="poweredVisi8"/>
            </div>
        </div>
        <router-view :key="key" />
    </div>
</template>

<script>
export default {
    name: 'layout',
    computed: {
        key() {
            return this.$route.fullPath;
        },
    },
     data(){
        return {
            poweredVisi8: require('../assets/images/visi8/powered_visi.png'),
        }
    },
    methods: {
        goBack(){
            if(this.key.includes('panorama')){
                let goBack = parseInt(localStorage.getItem("panoramaDepth")) * -1
                console.log(goBack)
                this.$router.go(goBack)
                localStorage.removeItem('panoramaDepth')
            }else{
                this.$router.go(-1)
            }
        }
    }
}
</script>

<style scoped>
    .go-back-container{
        top: calc(var(--viewport-height) - 84px);
        margin: 10px;
        z-index: 9999;
    }

    .powered {
        top: calc(var(--viewport-height) - 32px);
        right:18px;
        /* opacity: 0.7; */
    }
    .powered-by-logo{
        width: 100%;
    }
</style>