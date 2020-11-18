<template>
<div class="banner">
 <mu-carousel  style="height:200px" transition="slide" hide-controls>
    <mu-carousel-item style="height:200px;" v-for="(item,index) in imgArr" :key="index">
            <img :src="item">
        </mu-carousel-item>
    </mu-carousel>
</div>
</template>
<script>
export default {
    data(){
        return{
            imgArr:[
             "http://temp.im/500x220/aa33ff/fff",
             "http://temp.im/500x220/ff44ff/fff",
             "http://temp.im/500x220/44bbff/fff"
            ],
            active: 0
        }
    },
    methods: {
        changeActive (index) {
            this.active = index;
            console.log(this.active);
        }
    }
}
</script>
<style lang="less">
.banner{
    height:200px;
    width:100%;
    margin-top:5px;
    padding:10px;
    img{
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }
}
</style>