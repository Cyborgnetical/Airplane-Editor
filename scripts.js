
/** 

*/
let canvas = document.getElementById("editor")
let ctx = canvas.getContext("2d")

let mouse = [0,0]
canvas.addEventListener("mousemove", function(event) {
  mouse[0] = event.clientX;
  mouse[1] = event.clientY;
});

function animate(){
  
}
let draw = {
  id:0,
  render:()=>{
    console.log("Animating")
    requestAnimationFrame(draw.render)
  },
  start:()=>{draw.id = requestAnimationFrame(draw.render)},
  stop:()=>{
    console.log("stopping")
    cancelAnimationFrame(draw.id)
  }
  
}
draw.start()