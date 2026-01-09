gsap.registerPlugin(ScrollTrigger);

gsap.to(".border-01 span", {
	width: "100%",
	duration: 0.8,
	opacity: 1,
	ease: "power4.out", // ← GSAP独自の自然な伸び
    delay: 0.15, // ← 開始を0.15秒遅らせる
    scrollTrigger: {
		trigger: ".border-01",
		start: "top 50%", // ← 画面の50%地点
		toggleActions: "play reverse play reverse",
	}
});

gsap.to(".border-02 span", {
	width: "100%",
	opacity: 1,
	duration: 0.8,
	ease: "power4.out",
	delay: 0.3,
	scrollTrigger: {
		trigger: ".border-02",
		start: "top 50%",
		toggleActions: "play reverse play reverse",
		markers: true
	}
});



document.querySelectorAll(".border-03").forEach((el) => {
	gsap.timeline({
		delay: 0.3,
		defaults: { ease: "power4.out", duration: 0.4 },
		scrollTrigger: {
			trigger: el,
			start: "top 50%", 
			toggleActions: "play reverse play reverse",
		},
	})
	.to(el.querySelector(".border-left"),   { height: "20%", opacity: 1 }, 0)
	.to(el.querySelector(".border-top"),    { width:  "20%", opacity: 1 }, 0)
	.to(el.querySelector(".border-right"),  { height: "20%", opacity: 1 }, "+=0.15")
	.to(el.querySelector(".border-bottom"), { width:  "20%", opacity: 1 }, "<");
});

document.querySelectorAll(".border-04").forEach((el) => {
	gsap.timeline({
		delay: 0.3,
		defaults: { ease: "power4.out", duration: 0.4 },
		scrollTrigger: {
			trigger: el,
			start: "top 50%", 
			toggleActions: "play reverse play reverse", 
		},
	})
    .to(el.querySelector(".border-left"),   { height: "100%", opacity: 1 })
    .to(el.querySelector(".border-top"),    { width:  "100%", opacity: 1 })
    .to(el.querySelector(".border-right"),  { height: "100%", opacity: 1 })
    .to(el.querySelector(".border-bottom"), { width:  "100%", opacity: 1 })
    .to(el, { opacity: 0 });
});





gsap.to(".border-05 span", {
	width: "100%",
	opacity: 1,
	duration: 0.9,
	ease: "power4.out",
	stagger: 0.15, // ← 各spanごとに0.15秒ずつ遅れて発火
	delay: 0.3,
	scrollTrigger: {
		trigger: ".border-05",
		start: "top 50%", // ← 画面の50%地点
		toggleActions: "play reverse play reverse",
	},
	// onComplete: () => {
    // 	gsap.set(".border-05", { opacity: 0 });
  	// }
});