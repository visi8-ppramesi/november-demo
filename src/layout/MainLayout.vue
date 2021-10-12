<template>
    <div>
        <nav @click="goBack" v-if="$route.name !== 'LandingPage'">
            go back
        </nav>
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
    created(){
        console.log(this.$route)
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>