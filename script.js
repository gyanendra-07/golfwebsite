var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    // console.log(dets.x,dets.y);
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    // console.log(dets.x,dets.y);
    blur.style.left = dets.x-200+"px";
    blur.style.top = dets.y-200+"px";
})

gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height: "105px",
  //rotateX: -90,
  //rotateY: 90,
    scrollTrigger: {
        trigger:"#nav",
        scroller: "body",
       // markers:true,
        start: "top -10%",
        end : "top -11%",
        scrub: .5
    }

})
    gsap.to("#main",{
        backgroundColor: "#000",
        scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
    })