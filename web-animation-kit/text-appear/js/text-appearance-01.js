
gsap.registerPlugin(ScrollTrigger);
// -----------------------------------------------------------------------------------//
//			text-appear-01
// -----------------------------------------------------------------------------------//

gsap.timeline({
	scrollTrigger: {
		trigger: ".text-appear-01",
		start: "top 30%",
		toggleActions: "play none none reverse",

	}
})
.to(".text-appear-01 h2", {
	opacity: 1,
	y: 0,
	scale: 1,
	filter: "blur(0px)",
	duration: 1,
	ease: "power2.out"
})
.to(".text-appear-01 p", {
	opacity: 1,
	y: 0,
	scale: 1,
	filter: "blur(0px)",
	duration: 1,
	ease: "power2.out"
}, "-=0.5"); // ←ちょっと重ねて出す
