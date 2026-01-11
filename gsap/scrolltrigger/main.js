gsap.registerPlugin(ScrollTrigger);

const targetAnimation = gsap.timeline({
	scrollTrigger: {
		trigger: ".target",
		start: 'center 45%',
		toggleActions: "play none none reset",
        markers: true
	},
});
  
targetAnimation
.from(".target ul li", { autoAlpha: 0, y:100, stagger:0.05, duration: 1 })
