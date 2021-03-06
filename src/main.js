import Vue from 'vue';
import App from './App.vue';

// import 'font-awesome/css/font-awesome.min.css';
import '2o3t-icon-font/dist/font-ot.css';

import '2o3t-ui/dist/OTUI.css';
import OTUI from '2o3t-ui';

const color = window.localStorage && window.localStorage.getItem('ot-color') || null;
Vue.use(OTUI, {
    global: true,
    color,
});

Vue.config.productionTip = false;

import router from '@router';

// test
import Shared from '@/shared';
Vue.use(Shared);

const app = new Vue({
    router,
    render: h => h(App),
    mounted() {
        // 解决移动端 hover 问题
        if (document) {
            document.body.addEventListener('touchstart', function() { });
        }
    },
});

router.onReady(() => {
    app.$mount('#app');
});

