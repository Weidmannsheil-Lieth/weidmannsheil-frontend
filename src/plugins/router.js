import Vue from 'vue';
import VueRouter from 'vue-router';
import VueScrollTo from "vue-scrollto";
import store from "@/store";

const routes = [];

function getScrollName(name) {
  return name + 'Scroll';
}

function newRoute(path, name, component) {
  routes.push(
    {
      path: path,
      name: name,
      component: component
    }
  )
}

function newScrollRoute(path, name, component) {
  newRoute(path, name, component);
  newRoute(path + '/:scroll', getScrollName(name), component)
}


// Routes
newRoute('/', 'home', () => import('@/views/home'));
newRoute('/impressum', 'impressum', () => import('@/views/impressum'));
newRoute('/links', 'links', () => import('@/views/links'));
newRoute('/rechtliches', 'rechtliches', () => import('@/views/rechtliches'));
newRoute('/weiterleitung/:id', 'weiterleitung', () => import('@/views/weiterleitung'));

// ScrollRoutes
newScrollRoute('/verein', 'verein', () => import('@/views/verein'))
newScrollRoute('/ergebnisse', 'ergebnisse', () => import('@/views/ergebnisse'));
newScrollRoute('/training', 'training', () => import('@/views/training'));
newScrollRoute('/galerie', 'galerie', () => import('@/views/galerie'));
newScrollRoute('/anmeldung', 'anmeldung', () => import('@/views/anmeldung'));


const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (!(to.name === getScrollName(to.name) || from.name === getScrollName(from.name))) {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "auto"
    })
  }
  next();
});

router.afterEach((to) => {
  store.dispatch('menu/toggleMenu');
  Vue.nextTick().then(() => {
    if (to.params.scroll) {
      VueScrollTo.scrollTo('#' + to.params.scroll)
    } else {
      window.scrollTo(0, 0);
    }
  });
});

Vue.use(VueRouter);

export default router;