<template>
  <div class="Home">
     <mu-carousel  style="height:200px" transition="slide" hide-controls>
        <mu-carousel-item style="height:200px;" v-for="(item,index) in imgArr" :key="index">
            <img :src="item">
        </mu-carousel-item>
    </mu-carousel>
 
 
  <mu-flex class="flex-demo" justify-content="center"  >
     <mu-button slot="actions"  color="info" @click="changePage('Page1')" class="my-btn" >材料管理</mu-button>
     <mu-button slot="actions"  color="secondary" @click="changePage('Page2')"  class="my-btn" >工具管理</mu-button>
 </mu-flex>

  <mu-flex class="flex-demo" justify-content="center"  >
     <mu-button slot="actions"  color="success" @click="changePage('Page3')"  class="my-btn">备料进度</mu-button>
     <mu-button slot="actions"  color="info" @click="changePage('Page4')"  class="my-btn" >施工进度</mu-button>
 </mu-flex>

 <mu-flex class="flex-demo" justify-content="center" >
     <mu-button slot="actions"  color="warning" @click="changePage('Page5')" class="my-btn" >工作日报</mu-button>
 </mu-flex>
 <mu-container>
  
  <mu-expansion-panel :expand="panel != ''" @change="toggle('panel3')">
    <div slot="header">页底面板</div>
    <mu-container>

  <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
    <div slot="header">鼓励的话</div>
     成功永远属于马上行动的人   勤于反省，才有不断进步的可能
  </mu-expansion-panel>
  <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
    <div slot="header">人生感悟</div>
     水往低处流，人往高处走   人生的大海，没有不受伤的船 
  </mu-expansion-panel>
  <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
    <div slot="header">技术支持</div>
     <mu-chip class="demo-chip" color="green">
      <a href="https://docs.qq.com/doc/DT0VtRGpmV2tEZVpy" target="_blank" >获取技术支持,请跳转腾讯文档</a>
    </mu-chip>
  </mu-expansion-panel>
</mu-container>
  </mu-expansion-panel>
</mu-container>
   
  </div>
</template>

<script>
var map={
  Page1:{
    table:'ta', title:'材料管理', info:'输入编号或名称可查询',
    col:[
          { title: '商品编号',  name: 'number' },
          { title: '商品名称', name: 'name',  },
          { title: '型号', name: 'mark',  },
          { title: '库存单位', name: 'unit',  },
          { title: '仓位', name: 'store',  }, 
          { title: '存放位置', name: 'position',  },
          { title: '类别', name: 'type',  },
          { title: '备注', name: 'desc',  },
          { title: '操作',  name: 'id' }
    ]
  },
  Page2:{
    table:'tb', title:'工具管理', info:'输入名称可查询',
    col:[
          { title: '日期',  name: 'date' },
          { title: '名称', name: 'name',  },
          { title: '规格', name: 'guige',  },
          { title: '数量', name: 'number',  },
          { title: '单位', name: 'unit',  }, 
          { title: '领用人', name: 'person',  }, 
          { title: '备注', name: 'desc',  },
          { title: '操作',  name: 'id' }
    ]
  },
  Page3:{
    table:'tc', title:'备料进度', info:'输入名称可查询',
    col:[
          { title: '日期',  name: 'date' },
          { title: '名称', name: 'name',  },
          { title: '规格', name: 'guige',  },
          { title: '型号', name: 'type',  },
          { title: '需求量', name: 'need',  },
          { title: '已备量', name: 'finish',  },
          { title: '单位', name: 'unit',  }, 
          { title: '用途', name: 'usefor',  },
          { title: '备注', name: 'desc',  },
          { title: '操作',  name: 'id' }
    ]
  },
  Page4:{
    table:'td', title:'施工进度', info:'输入名称可查询',
    col:[
          { title: '日期',  name: 'date' },
          { title: '规格', name: 'guige',  },
          { title: '需求量', name: 'need',  },
          { title: '完成量', name: 'finish',  },
          { title: '单位', name: 'unit',  }, 
          { title: '地点', name: 'position',  },
          { title: '备注', name: 'desc',  },
          { title: '操作',  name: 'id' }
    ]
  },
  Page5:{
    table:'te', title:'工作日报', info:'输入名称可查询',
    col:[
          { title: '日期',  name: 'date' },
          { title: '姓名',  name: 'name' },
          { title: '工艺', name: 'gongyi',  },
          { title: '数量', name: 'number',  },
          { title: '工时', name: 'time',  },
          { title: '地点', name: 'position',  },
          { title: '备注', name: 'desc',  },
          { title: '操作',  name: 'id' }
    ]
  },
}

export default {
  name: 'Home',
  data(){
        return{
             panel: '',
            imgArr:[
             
              "./1.72x72.png",
              "./1.jpg",
             //"http://temp.im/500x220/ff44ff/fff",
             "./2.jpg",
            ],
            active: 0
        }
    },
    methods: {
        changeActive (index) {
            this.active = index;
            console.log(this.active);
        },
        changePage(name){
             this.update(map[name])
             setTimeout(()=>{
               this.push('Page');
             },200)
        },
         toggle (panel) {
            this.panel = panel === this.panel ? '' : panel;
        },
    }
}
</script>
 
<style scoped>
 img{
   height: 200px;
   }
 .my-btn{
   margin:10px;width:30vh;height:15vh;font-size:24px
 }
</style>
