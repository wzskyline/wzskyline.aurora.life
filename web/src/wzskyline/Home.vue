<template>
  <div class="wzskyline"> 
     <mu-carousel>
      <mu-carousel-item> 1</mu-carousel-item>
      <mu-carousel-item> 2</mu-carousel-item>
      <mu-carousel-item> 3</mu-carousel-item>
      <mu-carousel-item> 4</mu-carousel-item>
    </mu-carousel>

<mu-data-table height="300" border stripe  :min-col-width="45" :columns="columns"  :data="list">
      
      <template slot-scope="scope"> 
        <td >{{scope.row.code}}</td>
        <td >{{scope.row.q1}}</td>
        <td >{{scope.row.q2}}</td>
        <td >{{scope.row.q3}}</td>
        <td >{{scope.row.q4}}</td>
        <td >{{scope.row.q5}}</td> 
      </template>
    </mu-data-table>

  </div>
</template>

<script>
import {getExcelJosn,updateExcel,deleteExcel,addOneExcel} from '@/action/index';
const pageSize = 20;
export default { 
  data(){
        return{
              columns:[
                 { title: '期号',  name: 'code' },
                 { title: ' 1', name: 'q1',  },
                 { title: ' 2', name: 'q2',  },
                 { title: ' 3', name: 'q3',  },
                 { title: ' 4', name: 'q4',  },
                 { title: ' 5', name: 'q5',  },
              ],
              list:[],
        }
    },
    mounted(){
         
    },
    created(){
      this.getList({table:'cp' ,search:'',page:1,pageSize:60})
    },
    methods: {
    searchData(){
       
    },
    getList(arg){  
         getExcelJosn(arg).then(res=>{
           this.list = res.data
         }) 
    },
     
     
    }
}
</script>
 
<style scoped>
   

</style>
