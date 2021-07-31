import Vue from 'vue';
import App from './App.vue';
import axios from './plugins/axios';
import router from './plugins/router';
import store from './store';
import VueScrollTo from 'vue-scrollto';
import Effects from "@/mixins/Effects";
import './scss/main.scss';
import 'typeface-nunito';

import {library} from '@fortawesome/fontawesome-svg-core'
import {faChessKing, faChessKnight, faChessPawn, faChessQueen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faChessKing, faChessQueen, faChessKnight, faChessPawn);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo)
Vue.mixin(Effects);

Vue.config.productionTip = false;

new Vue({
  axios,
  router,
  store,
  render: h => h(App),
}).$mount('#app');