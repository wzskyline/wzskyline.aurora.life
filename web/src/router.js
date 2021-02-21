import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //{ path: '/', name: '/', component:()=>import("@/appPages/Home") },
    { path: '/Page', name: 'Page', component:()=>import("@/appPages/Page") },
    { path: '/Delete', name: 'Delete', component:()=>import("@/appPages/Delete") },


    //{ path: '/', name: '/', component:()=>import("@/wzskyline/Home") },
    { path: '/Home', name: 'Home', component:()=>import("@/wzskyline/Home") },
    { path: '/Ground', name: 'Ground', component:()=>import("@/wzskyline/Ground") },
    { path: '/My', name: 'My', component:()=>import("@/wzskyline/My") },
    { path: '/MyList', name: 'MyList', component:()=>import("@/wzskyline/MyList") },
    { path: '/MyAccount', name: 'MyAccount', component:()=>import("@/wzskyline/MyAccount") },
    { path: '/Detail', name: 'Detail', component:()=>import("@/wzskyline/Detail") },

    { path: '/', name: '', component:()=>import("@/subWays/Home") },
     

  ] 
})
