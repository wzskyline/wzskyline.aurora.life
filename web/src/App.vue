<template>
  <div id="app"> 
    <div class="content">
      <router-view/>
    </div>  
   <mu-bottom-nav  class="nav" :style="{display:nav?'none':''}">
      <mu-bottom-nav-item title="首页" icon="home" to='/Home'></mu-bottom-nav-item>
      <mu-bottom-nav-item title="广场" icon="explore"  to='/Ground'></mu-bottom-nav-item> 
      <mu-bottom-nav-item title="我的" icon="account_circle"  to='/My'></mu-bottom-nav-item> 
  </mu-bottom-nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      shift: 'home',
      headbar:"",
      nav:true,
      bar:{
        "banner":"首页",
        "music":"音乐",
        "picture":"图片",
        "movie":"视频",
        "person":"个人中心"
      }
    }
  },
  components:{
     
  },
  updated(){
  console.log(1)
       this.nav = 'Home,My,Ground'.includes(this.$router.history.current.name)
  },
  mounted(){
      console.log(1)
       this.nav = 'Home,My,Ground'.includes(this.$router.history.current.name)
  },
  watch:{
    "$route.path":function(newr,oldr){
      let obj=this.bar;
      for(let item in obj){
        if(newr.indexOf(item)>-1){
          this.headbar=obj[item];
        }
      }
    }
  }
}
</script>
<style lang="less">
body,html{
width:100%;
height:100%;
margin: 0;
padding: 0;
}
.content{
  width: 100vw;
  height: 90vh;
}
.nav{
  height: 10vh!important;
  width: 100vw!important;
}
</style>
