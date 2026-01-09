gsap.registerPlugin(ScrollTrigger); 
gsap.registerPlugin(SplitText);
// -----------------------------------------------------------------------------------//
//			text-appear-02
// -----------------------------------------------------------------------------------//

function animateTextAppear02(){
	// ターゲット
	const title = document.querySelector(".text-appear-02 h2");
	const paragraph = document.querySelector(".text-appear-02 p");

	// SplitTextで文字単位に分割
	const splitTitle = new SplitText(title, { type: "chars" });
	const splitParagraph = new SplitText(paragraph, { type: "chars" });


	// アニメーション（タイトル）
	gsap.from(splitTitle.chars, {
		y: 20,
		opacity: 0,
		stagger: 0.03,
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
			trigger: title,
			start: "top 30%",
			toggleActions: "play none none reverse",

		}
	});

	// アニメーション（本文）
	gsap.from(splitParagraph.chars, {
		y: 20,
		opacity: 0,
		stagger: 0.01,
		duration: 0.6,
		ease: "power2.out",
		delay: 0.6,
			scrollTrigger: {
			trigger: paragraph,
			start: "top 30%",
			toggleActions: "play none none reverse",

		}
	});
}

// 実行
animateTextAppear02();