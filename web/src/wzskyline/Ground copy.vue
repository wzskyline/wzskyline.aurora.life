<template>
 <div class="Ground" ref="Ground">
      <mu-avatar> 1 </mu-avatar><mu-avatar> 2 </mu-avatar>
 
  <mu-load-more :refreshing="refreshing" :loading="loading" @load="load">
 <mu-card >  
    <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
    <mu-card-text> 散落在指尖的 </mu-card-text>
    <mu-card-actions></mu-card-actions>
</mu-card>
 </mu-load-more> 
  </div>
</template>

<script>
import {getExcelJosn,updateExcel,deleteExcel,addOneExcel} from '@/action/index';
const pageSize = 20;
export default { 
  data(){
        return{
              num: 10,
      refreshing: false,
      loading: false,
        }
    },
    mounted(){
         
    },
    methods: {
    load () {
       
    },
    getList(arg){  
        
    },
     
     
    }
}
</script>
 
<style scoped>
   

</style>
