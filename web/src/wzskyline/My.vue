<template>
  <div class="MY"> 
    <mu-row>
      <mu-avatar color="indigo" style="margin:20px">
      <mu-icon value="account_circle"></mu-icon>
    </mu-avatar>
    <mu-card-title :title="user.name" :sub-title="user.fp"  ></mu-card-title>
    </mu-row>
     <mu-list>
    <mu-list-item  >
      <mu-list-item-action><mu-icon value="inbox"></mu-icon></mu-list-item-action>
      <mu-list-item-title @click="changeView('MyAccount')">我的账户</mu-list-item-title>
      <mu-icon value="navigate_next" @click="changeView('MyAccount')"></mu-icon>
    </mu-list-item>
    <mu-list-item >
      <mu-list-item-action><mu-icon value="menu"></mu-icon></mu-list-item-action>
      <mu-list-item-title @click="changeView('MyList')">我的历史</mu-list-item-title>
      <mu-icon value="navigate_next" @click="changeView('MyList')"></mu-icon>
    </mu-list-item>
    <mu-divider/>
     </mu-list>
  </div>
</template>

<script>
import {getExcelJosn,updateExcel,deleteExcel,addOneExcel,gameUserByFp} from '@/action/index';
const pageSize = 20;
export default { 
  data(){
        return{
          user:{
                id:Date.now(),
				fp:Date.now(),
                name:Date.now(),
              }    
        }
    },
	created(){ 
      gameUserByFp({
        fp:this.$fp,
      }).then(res=>{
           var obj = res.gameUser[0]
		   this.user.name = obj.name;
		   this.user.id = obj.id;
      })
    },
    mounted(){
         
    },
    methods: {
    searchData(){
       
    },
    changeView(arg){ this.push(arg);},
     
     
    }
}
</script>
 
<style scoped>
   .MY{
     padding:10px 10px
   }
   .MY .mu-list>li{
     margin:8px 0;
     border-top:1px solid #ccc;
   }
</style>
