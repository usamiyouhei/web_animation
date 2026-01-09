gsap.registerPlugin(ScrollTrigger); 
gsap.registerPlugin(SplitText);


// -----------------------------------------------------------------------------------//
//			flip-wrapper-01
// -----------------------------------------------------------------------------------//


// 初期状態：全部表示
gsap.set(".flip-wrapper-01 .img-01", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });



// main のアニメーション（先に開始）
gsap.to(".flip-wrapper-01.main .img-01", {
  clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
  duration: 2,
  repeat: -1,
  yoyo: true,
  repeatDelay: 3
});

// sub のアニメーション（delay付き）
gsap.to(".flip-wrapper-01.sub .img-01", {
  clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
  duration: 2,
  repeat: -1,
  yoyo: true,
  repeatDelay: 3,
  delay: 1 // ← ここで遅延を与える
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



// -----------------------------------------------------------------------------------//
//			button
// -----------------------------------------------------------------------------------//


gsap.to(".button", {
	y: -15,              // 上に10px
	duration: 2,       // ゆっくり動く
	yoyo: true,          // 行って戻る
	repeat: -1,          // 無限ループ
	ease: "sine.inOut"   // 柔らかい動き
});


// -----------------------------------------------------------------------------------//
//			text-appear-02
// -----------------------------------------------------------------------------------//

function animateTextAppear02(){
	// ターゲット
	const title = document.querySelector(".demo-01 h2");

	// SplitTextで文字単位に分割
	const splitTitle = new SplitText(title, { type: "chars" });


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
	const paragraphs = document.querySelectorAll(".demo-01 .sentence p");

	paragraphs.forEach((paragraph) => {
		const split = new SplitText(paragraph, { type: "chars" });
		gsap.from(split.chars, {
			y: 20,
			opacity: 0,
			stagger: 0.01,
			duration: 0.6,
			ease: "power2.out",
			delay: 0.6,
		});
	});
}

// 実行
animateTextAppear02();