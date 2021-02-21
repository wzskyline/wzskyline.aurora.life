<template>
  <div class="MyAccount"> 
     <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="iconBack">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button> 
      嗨!{{user.name}}
    </mu-appbar>
    <mu-form ref="form" :model="user" class="mu-demo-form"> 
          <mu-form-item label="编号" > <mu-text-field readonly v-model="user.fp" /> </mu-form-item>
          <mu-form-item label="昵称" > <mu-text-field v-model="user.name" /></mu-form-item> 
            
    </mu-form>  
   <center> <mu-button color="primary" @click="submit">保存</mu-button></center>
 
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
    mounted(){
         this.user.fp = this.$fp;
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
    methods: {
    iconBack(){
       this.$router.push({name: 'My',params:{}}); 
    },
    submit(arg){ 
         updateExcel('gameUser',{
		 id:this.user.id,
		 fp:this.$fp,
		 name:this.user.name,
		 desc:'',
		 }).then(res=>{ 
            res?this.$toast.success('更新成功'):this.$toast.error('更新失败');
         })
    },
     
     
    }
}
</script>
 
<style scoped>
   

</style>
