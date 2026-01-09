gsap.registerPlugin(ScrollTrigger); 
gsap.registerPlugin(SplitText);



// -----------------------------------------------------------------------------------//
//			shutter-04
// -----------------------------------------------------------------------------------//

const shutter04Tl = gsap.timeline({
		// scrollTrigger: {
		// 	trigger: ".shutter-04",
		// 	start: "top 20%",    
		// 	toggleActions: "play reverse play reverse",
		// 	markers: true,
		// },
	}
);

gsap.set(".shutter-04 .overlay-first", { xPercent: 100, autoAlpha: 0 })
gsap.set(".shutter-04 .overlay-after", { xPercent: 100,autoAlpha: 0 });

// 先行バー（overlay-first）が右から左へ流れて消える
shutter04Tl
.to(".shutter-04 .overlay-first", { xPercent: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" })
// 後続（overlay-after）が少し遅れてスライドイン 
.to(".shutter-04 .overlay-after", { xPercent: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" }, "-=0.2") // ← 0.3秒ディレイ風に少しかぶせる
.to([".shutter-04 .overlay-first",".shutter-04 .overlay-after"], { scale:0, autoAlpha: 0, duration: 0.3, ease: "power2.in",
  onComplete: () => {
    document.querySelector(".shutter-04").style.display = "none"
  }
 })




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
//			text-rotation-02
// -----------------------------------------------------------------------------------//
const textRotation02 = {
  container: document.querySelector(".text-rotation-02"),
};

textRotation02.spans = textRotation02.container.querySelectorAll("span");
textRotation02.spanWidth = textRotation02.spans[0].offsetWidth;

// 最初に左にずらしておく（画面外からスタート）
gsap.set(textRotation02.container, {
  x: -textRotation02.spanWidth,
});

// 右に向かって流す
gsap.to(textRotation02.container, {
  x: 0,
  duration: 16,
  ease: "linear",
  repeat: -1,
});


// -----------------------------------------------------------------------------------//
//			button
// -----------------------------------------------------------------------------------//


gsap.to(".button", {
  scale: 1.05,
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut"
});
// -----------------------------------------------------------------------------------//
//			text-appear-02
// -----------------------------------------------------------------------------------//

function animateTextAppear02(){
	// ターゲット
	const title = document.querySelector(".demo-02 h2");

	// SplitTextで文字単位に分割
	const splitTitle = new SplitText(title, { type: "chars" });


	// アニメーション（タイトル）

	gsap.from(splitTitle.chars, {
		y: 20,
		opacity: 0,
		stagger: 0.03,
		duration: 0.8,
		ease: "power2.out",
		// scrollTrigger: {
		// 	trigger: title,
		// 	start: "top 30%",
		// 	toggleActions: "play none none reverse",
		// }
		delay: 2.0
	});

	// アニメーション（本文）
	const paragraphs = document.querySelectorAll(".demo-02 .sentence p");

	paragraphs.forEach((paragraph) => {
		const split = new SplitText(paragraph, { type: "chars" });
		gsap.from(split.chars, {
			y: 20,
			opacity: 0,
			stagger: 0.01,
			duration: 0.6,
			ease: "power2.out",
			delay: 2.6,
		});
	});
}

// 実行
animateTextAppear02();