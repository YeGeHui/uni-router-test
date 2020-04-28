import Vue from "vue";
import App from "./App";

import Router, { RouterMount } from "uni-simple-router";

Vue.use(Router);

console.log(ROUTES);

const tabBar = {
  "/pages/index/index": "index",
  "/pages/tab-2/tab-2": "tab-2",
  "/pages/tab-3/tab-3": "tab-3",
  "/pages/tab-4/tab-4": "tab-4",
  "/pages/tab-5/tab-5": "tab-5",
};

const router = new Router({
  debugger: true,
  encodeURI: false,
  h5: {
    paramsToQuery: true,
    loading: true,
    vueRouterDev: false,
    useUniConfig: true,
  },
  APP: {
    holdTabbar: false,
    rewriteFun: false,
  },
  routerBeforeEach: () => {
    console.log("routerBeforeEach");
  },
  routerAfterEach: () => {
    console.log("routerAfterEach");
  },
  routes: [
    ...ROUTES,
    {
      path: "*",
      redirect: (to) => {
        console.log(to);
        let name = tabBar[to.path];
        if (name) {
          return {
            name,
          };
        }
        return {
          name: "404",
        };
      },
    },
  ],
});

console.log(router);

router.beforeEach((to, from, next) => {
  console.log(to);
  next();
});

router.afterEach((to, from) => {});

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
});

// #ifdef H5
RouterMount(app, "#app");
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
