(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-674cb34e"],{4804:function(t,e,n){"use strict";n("71b1")},"71b1":function(t,e,n){},a970:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home"},[n("mu-carousel",{staticStyle:{height:"200px"},attrs:{transition:"slide","hide-controls":""}},t._l(t.imgArr,(function(t,e){return n("mu-carousel-item",{key:e,staticStyle:{height:"200px"}},[n("img",{attrs:{src:t}})])})),1),n("mu-flex",{staticClass:"flex-demo",attrs:{"justify-content":"center"}},[n("mu-button",{staticClass:"my-btn",attrs:{slot:"actions",color:"info"},on:{click:function(e){return t.changePage("Page1")}},slot:"actions"},[t._v("材料管理")]),n("mu-button",{staticClass:"my-btn",attrs:{slot:"actions",color:"secondary"},on:{click:function(e){return t.changePage("Page2")}},slot:"actions"},[t._v("工具管理")])],1),n("mu-flex",{staticClass:"flex-demo",attrs:{"justify-content":"center"}},[n("mu-button",{staticClass:"my-btn",attrs:{slot:"actions",color:"success"},on:{click:function(e){return t.changePage("Page3")}},slot:"actions"},[t._v("备料进度")]),n("mu-button",{staticClass:"my-btn",attrs:{slot:"actions",color:"info"},on:{click:function(e){return t.changePage("Page4")}},slot:"actions"},[t._v("施工进度")])],1),n("mu-flex",{staticClass:"flex-demo",attrs:{"justify-content":"center"}},[n("mu-button",{staticClass:"my-btn",attrs:{slot:"actions",color:"warning"},on:{click:function(e){return t.changePage("Page5")}},slot:"actions"},[t._v("工作日报")])],1),n("mu-container",[n("mu-expansion-panel",{attrs:{expand:""!=t.panel},on:{change:function(e){return t.toggle("panel3")}}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("页底面板")]),n("mu-container",[n("mu-expansion-panel",{attrs:{expand:"panel1"===t.panel},on:{change:function(e){return t.toggle("panel1")}}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("鼓励的话")]),t._v("\n     成功永远属于马上行动的人   勤于反省，才有不断进步的可能\n  ")]),n("mu-expansion-panel",{attrs:{expand:"panel2"===t.panel},on:{change:function(e){return t.toggle("panel2")}}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("人生感悟")]),t._v("\n     水往低处流，人往高处走   人生的大海，没有不受伤的船 \n  ")]),n("mu-expansion-panel",{attrs:{expand:"panel3"===t.panel},on:{change:function(e){return t.toggle("panel3")}}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("技术支持")]),n("mu-chip",{staticClass:"demo-chip",attrs:{color:"green"}},[n("a",{attrs:{href:"https://docs.qq.com/doc/DT0VtRGpmV2tEZVpy",target:"_blank"}},[t._v("获取技术支持,请跳转腾讯文档")])]),n("mu-chip",{staticClass:"demo-chip",attrs:{color:"tomato"},on:{click:t.toDelete}},[n("u",[t._v(" 管理表格")])])],1)],1)],1)],1),n("audio",{staticStyle:{display:"none"},attrs:{src:"13380.mp3",play:t.audioPlay}})],1)},i=[],l={Page1:{table:"ta",title:"材料管理",info:"输入编号或名称可查询",col:[{title:"商品编号",name:"number"},{title:"商品名称",name:"name"},{title:"型号",name:"mark"},{title:"数量",name:"unit"},{title:"单位",name:"store"},{title:"存放位置",name:"position"},{title:"类别",name:"type"},{title:"备注",name:"desc"},{title:"操作",name:"id"}]},Page2:{table:"tb",title:"工具管理",info:"输入名称可查询",col:[{title:"日期",name:"date"},{title:"名称",name:"name"},{title:"规格",name:"guige"},{title:"数量",name:"number"},{title:"单位",name:"unit"},{title:"领用人",name:"person"},{title:"备注",name:"desc"},{title:"操作",name:"id"}]},Page3:{table:"tc",title:"备料进度",info:"输入名称可查询",col:[{title:"日期",name:"date"},{title:"名称",name:"name"},{title:"规格",name:"guige"},{title:"楼层",name:"type"},{title:"需求量",name:"need"},{title:"已备量",name:"finish"},{title:"单位",name:"unit"},{title:"类别",name:"usefor"},{title:"备注",name:"desc"},{title:"操作",name:"id"}]},Page4:{table:"td",title:"施工进度",info:"输入名称可查询",col:[{title:"日期",name:"date"},{title:"名称",name:"name"},{title:"规格",name:"guige"},{title:"需求量",name:"need"},{title:"完成量",name:"finish"},{title:"单位",name:"unit"},{title:"地点",name:"position"},{title:"备注",name:"desc"},{title:"操作",name:"id"}]},Page5:{table:"te",title:"工作日报",info:"输入名称可查询",col:[{title:"日期",name:"date"},{title:"姓名",name:"name"},{title:"工艺",name:"gongyi"},{title:"数量",name:"number"},{title:"工时",name:"time"},{title:"地点",name:"position"},{title:"备注",name:"desc"},{title:"操作",name:"id"}]}},o={name:"Home",data:function(){return{audioPlay:!1,panel:"",imgArr:["./1.72x72.png","./1.jpg","./2.jpg"],active:0}},methods:{changeActive:function(t){this.active=t,console.log(this.active)},changePage:function(t){var e=this;this.audioPlay=!0;var n=new Audio;n.src="13380.mp3",n.play(),this.update(l[t]),setTimeout((function(){e.push("Page")}),500)},toDelete:function(){this.push("Delete")},toggle:function(t){this.panel=t===this.panel?"":t}}},s=o,c=(n("4804"),n("2877")),r=Object(c["a"])(s,a,i,!1,null,"3bdf9630",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-674cb34e.39d2918e.js.map