(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9227"],{"323e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MyAccount"},[s("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"primary"}},[s("mu-button",{attrs:{slot:"left",icon:""},on:{click:t.iconBack},slot:"left"},[s("mu-icon",{attrs:{value:"arrow_back"}})],1),t._v(" \n    嗨!"+t._s(t.user.name)+"\n  ")],1),s("mu-form",{ref:"form",staticClass:"mu-demo-form",attrs:{model:t.user}},[s("mu-form-item",{attrs:{label:"编号"}},[s("mu-text-field",{attrs:{readonly:""},model:{value:t.user.fp,callback:function(e){t.$set(t.user,"fp",e)},expression:"user.fp"}})],1),s("mu-form-item",{attrs:{label:"昵称"}},[s("mu-text-field",{model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1)],1),s("center",[s("mu-button",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("保存")])],1)],1)},n=[],r=(s("7f7f"),s("34ce")),u={data:function(){return{user:{id:Date.now(),fp:Date.now(),name:Date.now()}}},mounted:function(){this.user.fp=this.$fp},created:function(){var t=this;Object(r["e"])({fp:this.$fp}).then((function(e){var s=e.gameUser[0];t.user.name=s.name,t.user.id=s.id}))},methods:{iconBack:function(){this.$router.push({name:"My",params:{}})},submit:function(t){var e=this;Object(r["g"])("gameUser",{id:this.user.id,fp:this.$fp,name:this.user.name,desc:""}).then((function(t){t?e.$toast.success("更新成功"):e.$toast.error("更新失败")}))}}},o=u,i=s("2877"),c=Object(i["a"])(o,a,n,!1,null,"09120208",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b9227.1455a4d2.js.map