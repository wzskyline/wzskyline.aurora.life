<template>
  <div class="detail">
  <mu-container>
  <mu-bottom-nav>
    <mu-bottom-nav-item title="home" icon="home"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item> 
    <mu-bottom-nav-item title="Books" icon="books"></mu-bottom-nav-item>
    <mu-bottom-nav-item title="Pictures" icon="photo"></mu-bottom-nav-item>

  </mu-bottom-nav>
</mu-container>
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
