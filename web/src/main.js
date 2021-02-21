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
import Fingerprint from 'fingerprintjs';  
import {gameUser,gameUserByFp} from './action/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
window.Fingerprint = Fingerprint
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
Vue.prototype.$fp = new Fingerprint().get();
Vue.prototype.push = function(name){ this.$router.push({name: name,params:{}}); }
Vue.prototype.formatDate = function(date){
  var tmp =date? new Date(date): new Date();
  return `${tmp.getFullYear()}-${tmp.getMonth()+1}-${tmp.getDate()}`;
}
Vue.prototype.update = function(data){
  var sf= this;
  this.$store.commit('change',data);
  setTimeout(() => { sf.$forceUpdate(); }, 100);
}
gameUser({
  fp:new Fingerprint().get(),
  name:new Fingerprint().get(),
  desc:'',
}).then(res=>{
     console.log(res)
}) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default new Vue()