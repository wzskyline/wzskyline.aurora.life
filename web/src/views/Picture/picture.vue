<template>
    <div>
        <Drag>YOYOY</Drag>
    </div>
</template>
<script>
import Drag from "../../components/Drag.vue";
export default {
    name:"pic",
    data(){
        return{
            bg:{
                width:"100px",
                height:"100px",
                background:"red",
            }
        }
    },
    components:{
        Drag,
    }
}
</script>
<style lang="less">
    
</style>