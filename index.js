
var cursorDiv = document.querySelector("#cursor")
var enterCursor = document.querySelector("body")

enterCursor.addEventListener("mousemove",function(dest){
    gsap.to("#cursor",{
        x:dest.x-35,
        y:dest.y-35,
        ease:"back.out"
    })
})

gsap.registerPlugin(ScrollTrigger);
gsap.to("#page3 h1",{
    x : "-150vw",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0%",
        end :"top -100%",
        scrub:1,
        pin:true,
    }
})


gsap.fromTo("#scrollVerticallyDown", 
    { y: '-350vh' }, 
    { 
      y: '50vh', 
      ease: "none",
      scrollTrigger: {
        trigger: '.scrollImageVertically',
        start: "top bottom", 
        end: "bottom top", 
        scrub: 1
      } 
    }
);

gsap.fromTo("#scrollVerticallyUp", 
    { y: '230vh' }, 
    { 
      y: '-200vh', 
      ease: "none",
      scrollTrigger: {
        trigger: '.scrollImageVertically',
        start: "top bottom", 
        end: "bottom top", 
        scrub: 1
      } 
    }
);