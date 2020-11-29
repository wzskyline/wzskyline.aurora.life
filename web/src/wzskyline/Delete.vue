<template>
  <div class="detail">
      <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="iconBack">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button> 清空表操作
    </mu-appbar>  
    
    <div class="mu-text-field mu-input-content" style="margin:10px 5px"> 
         <input placeholder="请输入表名" tabindex="0" v-model="table" class="mu-text-field-input my-search-input">
    </div>
     <div class="mu-text-field mu-input-content" style="margin:10px 5px"> 
         <input placeholder="请输入口令" tabindex="0" v-model="code" class="mu-text-field-input my-search-input">
    </div>
     <div class="mu-text-field mu-input-content" style="margin:10px 5px"> 
         <mu-button color="red" @click="openSimpleDialog" style="margin:0 10px 0 0;font-size:18px"> 删除 </mu-button>
    </div>

    <mu-dialog title="提示" width="360" :open.sync="openSimple">
     确定删除表？
    <mu-button slot="actions" flat color="info" @click="closeSimpleDialog">取消</mu-button>
	  <mu-button slot="actions"   color="primary" @click="submit">确定</mu-button>
  </mu-dialog>

   
  </div>
</template>

<script>
import {  deleteTable } from '@/action/index';
const pageSize = 20;
export default { 
  data(){
        return{
              table:'',
              code:'',
              openSimple:false,
        }
    },
    mounted(){
        
    },
    methods: {
     
    openSimpleDialog () {
      if(this.table && this.code) this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    },
        
     
    iconBack(){
      this.$router.push({name: '/',params:{}});
    },
    
    submit () {
        deleteTable(this.table,this.code).then(res=>{
               this.openSimple = false;
               res.message==='ok'?this.$toast.success('删除成功'):this.$toast.error('删除失败');
         }) 
     },
    }
     
}
</script>
 
<style scoped>
   

</style>
