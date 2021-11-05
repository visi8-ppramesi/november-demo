import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'

window.axios = require('axios')

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
