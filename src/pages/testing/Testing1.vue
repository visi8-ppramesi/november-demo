<template>
    <div>
        <button>asdfasd</button>
        <iframe ref="iframe" src="http://localhost:8080/#/test2" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
    mounted(){
        const iframe = this.$refs.iframe
        iframe.onload = function(){
            setInterval(function(){
                iframe.contentWindow.postMessage(JSON.stringify({ message: 'hello' }), '*')
            }, 5000)
        }
    }
}
</script>