import Vue from 'vue';
import VueRouter from 'vue-router';
import VueScrollTo from "vue-scrollto";
import store from "@/store";

const routes = [];

function newRoute(path, name, component) {
  routes.push(
    {
      path: path,
      name: name,
      component: component
    }
  )
}

newRoute('/', 'home', () => import('@/views/home'));
newRoute('/impressum', 'impressum', () => import('@/views/impressum'));
newRoute('/links', 'links', () => import('@/views/links'));
newRoute('/rechtliches', 'rechtliches', () => import('@/views/rechtliches'));
newRoute('/weiterleitung/:id', 'weiterleitung', () => import('@/views/weiterleitung'));
newRoute('/verein', 'verein', () => import('@/views/verein'))
newRoute('/ergebnisse', 'ergebnisse', () => import('@/views/ergebnisse'));
newRoute('/training', 'training', () => import('@/views/training'));
newRoute('/galerie', 'galerie', () => import('@/views/galerie'));
newRoute('/aufnahme', 'aufnahme', () => import('@/views/aufnahme'));
newRoute('*', 'not-found', () => import('@/views/not-found'));

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "auto"
  });
  next();
});

router.afterEach((to) => {
  store.dispatch('menu/toggleMenu');
  Vue.nextTick().then(() => {
    if (to.hash) {
      setTimeout(VueScrollTo.scrollTo(to.hash), 500);
    } else {
      window.scrollTo(0, 0);
    }
  });
});

Vue.use(VueRouter);

export default router;