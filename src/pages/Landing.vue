<template>
    <div class="bg-blurgh w-screen h-screen">

    </div>
</template>

<script>
export default {
    name: 'landing',
    data(){
        return {
            test: () => require('../scenes/test.html'),
        }
    },
    created(){
        console.log(this.test())
    }
}
</script>