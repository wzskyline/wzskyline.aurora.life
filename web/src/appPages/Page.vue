<template>
  <div class="detail">
      <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="iconBack">
        <mu-icon value="arrow_back" ></mu-icon>
      </mu-button> {{title}}
      <mu-button flat slot="right" @click="iconAdd">
        <mu-icon value="add" size="30"></mu-icon>
      </mu-button>
    </mu-appbar> 
     <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
     
        <mu-form ref="form" :model="row" class="mu-demo-form">

          <p  :style="{display:table=='ta'?'none':''}">   
             <mu-form-item label="日期"  > <mu-date-input v-model="row.date" /> </mu-form-item>
          </p>
          <p  :style="{display:table=='ta'?'':'none'}">   
          <mu-form-item label="商品编号" > <mu-text-field v-model="row.number" /> </mu-form-item>
          <mu-form-item label="商品名称" > <mu-text-field v-model="row.name" /></mu-form-item>
          <mu-form-item label="型号"  > <mu-text-field v-model="row.mark" ></mu-text-field> </mu-form-item>
          <mu-form-item label="库存单位"  > <mu-text-field v-model="row.unit" ></mu-text-field> </mu-form-item>
          <mu-form-item label="仓位"  > <mu-text-field v-model="row.store" ></mu-text-field> </mu-form-item>
          <mu-form-item label="存放位置"  > <mu-text-field v-model="row.position" ></mu-text-field> </mu-form-item> 
          </p>
          <p  :style="{display:table=='tb'?'':'none'}">   
          <mu-form-item label="名称"  > <mu-text-field v-model="row.name" /> </mu-form-item>
          <mu-form-item label="规格"  > <mu-text-field v-model="row.guige"/></mu-form-item>
          <mu-form-item label="数量"  > <mu-text-field v-model="row.number" type="number" /> </mu-form-item>
          <mu-form-item label="单位"  > <mu-text-field v-model="row.unit" /> </mu-form-item>
          <mu-form-item label="领用人"  > <mu-text-field v-model="row.person"/> </mu-form-item> 
          </p>
          <p  :style="{display:table=='tc'?'':'none'}">   
          <mu-form-item label="名称"  > <mu-text-field v-model="row.name" /> </mu-form-item>
          <mu-form-item label="规格"  > <mu-text-field v-model="row.guige" /> </mu-form-item>
          <mu-form-item label="型号"  > <mu-text-field v-model="row.type" /> </mu-form-item>
          <mu-form-item label="需求量"  > <mu-text-field v-model="row.need" type="number"/> </mu-form-item>
          <mu-form-item label="已备量"  > <mu-text-field v-model="row.finish"  type="number"/> </mu-form-item>
          <mu-form-item label="单位"  > <mu-text-field v-model="row.unit" /> </mu-form-item>
          <mu-form-item label="用途"  > <mu-text-field v-model="row.usefor" /> </mu-form-item>
          </p>
          <p  :style="{display:table=='td'?'':'none'}">   
          <mu-form-item label="规格"  > <mu-text-field v-model="row.guige" /> </mu-form-item>
          <mu-form-item label="名称"  > <mu-text-field v-model="row.name" /> </mu-form-item>
          <mu-form-item label="需求量"  > <mu-text-field v-model="row.need" type="number"/> </mu-form-item>
          <mu-form-item label="完成量"  > <mu-text-field v-model="row.finish" type="number" /> </mu-form-item>
          <mu-form-item label="单位"  > <mu-text-field v-model="row.unit" /> </mu-form-item> 
          <mu-form-item label="地点"  > <mu-text-field v-model="row.position" /></mu-form-item> 
          </p>
          <p  :style="{display:table=='te'?'':'none'}">   
          <mu-form-item label="姓名"  > <mu-text-field v-model="row.name" /> </mu-form-item>
          <mu-form-item label="工艺"  > <mu-text-field v-model="row.gongyi" /></mu-form-item>
          <mu-form-item label="数量"  > <mu-text-field v-model="row.number" type="number" /></mu-form-item>
          <mu-form-item label="工时"  > <mu-text-field v-model="row.time" type="number" /></mu-form-item>
          <mu-form-item label="地点"  > <mu-text-field v-model="row.position" /></mu-form-item> 
          </p>
          <mu-text-field v-model="row.desc" multi-line :rows="4" icon="comment"  placeholder="备注"/><br/>
          <mu-form-item> <mu-button @click="clear">重置</mu-button> <mu-button color="primary" @click="submit">提交</mu-button> </mu-form-item>
        </mu-form>  
    </mu-drawer>
    

    <div class="mu-text-field mu-input-content" style="margin:10px 5px"> 
         <input :placeholder="info" tabindex="0" v-model="search" class="mu-text-field-input my-search-input">
         <mu-button color="red" @click="searchData" style="margin:0 10px 0 0;font-size:18px"> 查询 <mu-icon right value="search"></mu-icon> </mu-button>
    </div>

    <mu-dialog title="提示" width="360" :open.sync="openSimple">
     确定删除此记录？
    <mu-button slot="actions" flat color="info" @click="closeSimpleDialog">取消</mu-button>
	  <mu-button slot="actions"   color="primary" @click="buttonDelete">确定</mu-button>
  </mu-dialog>


     <mu-data-table height="300" border stripe  :min-col-width="70" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
      
      <template slot-scope="scope">
        <td :style="{display:scope.row.hasOwnProperty('date')?'':'none',width:'90px'}">{{scope.row.date?scope.row.date.substr(0,10):''}}</td>
        <td :style="{display:table =='ta'?'':'none'}">{{scope.row.number}}</td>
        <td :style="{display:['ta','tb','tc','te',].includes(table) ?'':'none'}">{{scope.row.name}}</td>
        <td :style="{display:table =='ta'?'':'none'}">{{scope.row.mark}}</td>
        <td :style="{display:table =='ta'?'':'none',width:'40px'}">{{scope.row.unit}}</td>
        <td :style="{display:table =='ta'?'':'none'}">{{scope.row.store}}</td>
        <td :style="{display:table =='ta'?'':'none'}">{{scope.row.position}}</td>
        <td :style="{display:table =='ta'?'':'none'}">{{scope.row.type}}</td> 

        <td :style="{display:table =='tb'?'':'none'}">{{scope.row.guige}}</td>
        <td :style="{display:table =='tb'?'':'none'}">{{scope.row.number}}</td>
        <td :style="{display:table =='tb'?'':'none',width:'40px'}">{{scope.row.unit}}</td>
        <td :style="{display:table =='tb'?'':'none'}">{{scope.row.person}}</td> 
        
        <td :style="{display:table =='tc'?'':'none'}">{{scope.row.guige}}</td>
        <td :style="{display:table =='tc'?'':'none'}">{{scope.row.type}}</td>
        <td :style="{display:table =='tc'?'':'none',width:'40px'}">{{scope.row.need}}</td>
        <td :style="{display:table =='tc'?'':'none',width:'40px'}">{{scope.row.finish}}</td>
        <td :style="{display:table =='tc'?'':'none',width:'40px'}">{{scope.row.unit}}</td>
        <td :style="{display:table =='tc'?'':'none'}">{{scope.row.usefor}}</td> 
        
        <td :style="{display:table =='td'?'':'none'}">{{scope.row.name}}</td>
        <td :style="{display:table =='td'?'':'none'}">{{scope.row.guige}}</td>
        <td :style="{display:table =='td'?'':'none',width:'40px'}">{{scope.row.need}}</td>
        <td :style="{display:table =='td'?'':'none',width:'40px'}">{{scope.row.finish}}</td>
        <td :style="{display:table =='td'?'':'none',width:'40px'}">{{scope.row.unit}}</td> 
        <td :style="{display:table =='td'?'':'none'}">{{scope.row.position}}</td> 
        
        <td :style="{display:table =='te'?'':'none'}"> {{scope.row.gongyi}}</td>
        <td :style="{display:table =='te'?'':'none',width:'40px'}"> {{scope.row.number}}</td>
        <td :style="{display:table =='te'?'':'none',width:'40px'}"> {{scope.row.time}}</td>
        <td :style="{display:table =='te'?'':'none'}"> {{scope.row.position}}</td> 
          
       
        <td >{{scope.row.desc}}</td>
        <td >
          <a @click="deleteLine(scope.row)" class="a-delete">删除</a><br>
          <a @click="updateLine(scope.row)">修改</a>
        </td>
      </template>
    </mu-data-table>
    <mu-flex justify-content="center" style="margin: 32px 0;">
        <mu-pagination raised :total="total" :current.sync="current" @change="change"></mu-pagination>
    </mu-flex>

  </div>
</template>

<script>
import {getExcelJosn,updateExcel,deleteExcel,addOneExcel} from '@/action/index';
const pageSize = 20;
export default { 
  data(){
        return{
             title:'',
             table:'ta',
             info:'',
             docked: false,
             open: false,
             openSimple:false,
             position: 'left',
             row:{}, 
             sort: { name: '', order: 'asc' },
             columns: [   ],
            list: [  ],
            current:1,
            total:100,
            search:'',
        }
    },
    mounted(){
        this.title =this.$store.state.title;
        this.table = this.$store.state.table;
        this.info = this.$store.state.info;
        this.columns = this.$store.state.col;
        this.getList({table:this.table  ,search:'',page:1,pageSize:pageSize})
    },
    methods: {
    searchData(){
      let audio = new Audio();audio.src = "13380.mp3";audio.play();
     this.list =[]
     this.getList({table:this.table ,search:this.search,page:1,pageSize:pageSize})
    },
    getList(arg){ var _this = this;
       getExcelJosn(arg).then(res=>{
          _this.list = res.data
          _this.total = res.count
          _this.current = parseInt(res.page)
       }) 
    },
    change(page){
     console.log(page)
     this.list =[]
     this.getList({table:this.table ,search:this.search,page,pageSize:pageSize})
    },
    deleteLine(row){
     this.openSimple = true;
     this.row =row;
     console.log(row)
    },
    updateLine(row){
     console.log(row)
     this.row = row;
     var tmp = new Date(this.row.date) 
     this.row.date = `${tmp.getFullYear()}-${tmp.getMonth()+1}-${tmp.getDate()-1}`
     this.open = true;
    },
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    },
    openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    },
    buttonDelete(){ 
            deleteExcel(this.table,this.row.id).then(res=>{
                this.openSimple = false;
               this.flush();
               res?this.$toast.success('删除成功'):this.$toast.error('删除失败');
         })
    },      
    iconAdd(){
      this.open = true;
      this.row.id = '';
      this.row.date = new Date();
    },
    iconBack(){
      this.$router.push({name: '/',params:{}});
    },
    flush(){
        this.open = false;
        this.getList({table:this.table ,search:'',page:this.current,pageSize:pageSize})
    },
    submit () {
       var _this = this;
       var tmp = new Date(this.row.date) 
       this.row.date = `${tmp.getFullYear()}-${tmp.getMonth()+1}-${tmp.getDate()+1}`
       //
       var submitMap = {
         ta:{ desc: this.row.desc, mark: this.row.mark, name: this.row.name, number: this.row.number, position: this.row.position, store: this.row.store, type: this.row.type, unit: this.row.unit, },
         tb:{ date: this.row.date, desc: this.row.desc, name: this.row.name,  guige: this.row.guige, number: this.row.number, person: this.row.person, unit: this.row.unit, },
         tc:{ date: this.row.date, desc: this.row.desc, name: this.row.name,finish: this.row.finish, guige: this.row.guige,need: this.row.need, type: this.row.type, unit: this.row.unit,usefor: this.row.usefor, },
         td:{ date: this.row.date, desc: this.row.desc, name: this.row.name,finish: this.row.finish, guige: this.row.guige,need: this.row.need, position: this.row.position, unit: this.row.unit,usefor: this.row.usefor, },
         te:{ date: this.row.date, desc: this.row.desc,  name: this.row.name, number: this.row.number, position: this.row.position, gongyi: this.row.gongyi, time: this.row.time, },
       }
       var submit = submitMap[this.table]
       submit.id = this.row.id;
       
        try {
           if(this.row.id){
             submit.fp = this.row.fp;
             updateExcel(this.table,submit).then(res=>{
               _this.flush();
               res?this.$toast.success('更新成功'):this.$toast.error('更新失败');
             })
           }else{
             submit.fp = 'wz';
            addOneExcel(this.table,submit).then(res=>{
              _this.flush();
              res?this.$toast.success('添加成功'):this.$toast.error('添加失败');
            })
           } 
       } catch (error) {
          this.$toast.error('操作失败,请检查网络');
       }
    },
    clear () {
      console.log(this.row)
       var id = this.row.id; this.row = {}; this.row.id = id;
     }
    }
}
</script>
 
<style scoped>
  th,td{
    width:100px;
    font-size: 10px!important;
  }
  th{
    text-align: center!important;
  }

</style>
