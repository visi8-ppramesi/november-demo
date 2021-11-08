<template>
    <iframe ref="iframe" src="https://vr.collab.id/bobobox-malioboro/" frameBorder="0" allow="magnetometer; vr; xr; accelerometer; magnetometer; gyroscope; webvr;webxr;"
    allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" class="h-screen w-screen"></iframe>
</template>

<script>
export default {
    mounted(){
        if (window.DeviceOrientationEvent) {
            if (typeof(window.DeviceOrientationEvent.requestPermission) == 'function') {
                const iframe = this.$refs.iframe
                window.addEventListener('deviceorientation', function(e){
                    iframe.contentWindow.postMessage({
                        type: 'deviceorientation',
                        deviceOrientationEvent: e
                    })
                })
            }
        }
    }
}
</script>