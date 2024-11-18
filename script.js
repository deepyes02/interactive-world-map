
gsap.registerPlugin(ScrollTrigger);
const panels = gsap.utils.toArray('.panel')

const tl = gsap.timeline(
	{
		scrollTrigger: {
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
		xPercent: 100,
	}, {
		xPercent: 0,
		ease: "none",
		onStart : function () {
			gsap.to(panel, {yPercent: 0})
		},
		onUpdate: function () {
			panelAnimationFunction(panel, parseFloat(this.progress().toFixed(2)))
		},
	});
	tl.add(tween)
})

// panel - HTML ELEMENT
function panelAnimationFunction(panel, progress) {
	if (progress > 0) {
		console.log(progress)
		if (progress <= 0.15) {
			gsap.to(panel, { opacity: progress})
		} else if (progress >= 0.15 && progress <= 0.95) {
			console.log('stage-2')
			gsap.to(panel, { opacity: 1, yPercent: 0 })
		} else if (progress >= 0.95) {
			gsap.to(panel, {
				yPercent: -100,
				duration: 2,
				opacity: 0
			})
		}
	}
}
