
gsap.registerPlugin(ScrollTrigger);
const panels = gsap.utils.toArray('.panel')

const tl = gsap.timeline(
{
  scrollTrigger : {
    trigger: '#animation-container',
    start: "top 0%",
    end: "+=10000",
    scrub: 1,
    markers: true,
    pin: true,
  }
}
);
tl.fromTo('#bubble', {
scale: 0
}, {
  scale: 2,
})

panels.forEach(panel => {
 const tween = gsap.fromTo(panel, {
    xPercent : 100,
  }, {
    xPercent: -100,
    ease: "none",
    onUpdate: function () {
      console.log(this.progress().toFixed(2))
    }
  });
  tl.add(tween)
})
