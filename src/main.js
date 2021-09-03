import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from './router'
import Index from './Index'
import walletManager from "./walletManager";

import 'bootstrap'

Vue.router = router;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(walletManager);

// Vue.component('main-component', );
import punks from './punks'
import punks_attributes from './attributes'

window.punks = punks;
window.punks_attributes = punks_attributes;
if (window.location.href.indexOf('crosspunks.com') > -1 || window.location.href.indexOf('ost:') > -1)
    new Vue({
        render: h => h(Index),
        el: '#app',
        router,
        watch: {
            $route: {
                immediate: true,
                handler(to, from) {
                    document.title = to.meta.title + ' | CrossPunks';
                }
            },
        }
    });