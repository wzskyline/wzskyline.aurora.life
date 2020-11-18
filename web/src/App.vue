<template>
  <div id="app"> 
    <div class="content">
      <router-view/>
    </div>
    <mu-container style="width:100%;padding:0"> 
    </mu-container> 
  </div>
</template>
<script>
export default {
  data () {
    return {
      shift: 'home',
      headbar:"",
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
#app {
  font-family:"Roboto";
  height:100vh;
  width:100vw;
  position:relative;
  .container{
    position: fixed;
    bottom:0;
    left:0;
  }

}

</style>
