<template>
    <div>
        <nav @click="goBack">
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
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>