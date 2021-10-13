<template>
    <div>
        {{ company }} {{ model }}
    </div>
</template>

<script>
export default {
    name: 'scene-viewer',
    data(){
        return {
            company: null,
            model: null,
        }
    },
    created(){
        this.company = this.$route.params.company
        this.model = this.$route.params.model
        // let model = require('../models/' + this.model)
    }
}
</script>