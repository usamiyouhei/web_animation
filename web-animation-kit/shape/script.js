gsap.registerPlugin(ScrollTrigger);

// -----------------------------------------------------------------------------------//
//			shape-01
// -----------------------------------------------------------------------------------//


// 初回：下からフェードイン＋stagger
gsap.from(".shape-01 span", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: {
        each: 0.15,
        from: "random"
    }
});

// 無限ふわふわ（各spanに個別ループ）
document.querySelectorAll(".shape-01 span").forEach((el, i) => {
    gsap.to(el, {
        y: () => gsap.utils.random(-30, 30),
        duration: () => gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2.5
    });
});

// -----------------------------------------------------------------------------------//
//			shape-02
// -----------------------------------------------------------------------------------//


// 初回：下からフェードイン＋stagger
gsap.from(".shape-02 span", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    stagger: {
        each: 0.15,
        from: "random"
    }
});

document.querySelectorAll(".shape-02 span").forEach((el, i) => {
	gsap.to(el, {
		rotate: () => gsap.utils.random(-360, 360),
		scale: () => gsap.utils.random(1.25, 1.75),
		duration: () => gsap.utils.random(3, 6),
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut",
		delay: Math.random() * 2.5,
		transformOrigin: "50% 50%" // 中心から拡大・回転
	});
});


// -----------------------------------------------------------------------------------//
//			shape-03
// -----------------------------------------------------------------------------------//


document.querySelectorAll(".shape-03 span").forEach((el, i) => {
	gsap.to(el, {
		y: -30,
		opacity: 1,
		duration: gsap.utils.random(3, 5),
		repeat: -1,
		repeatDelay: gsap.utils.random(0.5, 2), // ← ここ追加！
		yoyo: true,
		ease: "sine.inOut",
		delay: Math.random() * 2.5
	});
});


// -----------------------------------------------------------------------------------//
//			shape-04
// -----------------------------------------------------------------------------------//


document.querySelectorAll(".shape-04 span").forEach((el, i) => {

	
gsap.fromTo(el , {
	rotate: -90, // 
	autoAlpha: 0,
	scale:0,
	}, {
	rotate: 720, // 
	duration: 2,
	delay: 0.5,
	autoAlpha: 1,
	scale: 1,
	ease: "power2.out",
	onComplete: () => {
		// 最初のアニメ完了後、ふわふわループ開始

		gsap.to(el, {
			y: -30,
			autoAlpha: 0,
			duration: gsap.utils.random(3, 5),
			repeat: -1,
			repeatDelay: gsap.utils.random(0.5, 2),
			yoyo: true,
			ease: "sine.inOut",
			delay: Math.random() * 2.5
			});
		}
	});
})


