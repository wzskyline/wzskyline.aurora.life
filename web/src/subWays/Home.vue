<template>
  <div class="">
    深圳地铁 
    <HeadView :data="data" />
    <svg id="svg"></svg> 
    <canvas id="canvas" width="0" height="0" style="border:1px solid #000000;"></canvas>
  </div>  
</template>

<script> 
import data from './data';
import vm from '../main';
import HeadView from './Head';
var draw = "";
var map={};
var arr =[];
var arg = window.location.search.substr(1).match(new RegExp("(^|&)" + 'line' + "=([^&]*)(&|$)")); 
if(arg){
 arg=arg[2].split(',')
}
export default {
  name: 'Home',
  components:{ HeadView
  },
  data(){
        return{
            data:data,
            active: 0
        }
    },
    mounted(){
      var c=document.getElementById("canvas");
      var ctx=c.getContext("2d");
	 // document.getElementById('svg').innerHTML = ''
      draw = SVG("svg").size("100%", "100%");  
	  
       this.makeMap()
	   vm.$on('lines',arr=>{ 
	        console.log(arr)
			this.makeMap(arr.join(','))
	   })
     },
    updated(){
      //this.drawLine()
         console.log(data)
         
    },
    methods: { 
	     makeMap(str){
		 document.querySelector('svg').innerHTML = ''; 
		 for(var i =0;i<data.subways.l.length;i++){
		        
		      if(arg){ 
				  if(arg.indexOf(i+1+'')>0){
					  this.drawLine(data.subways.l[i])
				   }
			  }else{
			     
			      this.drawLine(data.subways.l[i])
			  }
		   }
		  
		  
		  for(var i =0;i<arr.length;i++){
			 draw.text(arr[i].lb).move(arr[i].x+10,arr[i].y+10).font({color:arr[i].color, family: 'Helvetica', size: 24});
		  }
		  this.setting()
		 },
         setting(){
            window.panZoom = svgPanZoom('#svg', { zoomEnabled: true, controlIconsEnabled: false, fit: 1, center: 1, customEventsHandler: eventsHandler });
            var transform = 'matrix(1.0748877355242166,0,0,1.0748877355242166,341.1067291725201,314.55694537544827)'
            
            
			setTimeout(()=>{
				var svg = document.getElementById('svg').firstElementChild.nextElementSibling;
				console.log(svg)
				svg.setAttribute('transform',transform); 
				svg.style.transform= transform; 
			},300); 
         },
         drawLine(data){
            var color = data.l_xmlattr.lc.replace('0x','#')
            draw.text(data.l_xmlattr.lb).move(data.l_xmlattr.lbx,data.l_xmlattr.lby).font({color, family: 'Helvetica', size: 48});
            var l = data.p;
            var cur,next;
            for(var i =0;i<l.length-1;i++){
                cur = l[i].p_xmlattr;next = l[i+1].p_xmlattr;
                var{lb,x,y,lx,ly} = cur;
                draw.line(x, y, next.x, next.y).stroke({ width: 1, linecap: "round", color }); // 线条样式
                if(lb && !map[lb]){
                    map[lb] = lb;
					//arr.push({lb,x,y,color })
                    draw.text(lb).move(x+10,y+10).font({color, family: 'Helvetica', size: 24}).on('click',()=>{ this.showDetail(lb);}) 
                    draw.circle(10).move(x-5,y-5).fill(color).on('click',()=>{ this.showDetail(lb);}) 
                }
            } 
            if(lb && !map[next.lb]){
                    map[lb] = next.lb;
					//arr.push({lb,x,y,color })
                    draw.text(next.lb).move(next.x+10,next.y+10).font({color, family: 'Helvetica', size: 24}) .on('click',()=>{ this.showDetail(next.lb);})
                    draw.circle(10).move(next.x-5,next.y-5).fill(color).on('click',()=>{ this.showDetail(next.lb);}) 
            }

         },
         showDetail(lb){
              console.log(lb)
         },
         toggle (panel) {
            this.panel = panel === this.panel ? '' : panel;
        },
    }
}
 

/*

绘制点排除重绘
数据源svg给缩放svg填充内容
原声节点绑定事件读取text内容区分当前点击节点

*/ 
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
