<template>
  <div class="Home">
    subway
    <svg id="svg"></svg> 
    <canvas id="canvas" width="500" height="500" style="border:1px solid #000000;"></canvas>
  </div>  
</template>

<script> 
var draw = "";
export default {
  name: 'Home',
  data(){
        return{
          
            active: 0
        }
    },
    mounted(){
var c=document.getElementById("canvas");
var ctx=c.getContext("2d");

ctx.fillRect(0,0,100,10);

[10,10, 100,10, 100,100, 10,100, 10,10].map((e,i,a)=>{ i%2 == 0 ? ctx.lineTo(e,a[i+1]):'';  })
ctx.fillStyle='rgba(125,1,1,0.7)';
ctx.fill();
ctx.font="30px Arial"; 
ctx.fillText("实心文字",100,100);
ctx.strokeText("空心文字",100,50);
ctx.stroke();
ctx.beginPath(); ctx.arc(95,50,40,0,2*Math.PI);ctx.stroke();
     draw = SVG("svg").size("100%", "100%");
     // 画线
let line = draw.line(10, 10, 10, 150).stroke({ width: 5, linecap: "round", color: "blue" }); // 线条样式

// 画矩形
let rect = draw
.rect(100, 100) // 宽高
.radius(10) // 圆角
.fill("red") //填充
.move(20, 20); // 位移

// 画圆
let circle = draw
.circle(100) // 圆直径
.fill("green") 
.move(130, 20);

// 画椭圆
let ellipse =  draw
.ellipse(150, 100) // 宽直径，高直径
.move(240, 20)
.fill("pink");

// 折线
let polyline = draw
.polyline('450, 10, 400, 100, 500, 100') // 点的位置，也可以使用数组替换[[450,10],[400,100],[500,100]]
.fill("#f06")
.stroke({ width: 1, color: "black" });

// 多边形
let polygon = draw.polygon([[550,10],[600,10],[630,50],[600,100],[550,100],[520,50]]) // 点的位置
.fill("#71f5ea")
.stroke({ width: 1 });
    },
    methods: {
         
         toggle (panel) {
            this.panel = panel === this.panel ? '' : panel;
        },
    }
}

/* 重要 js */


var eventsHandler = {
    haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
    init: function(options) {
        var instance = options.instance,
            initialScale = 1,
            pannedX = 0,
            pannedY = 0
        this.hammer = Hammer(options.svgElement, {
            inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
        })
        this.hammer.get('pinch').set({
            enable: true
        })
        this.hammer.on('doubletap', function(ev) {
            instance.zoomIn()
        })
        this.hammer.on('panstart panmove', function(ev) {
            if (ev.type === 'panstart') {
                pannedX = 0
                pannedY = 0
            }
            instance.panBy({
                x: ev.deltaX - pannedX,
                y: ev.deltaY - pannedY
            })
            pannedX = ev.deltaX
            pannedY = ev.deltaY
        })
        this.hammer.on('pinchstart pinchmove', function(ev) {
            if (ev.type === 'pinchstart') {
                initialScale = instance.getZoom()
                instance.zoomAtPoint(initialScale * ev.scale, {
                    x: ev.center.x,
                    y: ev.center.y
                })
            }
            instance.zoomAtPoint(initialScale * ev.scale, {
                x: ev.center.x,
                y: ev.center.y
            })
        })
        options.svgElement.addEventListener('touchmove', function(e) {
            e.preventDefault();
        });
    },
    destroy: function() {
        this.hammer.destroy()
    }
}
 window.panZoom = svgPanZoom('#svg', {
        zoomEnabled: true,
        controlIconsEnabled: false,
        fit: 1,
        center: 1,
        customEventsHandler: eventsHandler
    });
</script>
 
<style scoped>
 
</style>
