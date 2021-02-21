<template>
 <div class="Ground" ref="Ground">
       
      <mu-card-title @click="openUserCenter" :title="title" :sub-title="subTitle"></mu-card-title>
      <mu-row>
        <mu-col span="8">{{ last.code }}期开奖结果</mu-col>
        <mu-col span="4">下一期倒计时:</mu-col>
      </mu-row>
      <mu-row>
        <mu-col span="8">
                <mu-avatar class="boll">{{ last.q1 }} </mu-avatar>
                <mu-avatar class="boll">{{ last.q2 }} </mu-avatar>
                <mu-avatar class="boll">{{ last.q3 }}</mu-avatar>
                <mu-avatar class="boll">{{ last.q4 }}</mu-avatar>
                <mu-avatar class="boll">{{ last.q5 }} </mu-avatar>
        </mu-col>
        <mu-col span="4">
          <span>{{countDown(endDate)}}</span>
        </mu-col>
      </mu-row>
      
     <mu-row>
          <mu-button round color="success" @click="openBotttomSheet">11选五</mu-button>
      </mu-row>
 
  <mu-bottom-sheet :open.sync="open">
     
      <mu-row style="margin:20px 0;padding:10px">
		<mu-list-item-action> <mu-list-item-title style="margin:0px 20px;padding:5px">11选五</mu-list-item-title> </mu-list-item-action>
        <mu-list-item-action> <mu-button small  fab color="success" @click="ok">OK</mu-button></mu-list-item-action>
		<mu-list-item-action style="margin:0px 20px;padding:5px">  {{ message }}</mu-list-item-action>
      </mu-row>

      <mu-row>
         <mu-avatar class="cboll" :style="{background:e.choose?'red':''}"  v-for="(e,i) in list" :key="i" @click="channgeList(i)">
           {{ e.num }} 
         </mu-avatar>
      </mu-row>
	  <mu-row style="margin:20px 0;padding:10px">
      </mu-row>
	  
  </mu-bottom-sheet>
 


  </div>
</template>

<script>
import moment from 'moment'
import {getExcelJosn,updateExcel,deleteExcel,addOneExcel,gameUser,gameUserByFp} from '@/action/index';
const pageSize = 20;
const df = 20;
var list = new Array(10).fill(1).map((e,i)=>{
  return {choose:false,num:i+1}
})
export default { 
  data(){
        return{
		  user:{},
		  title  : 'wz',
		  subTitle  : 9999,
          num: 10,
          refreshing: false,
          loading: false,
          now: moment(),
          endDate: moment(),
           open: false,
           open5: false,
          last:{
            code: "201202-41", id: 111, q1: "08", q2: "11", q3: "05", q4: "10", q5: "04",
          },
          list:list,
		  message:'请开始选择',
        }
    },
    mounted() {
      this.endDate = moment().startOf('day') + this.now.get('hours') * 3600000  + ~~(this.now.get('minutes')/df + 1) * df  *60000
      setInterval(()=>{ this.now = moment();},1000)
    },
    computed: { 
	  countDown(){
	    return function(endDate) {	     
        if( 22 < this.now.get('hours') ||  this.now.get('hours')  < 9 ) {
          return "等 待 中 . . ."
        }
	      let du = moment(endDate).valueOf() - moment(this.now).valueOf()
	      if(du < 1000) {
          this.endDate = moment().startOf('day') + this.now.get('hours') * 3600000  + ~~(this.now.get('minutes')/df + 1) * df  *60000
          this.getList({table:'cp' ,search:'',page:1,pageSize:10})
	        return "已超时"
	      }else {
	        return `00:${ moment(du).format('mm:ss')}`
	      }
	    }
	  }
  },
    created(){
       this.getList({table:'cp' ,search:'',page:1,pageSize:10})
       gameUserByFp({ fp:new Fingerprint().get(),}).then(res=>{
	       this.user = res.gameUser[0];
		   this.title = `用户名:${res.gameUser[0].name}`
		   this.subTitle = `积分:${res.gameUser[0].id}`
       })	   
    },
    methods: {
	  openUserCenter(){  this.$router.push({name: 'MyAccount',params:{}});  },
      checkNuumber(arr,number){
          var cc=0; arr.map(e=>{ cc = cc+ (e.choose?1:0) });
		  this.message = `已选择了${cc+1}个球`
		  return cc==number;
      },
      switchList(list,i){
          var tmp=[...list];tmp[i].choose = !tmp[i].choose ; return tmp; 
      },
      channgeList(i){
        if(list[i].choose){
          return this.list = this.switchList(this.list,i);
        }
        if(this.checkNuumber(this.list,5)) return;
         
        this.switchList(this.list,i);
      },
      cancle(){
        this.list =[...list] 
      },
      ok(){
         if(!this.checkNuumber(this.list,5)) return this.$toast.success('还没有选满5个')
		 this.open = false;
		var submit = {
			name:this.user.name,
			fp:this.user.fp,
			date:this.formatDate(),
			money:'200',
			type:'t5',
			code:'2020-1-1', 
		 }
		 var tmp = this.list.filter((e)=>e.choose)
		 tmp.map((e,i)=>{ submit[`q${i+1}`]= e.num; })
		 addOneExcel('gamePlay',submit).then(res=>{ 
			if(res){
			  this.$toast.success('添加成功')
			}else{
			  this.$toast.error('添加失败');
			}
		  })
         
      },
       closeBottomSheet () {
      this.open = false;
    },
    openBotttomSheet () {
      this.open = true;
    },
      getList(arg){  
         getExcelJosn(arg).then(res=>{
           this.last = res.data[0]
         }) 
    },
     
     
    }
}
/*
https://blog.csdn.net/u014438244/article/details/89915073
http://106.12.144.8:7001/getExcelJosn?search=&page=1&pageSize=100&table=cp
 数据的查询 gameUser?fp=1&date=2020-1-1
 数据的查询 this.getList({table:'cp' ,search:'',page:1,pageSize:10})
 数据的查询 this.getList({table:'gamePlay' ,search:'fp',page:1,pageSize:20})
 下单addOneExcel('gamePlay',submit)
 更新用户 updateExcel('gameUser',{
  fp:'',
  name:'',
  desc:'',
 })
 submit = {
    name:'',
	fp:'',
	date:'2020-1-1',
	money:'上一期剩余的钱',
    type:'玩的类型t3 t5',
	code:'期号',
	q1:'',
	q2:'',
    q3:'',
	q4:'',
	q5:'',
 }
 addOneExcel('gamePlay',submit).then(res=>{ 
    res?this.$toast.success('添加成功'):this.$toast.error('添加失败');
  })
*/
</script>
 
<style scoped>
   

</style>
