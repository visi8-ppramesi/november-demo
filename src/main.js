import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'

window.axios = require('axios')
// window.AFRAME.registerComponent('responsive-immersive', {
//     init(){
//         const onAttach = ({sessionAttributes}) => {
//             console.log(sessionAttributes)
//         }
//         const onxrloaded = () => {
//             window.XR8.addCameraPipelineModules([{'name': 'responsiveImmersive', onAttach}])
//         }
//         window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
//     },
// });
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    watch: {
        '$route': function(to) {
            if(to.path.includes('panorama')){
                let panoramaDepth = parseInt(localStorage.getItem("panoramaDepth")) || 0;
                localStorage.setItem("panoramaDepth", ++panoramaDepth);
            }else{
                localStorage.removeItem('panoramaDepth')
            }
        }
    },
    created(){
      visualViewport.addEventListener('resize', () => {
          document.documentElement.style.setProperty('--viewport-height', `${visualViewport.height}px`);
          console.log(visualViewport.height)
      });
    },
}).$mount('#app')
