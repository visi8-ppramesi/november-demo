<template>
    <div>{{ something }}</div>
</template>

<script>
export default {
    created(){
        window.addEventListener('message', this.addSomething)
    },
    data(){
        return {
            something: 'qwer'
        }
    },
    methods: {
        addSomething(data){
            this.something += JSON.stringify(data)
        }
    }
}
</script>