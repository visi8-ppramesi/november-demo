<template>
    <div>{{ something }}</div>
</template>

<script>
export default {
    created(){
        window.addEventListener('deviceorientation', (event) => {
            this.something += JSON.stringify([event.alpha, event.beta, event.gamma])
        })
    },
    data(){
        return {
            something: 'zxcv'
        }
    },
    methods: {
    }
}
</script>