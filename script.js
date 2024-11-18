
gsap.registerPlugin(ScrollTrigger);
const panels = gsap.utils.toArray('.panel')

const tl = gsap.timeline(
	{
		scrollTrigger: {
			trigger: '#animation-container',
			start: "top 0%",
			end: "+=30000",
			scrub: 1,
			markers: true,
			pin: true,

		}
	}
);
tl.fromTo('#bubble', {
	scale: 0
}, {
	scale: 3,
})

tl.fromTo('#worldMap', {
	opacity: 0,
	scale: 5,
}
,{
	opacity: 0.05,
	scale: 1 
});

panels.forEach((panel, index) => {
	const tween = gsap.fromTo(panel, {
		opacity: 0,
		x: '100vw'
	}, {
		opacity: 1,
		x: 0,
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
			gsap.to(panel, { opacity: progress })
		} else if (progress >= 0.15 && progress <= 0.95) {
			console.log('stage-2')
			gsap.to(panel, { opacity: 1 })
		} else if (progress >= 0.95) {
			gsap.to(panel, {
				duration: 2,
				opacity: 0.01,
			})
		}
	}
}
