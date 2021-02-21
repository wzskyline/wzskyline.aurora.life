<template>
  <div class="MyAccount"> 
     <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="iconBack">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button> 
       查看历史
    </mu-appbar>
       
 <mu-expansion-panel v-for="(item,i) in list" :key="i">
    <div slot="header">{{ item.code}}</div>
     <div>{{ item.q1}},{{ item.q2}},{{ item.q3}},{{ item.q4}},{{ item.q5}}</div>
	<div slot="action">{{ formatDate(item.date)}}</div>
  </mu-expansion-panel>
  
  </div>
</template>

<script>
import {getExcelJosn,updateExcel,deleteExcel,addOneExcel} from '@/action/index';
const pageSize = 20;
export default { 
  data(){
        return{
              user:{
                id:Date.now(),
                name:Date.now(),
              },
			  list:[],
        }
    },
    mounted(){
         
    },
	created(){ 
	  this.getList({table:'gamePlay' ,search:this.$fp,page:1,pageSize:100})
    },
    methods: {
    iconBack(){
       this.$router.push({name: 'My',params:{}}); 
    },
    submit(arg){ var _this = this;
        
    },
	getList(arg){  
         getExcelJosn(arg).then(res=>{
		  this.list = res.data;
         }) 
    },
     
     
    }
}
</script>
 
<style scoped>
   

</style>
