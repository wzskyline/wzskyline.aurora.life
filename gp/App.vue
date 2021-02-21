<template>
<div style="width:100vw">
   <el-tabs v-model="activeName"  @tab-click="changeTab">
    <el-tab-pane label="首页大厅" name="first">  </el-tab-pane>
    <el-tab-pane label="我的自选" name="second"> </el-tab-pane>  
  </el-tabs>
  <el-row style="margin:5px" >
      <el-col :span="1"> <i  @click="drawer = true" class="el-icon-s-operation" style="font-size:28px"/></el-col>
      <el-col :span="6"><el-input placeholder="请输入内容" v-model="search" clearable class="input-with-select" @keyup.enter.native="doSearch()"> <el-button slot="append" icon="el-icon-search" @click="doSearch()"></el-button> </el-input></el-col>
     <el-popover placement="bottom" trigger="click" v-model="popover" >
       <div>价格区间<br/>
       <el-input-number  style="width:130px" v-model="form.min" :min="0" :max="form.max" label="最低"></el-input-number>
       <el-input-number style="width:130px" v-model="form.max"  :min="form.min" :max="900" label="最高"></el-input-number>
       <br/><el-checkbox v-model="form.st">ST</el-checkbox><br/>
       <el-checkbox-group v-model="form.prefix">
          <el-checkbox label="00">00</el-checkbox><br/>
          <el-checkbox label="30">30</el-checkbox><br/> 
          <el-checkbox label="40">40</el-checkbox><br/> 
          <el-checkbox label="50">50</el-checkbox><br/> 
          <el-checkbox label="60">60</el-checkbox><br/>  
          <el-checkbox label="000">000</el-checkbox><br/>
          <el-checkbox label="300">300</el-checkbox><br/>
          <el-checkbox label="600">600</el-checkbox><br/>
          <el-checkbox label="600">601</el-checkbox><br/> 
         </el-checkbox-group>  
       <el-button type="primary" @click="onSubmit" size="small">确定筛选</el-button>
       </div>
    <el-button slot="reference" style="margin:0 10px">筛选行</el-button>
  </el-popover>
  <el-popover placement="bottom" width="150" trigger="click" >
       <div>
         <el-checkbox-group v-model="cols">
          <el-checkbox label="f3">涨跌(%)</el-checkbox><br/>
          <el-checkbox label="f4">涨跌</el-checkbox><br/>
          <el-checkbox label="f5">成交量</el-checkbox><br/>
          <el-checkbox label="f6">成交额</el-checkbox><br/>
          <el-checkbox label="f7">振幅</el-checkbox><br/>
          <el-checkbox label="f8">换手</el-checkbox><br/>
          <el-checkbox label="f9">市盈率</el-checkbox><br/>
          <el-checkbox label="f10">量比</el-checkbox><br/>
          <el-checkbox label="f11">f11</el-checkbox><br/>
          <el-checkbox label="f13">f13</el-checkbox><br/>
          <el-checkbox label="f15">最高</el-checkbox><br/>
          <el-checkbox label="f16">最低</el-checkbox><br/>
          <el-checkbox label="f17">今开</el-checkbox><br/>
          <el-checkbox label="f18">昨收</el-checkbox><br/>
          <el-checkbox label="f19">f5</el-checkbox><br/>
          <el-checkbox label="f20">f6</el-checkbox><br/>
         </el-checkbox-group>  
       </div>
    <el-button slot="reference">定义列</el-button>
  </el-popover>
  </el-row>
  <el-drawer title="关于我们" :visible.sync="drawer" direction="ltr" :before-close="handleClose">
  <div>微信:wzskyline</div>
  <div>QQ群:wzskyline</div>
  <div>github:wzskyline</div>
</el-drawer>
  <el-row>
     <el-col :span="10">
       <el-table :data="homeData" border    max-height="500"   @row-click="rowClick"> 
        <el-table-column fixed prop="f12" label="代码" width="60" align="center"> </el-table-column> 
        <el-table-column prop="f14" label="名称" width="60" align="center" > </el-table-column> 
        <el-table-column prop="f2" label="现价" width="50" align="center"  > </el-table-column> 
        <el-table-column prop="f3" label="涨跌(%)" width="60" align="center" v-if="cols.includes('f3')"> </el-table-column>
        <el-table-column prop="f4" label="涨跌" width="50" align="center" v-if="cols.includes('f4')"> </el-table-column>
        <el-table-column prop="f15" label="最高" width="50" align="center" v-if="cols.includes('f15')"> </el-table-column>
        <el-table-column prop="f16" label="最低" width="50" align="center" v-if="cols.includes('f16')"> </el-table-column>
        <el-table-column prop="f17" label="今开" width="50" align="center" v-if="cols.includes('f17')"> </el-table-column>
        <el-table-column prop="f18" label="昨收" width="50" align="center" v-if="cols.includes('f18')"> </el-table-column>
        <el-table-column prop="f5" label="成交量" width="80" align="center" v-if="cols.includes('f5')"> </el-table-column>
        <el-table-column prop="f6" label="成交额" width="80" align="center" v-if="cols.includes('f6')"> </el-table-column>
        <el-table-column prop="f7" label="振幅" width="80" align="center" v-if="cols.includes('f7')"> </el-table-column>
        <el-table-column prop="f8" label="换手" width="50" align="center" v-if="cols.includes('f8')"> </el-table-column>
        <el-table-column prop="f9" label="市盈率" width="50" align="center" v-if="cols.includes('f9')"> </el-table-column>
        <el-table-column prop="f10" label="量比" width="40" align="center" v-if="cols.includes('f10')"> </el-table-column>
        <el-table-column prop="f11" label="f11" width="40" align="center" v-if="cols.includes('f11')"> </el-table-column>
        <el-table-column prop="f13" label="f13" width="40" align="center" v-if="cols.includes('f13')"> </el-table-column>
        <el-table-column prop="f19" label="f19" width="40" align="center" v-if="cols.includes('f19')"> </el-table-column>
        <el-table-column prop="f20" label="f20" width="40" align="center" v-if="cols.includes('f20')"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="40" align="center">
      <template slot-scope="scope">
        <i @click="handleClick(scope.row)"  :class=" myChoose.includes(scope.row.f12)? 'el-icon-remove-outline':'el-icon-circle-plus-outline'"/>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination :class="getClass(homeData.length<10)"
   background 
   @current-change="handleCurrentChange" 
   :current-page="page"
   @size-change="handleSizeChange"
    :page-sizes="[10,100, 200, 300, 400]" 
    :page-size="size" 
    :pager-count="5"
      layout="total, sizes,jumper, prev, pager, next"
     :total="total"> </el-pagination>
        </el-col>  
        <el-col :span="6" > 
          <viewer>
          <el-carousel trigger="click">
            <el-carousel-item> <img :src="getImg('min')" alt="" srcset=""> </el-carousel-item>
            <el-carousel-item> <img :src="getImg('daily')" alt="" srcset=""> </el-carousel-item>
            <el-carousel-item> <img :src="getImg('weekly')" alt="" srcset=""> </el-carousel-item>
            <el-carousel-item> <img :src="getImg('monthly')" alt="" srcset=""> </el-carousel-item>
           </el-carousel>
            </viewer>
        </el-col>
        <el-col :span="8" :class="getClass(history.length<1)" style="padding:0 5px">
          
          <el-table :data="history" border  max-height="500" style="margin:0 5px"> 
            <el-table-column prop="t" label="日期" width="80" align="center"> </el-table-column>  
            <el-table-column prop="n" label="最高" width="60" align="center"> </el-table-column> 
            <el-table-column prop="o" label="最低" width="40" align="center"> </el-table-column>
            <el-table-column prop="diff" label="差值" width="40" align="center"> </el-table-column>
            <el-table-column prop="x" label="涨跌(%)" width="60" align="center"> </el-table-column> 
            <el-table-column prop="y" label="涨跌" width="60" align="center"> </el-table-column> 
          </el-table>
        </el-col>  
    </el-row>
 
  </div>
</template>

<script>
document.title="wzskyline"
const ipcRenderer = require('electron').ipcRenderer;
let Dexie = require('dexie').default
let db = new Dexie("myChoose");
db.version(1).stores({ config: "++id,key,value" });
var gp = {
    list: (page,size = 20)=>{
        return fetch(`http://81.push2.eastmoney.com/api/qt/clist/get?&pn=${page}&pz=${size}&po=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f3&fs=m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,f17,f18`)
        .then(function(response) {  return response.json(); })   
    },
    item: (code)=>{
         code = code.startsWith('6') ? '1.' + code:'0.' +code;
        return fetch(`http://63.push2his.eastmoney.com/api/qt/stock/kline/get?cb=jQuery112407784130781479948_1613783425720&secid=${code}&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5%2Cf6&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58%2Cf59%2Cf60%2Cf61&klt=101&fqt=0&end=20500101&lmt=120&_=1613783425749`)
        .then(function(response) {  return response.text(); })   
    },  
}
export default {
  methods: {
      getClass(f){return f?'none':''},
      getImg(kind){ return `http://image.sinajs.cn/newchart/${kind}/n/${this.code}.gif` },
      jsonToArr(obj){ var arr =[]; for(var i in obj){ arr.push(obj[i]) } return arr; },
      
      doSearch(flag){
        var str = this.search; 
        if(flag) str = this.myChoose.join(",");
        var list = 'sz' +str.replace(/,/g,',sz') + ',sh' +str.replace(/,/g,',sh');
        ipcRenderer.send('message', { title:'getStock', url:`http://hq.sinajs.cn/list=${list}` })
      },
      changeTab(tab, event) { 
        if(tab.name ==='second'){  
          this.doSearch(true);
        }else{ 
          this.getData();
        }
      },
      onSubmit(){ 
          this.popover = false; 
          var th = this;
          this.homeData = this.homeData.F(e=>{
            return e.f2 > th.form.min  && e.f2 < th.form.max
          })  
          this.homeData = this.homeData.filter(e=>{
            return  th.form.prefix.includes(e.f12.substr(0,2))  ||  th.form.prefix.includes(e.f12.substr(0,3)) 
          })
          if(!th.form.st){
            this.homeData = this.homeData.filter(e=>{
              return  !e.f14.includes('ST')
           })
          }

      },
      getData(){
        var _this = this; 
        gp.list(this.page,this.size).then(data=>{  console.log(data);  
              _this.total =  data.data.total
              _this.homeData = _this.jsonToArr(data.data.diff) 
              _this.allData = _this.homeData 
        })
      },
      getHistory(code){
        var _this = this; 
        gp.item(code).then(data=>{ 
               var tmp = data.replace('jQuery112407784130781479948_1613783425720(','').replace(');','') 
               tmp = JSON.parse(tmp)
               tmp = tmp.data.klines 
               _this.history = tmp.map(e=>{
                 var a = e.split(",")
                 return { t:a[0],  n:a[3], o:a[4],diff:eval(`${a[3]}-${a[4]}`).toFixed(2),x:a[8], y:a[9], } 
               }).reverse()  
        })
      },
        rowClick(row) { 
           var code = row.f12;
           this.code = code.startsWith('6') ? 'sh' + code:'sz' +code;
           this.getHistory(row.f12)
        }, 
        loadMore() {
                   console.log(1);
        },
      handleSizeChange(val) {  this.size = val;this.getData(); },
      handleCurrentChange(val) { this.page = val; this.getData(); },
      handleClose(done) { 
         done();
      },
      handleClick(row){
           var flag = this.myChoose.length > 0
           if(this.myChoose.includes(row.f12)){ 
                         this.myChoose = this.myChoose.filter(e=>e !== row.f12)

             var tmp  = [...this.homeData ]
             //this.homeData = tmp.filter(e=>e !== row.f12)
             for(var i=0;i<tmp.length;i++){
                  if (tmp[i].f12 == row.f12)tmp.splice(i,1)
               }
             this.homeData  = tmp;
             
           }else{
             this.myChoose.push(row.f12)
           }
           if(flag){
                 db.config.update(1, {key: "choose", value:this.myChoose})
           }else{
                 db.config.add({key: "choose", value: this.myChoose}); 
           } 
      },  
  },
  created(){
     var th =this;
     ipcRenderer.on('reply',function(event,data){ th.homeData=data; })
  },
  data() {
    return { 
      activeName:'second', search:'',allData:[],homeData:[],page:1,size:10,total:0,drawer:false,popover:false,
      myChoose:[],myData:[],history:[],cols:['f3','f4','f15','f16','f17','f18'],
      code:'sh000001',
      form:{
        st:true,
        min:0,
        max:9999,
        prefix:[],
      }
    };
  },
  mounted() { 
    this.doSearch(true); 
    var th = this; 
    db.config.toArray().then(data=>{
          if(data) th.myChoose = data[0].value  
    }); 

  },
  directives: {
  loadmore: { 
   bind(el, binding) {
    const selectWrap = el.querySelector('.el-table__body-wrapper');
    selectWrap.addEventListener('scroll', function () {
      if (this.scrollHeight - this.scrollTop <= this.clientHeight) {
        binding.value();
      }
    })
  }
  }
}
};
 
    

/*
https://xuliangzhan_admin.gitee.io/vxe-table/#/table/advanced/custom
*/
</script>

<style>
.none{display:none!important} .viewer-canvas{background: #fff  !important;}
body {
  display: flex;
  overflow: hidden;
}
.plus {
  cursor: pointer;
  font-size: 50px;
  border: 1px solid #0088ff;
  display: inline;
  padding: 0 5px;
}

.el-tag > img {
  width: 50px;
  height: 50px;
  margin: 10px 0 10px 5px;
}
.imgs {
  margin: 0 0 40px 0;
  display: flex;
  flex-wrap: wrap;
}
#app {
  height: 98vh;
}
.el-tag {
  height: 70px !important;
  margin: 3px;
}
.el-icon-close {
  top: -50px !important;
  padding: 0 !important;
}
 

.el-message {
  top: 20px !important;
}

td {
  padding: 1px !important;
}
.cell {
  padding: 0px !important;
}

 

/* 滚动槽 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}
.el-icon-s-operation:hover{color: #0088ff;}

.el-table--striped .el-table__body tr.el-table__row--striped.current-row td, 
.el-table__body tr.current-row>td {
	background-color: #ffec8b;
}
.el-table--enable-row-hover .el-table__body tr:hover>td{
	background-color: #9FB6CD;
}
</style>
