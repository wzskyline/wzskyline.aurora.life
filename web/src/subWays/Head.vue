<template>
  <div class=""> 
<el-row :gutter="40" style="padding:4px 0"> 
    <el-col :span="4" v-for="item in row1" :key="item.l_xmlattr.lb"> 
	    <el-tag :style="{ background:item.l_xmlattr.lc.replace('0x','#'),
			 color: map[item.l_xmlattr.uid]?'#fff':''
		}"
       @click="change(item.l_xmlattr.uid)"     
	 >{{ item.l_xmlattr.lb.split('(')[0] }}</el-tag>
	</el-col>
</el-row>

  <el-row :gutter="40" style="padding:4px 0">
	
    <el-col :span="4" v-for="item in row2" :key="item.l_xmlattr.lb"> 
	    <el-tag :style="{ background:item.l_xmlattr.lc.replace('0x','#'),
		 color: map[item.l_xmlattr.uid]?'#fff':''
		}"
		
      @click="change(item.l_xmlattr.uid)"     
	  >{{ item.l_xmlattr.lb.split('(')[0] }}</el-tag>
	</el-col>
</el-row>

 <el-row :gutter="40" style="padding:4px 0">
	
    <el-col :span="4" v-for="item in row3" :key="item.l_xmlattr.lb"> 
	    <el-tag :style="{ background:item.l_xmlattr.lc.replace('0x','#'),
		 color: map[item.l_xmlattr.uid]?'#fff':''
		}"
		
      @click="change(item.l_xmlattr.uid)"     
	  >{{ item.l_xmlattr.lb.split('(')[0] }}</el-tag>
	</el-col>
</el-row>

   
  </div>  
</template>

<script> 
import vm from '../main';
 
export default {
  name: 'head',
  props: ['data'],
  data(){
        return{ 
		    map:{},
			row1:[],
			row2:[],
			row3:[],
            active: 0
        }
    },
    mounted(){
        console.log(this.data.subways.l)
		this.row1 = this.data.subways.l.slice(0,3);
		this.row2 = this.data.subways.l.slice(3,7);
		this.row3 = this.data.subways.l.slice(7,12);
     },
    updated(){
     
    },
    methods: { 
          
         change (uid) {
		    this.map[uid]   = this.map[uid]? false:true;
			var tmp = {...this.map}
			this.map = tmp; 
			var arr = [];
			for(var k in this.map){
			  if(this.map[k]) arr.push(k)
			}
			vm.$emit('lines',arr)
        },
    }
}
 

 
</script>
 
<style scoped>
 svg{
     width: 100vw;
     height: 100vh;
 }
 text{
     font-size: 12px;
 }
</style>
