import Vue from 'vue';
import App from './App.vue';
import axios from './plugins/axios';
import router from './plugins/router';
import store from './store';
import VueScrollTo from 'vue-scrollto';
import Effects from "@/mixins/Effects";
import VueMeta from 'vue-meta';
import './scss/main.scss';
import 'typeface-nunito'

Vue.component('ItemRow', () => import("@/components/item/ItemRow"));
Vue.component('ItemCol', () => import("@/components/item/ItemCol"));
Vue.component('ItemColText', () => import("@/components/item/ItemColText"));
Vue.component('ItemTitle', () => import("@/components/item/ItemTitle"));
Vue.component('ItemText', () => import("@/components/item/ItemText"));
Vue.component('ItemDivider', () => import("@/components/item/ItemDivider"));
Vue.component('ItemVideo', () => import("@/components/item/ItemVideo"));

import {library} from '@fortawesome/fontawesome-svg-core';
import {faChessKing, faChessKnight, faChessPawn, faChessQueen} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faChessKing, faChessQueen, faChessKnight, faChessPawn, faInstagram);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo);
Vue.use(VueMeta);
Vue.mixin(Effects);

Vue.config.productionTip = false;

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app');