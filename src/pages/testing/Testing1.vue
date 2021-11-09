<template>
    <div>
        <button>asdfasd</button>
        <iframe ref="iframe" src="https://visi8-panorama.ap.ngrok.io/#/test2" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
    mounted(){
        const duplicateOrientationEventData = (e) => {
            return {
                alpha: e.alpha,
                gamma: e.gamma,
                beta: e.beta,
            }
        }
        const iframe = this.$refs.iframe
        window.addEventListener('deviceorientation', function(e){
            iframe.contentWindow.postMessage({
                type: 'deviceorientation',
                deviceOrientationEvent: duplicateOrientationEventData(e)
            })
        })
    }
}
</script>