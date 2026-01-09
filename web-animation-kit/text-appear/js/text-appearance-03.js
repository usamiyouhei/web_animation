gsap.registerPlugin(ScrollTrigger); 
// -----------------------------------------------------------------------------------//
//			text-appear-03
// -----------------------------------------------------------------------------------//

// .inner をすべて対象にする（h2でもpでもOK）
document.querySelectorAll(".text-appear-03 .inner").forEach((el) => {
	const reveal = el.querySelector(".reveal");
	const phrase = el.querySelector(".phrase");
  	// 初期状態セット
	gsap.set(reveal, {
		autoAlpha:0,
		x: "-120%" // ← 帯のスタート位置をもっと左に設定
	});

	// 初期状態セット（JSで追加するパターン）
	gsap.set(phrase, {
		opacity: 0,
		y: 30,
		filter: "blur(8px)"
	});

	const tl = gsap.timeline({
			scrollTrigger: {
			trigger: el,
			start: "top 50%",
			toggleActions: "play none none reverse",
			// markers: true, // ←必要ならON
		}
	});

	// ① マスクバーをスライドアウト
	tl
	.to(reveal, { duration: 0.1, autoAlpha: 1 })
	.to(reveal, { x: "150%", duration: 0.6, ease: "power2.inOut" })
	.to(reveal, { autoAlpha: 0, duration: 0.01 }, "-=0.2")
	.to(phrase, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }, "-=0.3")
});