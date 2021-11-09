<template>
    <iframe ref="iframe" src="https://vr.collab.id/bobobox-malioboro/" frameBorder="0" allow="magnetometer; vr; xr; accelerometer; magnetometer; gyroscope; webvr;webxr;"
    allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" class="h-screen w-screen"></iframe>
    <!-- <div id="iframe-container"></div> -->
</template>

<script>
export default {
    created(){
        const duplicateOrientationEventData = (e) => {
            return {
                alpha: e.alpha,
                gamma: e.gamma,
                beta: e.beta,
            }
        }
        const duplicateMotionEventData = (e) => {
            return {
                acceleration: {
                    x: e.acceleration.x,
                    y: e.acceleration.y,
                    z: e.acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: e.accelerationIncludingGravity.x,
                    y: e.accelerationIncludingGravity.y,
                    z: e.accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: e.rotationRate.alpha,
                    beta: e.rotationRate.beta,
                    gamma: e.rotationRate.gamma,
                },
                interval: e.interval,
                timeStamp: e.timeStamp
            };
        }
        // const iframeContainer = document.getElementById('iframe-container')
        // const iframe = document.createElement('iframe')
        // iframe.src = 'https://vr.collab.id/bobobox-malioboro/'
        // iframe.style = 'border:none;'
        // iframe.setAttribute('allow', 'magnetometer; vr; xr; accelerometer; magnetometer; gyroscope; webvr;webxr;')
        // iframe.className = "h-screen w-screen"
        // iframe.allowfullscreen = ''
        // iframe.mozallowfullscreen = 'true'
        // iframe.webkitallowfullscreen = 'true'
        // document.body.appendChild(iframe)
        if (window.DeviceOrientationEvent) {
            if (typeof(window.DeviceOrientationEvent.requestPermission) == 'function') {
                window.DeviceOrientationEvent.requestPermission()
                    .then((resp) => {
                        if (resp === 'granted') {
                            const iframe = this.$refs.iframe
                            window.addEventListener('deviceorientation', function(e){
                                iframe.contentWindow.postMessage({
                                    type: 'deviceorientation',
                                    deviceOrientationEvent: duplicateOrientationEventData(e)
                                })
                            })
                            window.addEventListener('devicemotion', function(e){
                                iframe.contentWindow.postMessage({
                                    type: 'devicemotion',
                                    deviceOrientationEvent: duplicateMotionEventData(e)
                                })
                            })
                        }
                    })
                    .catch((e) => {
                        console.error(e)
                    })
            }
        }
    }
}
</script>