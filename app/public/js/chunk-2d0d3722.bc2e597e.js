(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3722"],{"5d96":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Page4"},[o("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"primary"}},[o("mu-button",{attrs:{slot:"left",icon:""},on:{click:t.iconBack},slot:"left"},[o("mu-icon",{attrs:{value:"arrow_back"}})],1),t._v("\n      施工进度\n      "),o("mu-button",{attrs:{slot:"right",flat:""},on:{click:t.iconAdd},slot:"right"},[o("mu-icon",{attrs:{value:"add",size:"30"}})],1)],1),o("div",{staticClass:"mu-text-field mu-input-content",staticStyle:{margin:"10px 5px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"mu-text-field-input my-search-input",attrs:{placeholder:"输入地点可查询",tabindex:"0"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),o("mu-button",{staticStyle:{margin:"0 10px 0 0"},attrs:{color:"red"},on:{click:t.searchData}},[t._v(" 查询 "),o("mu-icon",{attrs:{right:"",value:"search"}})],1)],1),o("mu-dialog",{attrs:{title:"提示",width:"360",open:t.openSimple},on:{"update:open":function(e){t.openSimple=e}}},[t._v("\n     确定删除此记录？\n    "),o("mu-button",{attrs:{slot:"actions",flat:"",color:"info"},on:{click:t.closeSimpleDialog},slot:"actions"},[t._v("取消")]),o("mu-button",{attrs:{slot:"actions",color:"primary"},on:{click:t.buttonDelete},slot:"actions"},[t._v("确定")])],1),o("mu-drawer",{attrs:{open:t.open,docked:t.docked,right:"right"===t.position},on:{"update:open":function(e){t.open=e}}},[o("mu-form",{ref:"form",staticClass:"mu-demo-form",attrs:{model:t.row}},[o("mu-form-item",{attrs:{label:"日期"}},[o("mu-date-input",{model:{value:t.row.date,callback:function(e){t.$set(t.row,"date",e)},expression:"row.date"}})],1),o("mu-form-item",{attrs:{label:"规格"}},[o("mu-text-field",{model:{value:t.row.guige,callback:function(e){t.$set(t.row,"guige",e)},expression:"row.guige"}})],1),o("mu-form-item",{attrs:{label:"需求量"}},[o("mu-text-field",{model:{value:t.row.need,callback:function(e){t.$set(t.row,"need",e)},expression:"row.need"}})],1),o("mu-form-item",{attrs:{label:"完成量"}},[o("mu-text-field",{model:{value:t.row.finish,callback:function(e){t.$set(t.row,"finish",e)},expression:"row.finish"}})],1),o("mu-form-item",{attrs:{label:"单位"}},[o("mu-text-field",{model:{value:t.row.unit,callback:function(e){t.$set(t.row,"unit",e)},expression:"row.unit"}})],1),o("mu-form-item",{attrs:{label:"地点"}},[o("mu-text-field",{model:{value:t.row.position,callback:function(e){t.$set(t.row,"position",e)},expression:"row.position"}})],1),o("mu-text-field",{attrs:{"multi-line":"",rows:4,icon:"comment",placeholder:"备注"},model:{value:t.row.desc,callback:function(e){t.$set(t.row,"desc",e)},expression:"row.desc"}}),o("br"),o("mu-form-item",[o("mu-button",{on:{click:t.clear}},[t._v("重置")]),o("mu-button",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1)],1),o("mu-data-table",{attrs:{height:"300",columns:t.columns,sort:t.sort,data:t.list},on:{"update:sort":function(e){t.sort=e},"sort-change":t.handleSortChange},scopedSlots:t._u([{key:"default",fn:function(e){return[o("td",[o("a",{staticClass:"a-delete",on:{click:function(o){return t.deleteLine(e.row)}}},[t._v("删除")]),o("a",{on:{click:function(o){return t.updateLine(e.row)}}},[t._v("修改")])]),o("td",[t._v(t._s(e.row.date.substr(0,10)))]),o("td",[t._v(t._s(e.row.guige))]),o("td",[t._v(t._s(e.row.need))]),o("td",[t._v(t._s(e.row.finish))]),o("td",[t._v(t._s(e.row.unit))]),o("td",[t._v(t._s(e.row.position))]),o("td",[t._v(t._s(e.row.desc))])]}}])}),o("mu-flex",{staticStyle:{margin:"32px 0"},attrs:{"justify-content":"center"}},[o("mu-pagination",{attrs:{raised:"",total:t.total,current:t.current},on:{"update:current":function(e){t.current=e},change:t.change}})],1)],1)},i=[],a=(o("55dd"),o("7f7f"),o("e814")),s=o.n(a),r=(o("386d"),o("34ce")),c="td",l=13,u={name:"Home",data:function(){return{docked:!1,open:!1,position:"left",openSimple:!1,value11:"",value12:"",usernameRules:[{validate:function(t){return!!t},message:"必须填写用户名"},{validate:function(t){return t.length>=3},message:"用户名长度大于3"}],passwordRules:[{validate:function(t){return!!t},message:"必须填写密码"},{validate:function(t){return t.length>=3&&t.length<=10},message:"密码长度大于3小于10"}],argeeRules:[{validate:function(t){return!!t},message:"必须同意用户协议"}],row:{date:"2020-11-10T16:00:00.000Z",desc:null,finish:"m",guige:"100m",name:"一平面",need:"50m",position:"-",unit:"广州",usefor:"-"},sort:{name:"",order:"asc"},columns:[{title:"操作",name:"id"},{title:"日期",name:"date"},{title:"规格",name:"guige"},{title:"需求量",name:"need"},{title:"完成量",name:"finish"},{title:"单位",name:"unit"},{title:"地点",name:"position"},{title:"备注",name:"desc"}],list:[],current:1,total:100,search:""}},created:function(){console.log("created()")},mounted:function(){this.getList({table:c,search:"",page:1,pageSize:l})},methods:{searchData:function(){this.list=[],this.getList({table:c,search:this.search,page:1,pageSize:l})},getList:function(t){var e=this;Object(r["c"])(t).then(function(t){e.list=t.data,e.total=t.count,e.current=s()(t.page)})},change:function(t){console.log(t),this.list=[],this.getList({table:c,search:this.search,page:t,pageSize:l})},deleteLine:function(t){this.openSimple=!0,this.row=t,console.log(t)},updateLine:function(t){this.row=t,this.open=!0;var e=new Date(this.row.date);this.row.date="".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()-1)},handleSortChange:function(t){var e=t.name,o=t.order;this.list=this.list.sort(function(t,n){return"asc"===o?t[e]-n[e]:n[e]-t[e]})},openSimpleDialog:function(){this.openSimple=!0},closeSimpleDialog:function(){this.openSimple=!1},buttonDelete:function(){var t=this,e=this;Object(r["b"])(c,this.row.id).then(function(o){e.openSimple=!1,e.flush(),o?t.$toast.success("删除成功"):t.$toast.error("删除失败")})},iconAdd:function(){this.open=!0,this.row.id="";var t=new Date;this.row.date="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()+1)},iconBack:function(){this.$router.push({name:"/",params:{}})},flush:function(){this.open=!1,this.getList({table:c,search:"",page:this.current,pageSize:l})},submit:function(){var t=this,e=this;console.log(this.row.date);var o=new Date(this.row.date);this.row.date="".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate()+1);try{this.row.id?Object(r["d"])(c,this.row).then(function(o){e.flush(),o?t.$toast.success("更新成功"):t.$toast.error("更新失败")}):Object(r["a"])(c,this.row).then(function(o){e.flush(),o?t.$toast.success("添加成功"):t.$toast.error("添加失败")})}catch(n){this.$toast.error("操作失败,请检查网络")}},clear:function(){this.$refs.form.clear(),this.row={date:"",desc:null,finish:"",guige:"",name:"",need:"",position:"",unit:"",usefor:""}}}},d=u,m=o("2877"),h=Object(m["a"])(d,n,i,!1,null,"548adeea",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0d3722.bc2e597e.js.map