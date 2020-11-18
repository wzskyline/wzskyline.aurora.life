import Vue from 'vue'
import App from './App.vue'
import router from './router'  
import './registerServiceWorker'
//引入muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import './main.css';
import MuseUIToast from 'muse-ui-toast';
import Vuex from 'vuex';
Vue.use(MuseUIToast);
Vue.use(MuseUI);
Vue.use(Vuex);
Vue.config.productionTip = false
const store = new Vuex.Store({
  state:{title:'',table:'',page:'',pageSize:'',list:[],col:[],row:{},open:false},
  mutations:{ change(state,data){ state = Object.assign(state,data)}},
  getters:{},
  actions:{},  
})
Vue.prototype.push = function(name){ this.$router.push({name: name,params:{}}); }
Vue.prototype.update = function(data){
  var sf= this;
  this.$store.commit('change',data);
  setTimeout(() => { sf.$forceUpdate(); }, 100);
}
 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
