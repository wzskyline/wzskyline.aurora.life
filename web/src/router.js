import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: '/', component:()=>import("@/appPages/Home") },
    { path: '/Page', name: 'Page', component:()=>import("@/appPages/Page") },
  ] 
})
