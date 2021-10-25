<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'scene-viewer',
    data(){
        return {
            company: null,
            model: null,
            origHtmlClass: '',
        }
    },
    created(){
        this.company = this.$route.params.company
        this.model = this.$route.params.model
        try{
            let model = require('../scenes/' + this.company + '-' + this.model + '.html')
            const html = document.getElementsByTagName('html')[0]
            this.origHtmlClass = html.className
            document.body.insertAdjacentHTML('beforeend', model)
            console.log('a-frame injected')
        }catch(e){
            console.log(e)
        }
    },
    beforeDestroy(){
        const ascene = document.getElementsByTagName('a-scene')[0]
        if(eightWallLoading !== null){
            ascene.parentNode.removeChild(ascene)
        }
        const eightWallLoading = document.getElementById('loadingContainer')
        if(eightWallLoading !== null){
            eightWallLoading.parentNode.removeChild(eightWallLoading)
        }
        const html = document.getElementsByTagName('html')[0]
        html.className = this.origHtmlClass
    },
}
</script>

<style>
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>