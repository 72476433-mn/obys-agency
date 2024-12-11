
function loadingAnimation(){
  let tl = gsap.timeline();

gsap.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from(".line1-part1", {
  opacity: 0,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.7,
  onStart: function () {
    var h5Timer = document.querySelector(".line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5Timer.innerHTML = grow++;
      } else {
        h5Timer.innerHTML = grow;
      }
    }, 30);
  },
});


tl.to("#loader", {
  y: -1200,
  delay: 2.9,
  opacity: 0,
  duration: 2
});

tl.to(".line h2",{
  opacity:0,
  Animation:"anime"
})

gsap.to("#loader",{

})

tl.from(".hero h1",{
  y:120,
  stagger:0.2,
})
}
loadingAnimation();


function cursorAnimation(){
  document.addEventListener("mousemove",function(dets) {
    gsap.to("#crsr",{
      x:dets.x,
      y:dets.y
    })
  });

  Shery.makeMagnet("#nav-part2 h4",{});
}
cursorAnimation();

