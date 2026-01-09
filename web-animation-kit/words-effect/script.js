gsap.registerPlugin(ScrollTrigger); 
gsap.registerPlugin(SplitText);
// -----------------------------------------------------------------------------------//
//			words-effect-01
// -----------------------------------------------------------------------------------//

const words01Split = new SplitText('.words-effect-01 .item', { type: 'chars' });
gsap.set(".words-effect-01 .item", { autoAlpha: 0 });

const wordsEffect01 = gsap.timeline({
		scrollTrigger: {
		trigger: ".words-effect-01",
		start: "top 30%",
		toggleActions: "play none none reverse",
	}
}
	
);
wordsEffect01
.to(".words-effect-01 .item", { autoAlpha: 1, duration: 0.01 })
.from(words01Split.chars, { opacity: 0, yPercent: 0, stagger: 0.075, ease: 'power1.in', duration: 0.3 })
.to(words01Split.chars, { opacity: 0, stagger: 0.06, ease: 'power3.inOut', duration: 0.25 },"+=1.0")


// -----------------------------------------------------------------------------------//
//			words-effect-02
// -----------------------------------------------------------------------------------//

const words02Split = new SplitText('.words-effect-02 .item', { type: 'chars, words' });
gsap.set(".words-effect-02 .item", { autoAlpha: 0 });

const wordsEffect02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".words-effect-02",
    start: "top 40%",
    toggleActions: "play none none reverse",
			markers: true
  }
});

wordsEffect02
.to(".words-effect-02 .item", { autoAlpha: 1, duration: 0.01 })
	.fromTo(words02Split.words,{
		opacity: 0,
		filter: "blur(8px)",
		scale: 5.5,
	},
	{
		opacity: 1,
		filter: "blur(0px)",
		scale: 1,
		duration: 1.25,
		ease: "power3.out",
		stagger: 1.0,
	}
);



// -----------------------------------------------------------------------------------//
//			words-effect-03
// -----------------------------------------------------------------------------------//

const words03Split = new SplitText('.words-effect-03 .item', { type: 'chars' });
gsap.set(".words-effect-03 .item", { autoAlpha: 0 });

const wordsEffect03 = gsap.timeline({
	scrollTrigger: {
		trigger: ".words-effect-03",
		start: "top 50%",
		toggleActions: "play none none reverse",
	}
});

wordsEffect03
.to(".words-effect-03 .item", { autoAlpha: 1, duration: 0.01 })
.fromTo(words03Split.chars, {
	x: "-5px",
	opacity: 0,
	scale: 0.95,
	filter: "blur(1px)",
	}, {
	x: "0px",
	opacity: 1,
	scale: 1,
	filter: "blur(0px)",
	duration: 0.3,
	ease: "power2.out",
	stagger: {
		each: 0.04,
		from: "random"
	}	
})
.to(words03Split.chars, {
	x: "-5px",
	opacity: 0,
	scale: 0.95,
	filter: "blur(1px)",
	duration: 0.3,
	ease: "power2.out",
	stagger: {
		each: 0.04,
		from: "random"
	}	
},"+=1.0")



// -----------------------------------------------------------------------------------//
//			words-effect-04
// -----------------------------------------------------------------------------------//

let words04Li = document.querySelectorAll(".words-effect-04 .item")
gsap.set(words04Li , { autoAlpha:0, y:30, filter: 'blur(10px)' })

// 初回ふわっと登場（staggerあり）
gsap.to(words04Li, {
    autoAlpha: 1,
    y: 0,
    filter: "blur(0px)",
    stagger: 0.15,
    ease: "power2.out",
    duration: 1,
	onComplete: () => {
		// 登場後、ふわふわアニメを無限ループで適用
		words04Li.forEach((el, i) => {
			gsap.to(el, {
				y: "+=30", // 上下にゆれる
				x: "+=5",
				duration: 1.25,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
				delay: i * 0.15, // ← stagger感を保ったまま
				repeatDelay: 0.5,
			});
		});
	}
});