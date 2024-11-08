gsap.registerPlugin(ScrollTrigger);

var cursorDiv = document.querySelector("#cursor")
var enterCursor = document.querySelector("body")

enterCursor.addEventListener("mousemove",function(dest){
    gsap.to("#cursor",{
        x:dest.x-35,
        y:dest.y-35,
        ease:"back.out"
    })
})


//Navbar show hide
var menuIcon = document.querySelector('#menuIcon');
var menuDiv = document.querySelector('#Navbar')
var homePage = document.querySelector('#LandingPage')

//Navbar timeline
var tl = gsap.timeline();
tl.from(".nav",{
  x:150,
  duration:0.7,
  stagger:0.28,
  opacity:0
})

menuIcon.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // You can also use 'auto' for an instant scroll
  });

  homePage.classList.toggle('d-none')
  menuDiv.classList.toggle('d-none');
  if (!menuDiv.classList.contains('d-none')) {
    tl.restart(); // Restart animation each time menu is shown
  }
});


gsap.to("#LandingPage h1",{
    x : "-150vw",
    scrollTrigger:{
        trigger:"#LandingPage",
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