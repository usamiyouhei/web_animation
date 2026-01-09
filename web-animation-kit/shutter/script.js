gsap.registerPlugin(ScrollTrigger); // もし未登録なら

// -----------------------------------------------------------------------------------//
//			shutter-01
// -----------------------------------------------------------------------------------//


const shutter01Tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".shutter-01",
			start: "top 20%",    
			toggleActions: "play reverse play reverse",
		},
	}
);
gsap.set(".shutter-01 .triangle-01", { transformOrigin:"left top" })
gsap.set(".shutter-01 .triangle-02", { transformOrigin:"right bottom" })

// シャッター開く（左右同時に）
shutter01Tl
.to(".shutter-01 .triangle-01", { scale: 0, duration: 1.2, opacity: 0, ease: "power2.inOut" } )
.to(".shutter-01 .triangle-02", { scale: 0, duration: 1.2, opacity: 0, ease: "power2.inOut" }, "<");

// -----------------------------------------------------------------------------------//
//			shutter-02
// -----------------------------------------------------------------------------------//


const shutter02Tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".shutter-02",
			start: "top 20%",    
			toggleActions: "play reverse play reverse",
			markers: true,
		},
	}
);

// スケールの起点をセット
gsap.set(".rectangle-01", { transformOrigin: "center top" });
gsap.set(".rectangle-02", { transformOrigin: "center bottom" });

// タイムライン開始
shutter02Tl
  // border が左から右にスッと出る
  .fromTo(".border", { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.6, ease: "power2.out" }
  )
  // rectangle-01 が上に向かって縮む
  .to(".rectangle-01", { scaleY: 0, duration: 1, ease: "power2.inOut" }, "-=0.3") // ← border と少しかぶせて動かす
  // rectangle-02 が下に向かって縮む
  .to(".rectangle-02", { scaleY: 0, duration: 1, ease: "power2.inOut" }, "<")
  .to(".border", { autoAlpha: 0, duration: 0.5 },"<") 



// -----------------------------------------------------------------------------------//
//			shutter-03
// -----------------------------------------------------------------------------------//

const shutter03Tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".shutter-03",
			start: "top 20%",    
			toggleActions: "play reverse play reverse",
		},
	}
);
  
shutter03Tl 
.from(".shutter-03 .bg-image", { autoAlpha: 0, duration: 1.0, ease: "expo.out" })
.from(".shutter-03 .bg-color", { autoAlpha: 0, yPercent: 100, transformOrigin: "center bottom", ease: "expo.out" }, "<=1")


// -----------------------------------------------------------------------------------//
//			shutter-04
// -----------------------------------------------------------------------------------//

const shutter04Tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".shutter-04",
			start: "top 20%",    
			toggleActions: "play reverse play reverse",
			// markers: true,
		},
	}
);

gsap.set(".shutter-04 .overlay-first", { xPercent: 100, autoAlpha: 0 })
gsap.set(".shutter-04 .overlay-after", { xPercent: 100,autoAlpha: 0 });

// 先行バー（overlay-first）が右から左へ流れて消える
shutter04Tl
.to(".shutter-04 .overlay-first", { xPercent: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" })
// 後続（overlay-after）が少し遅れてスライドイン 
.to(".shutter-04 .overlay-after", { xPercent: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" }, "-=0.2") // ← 0.2秒ディレイ風に少しかぶせる
.to([".shutter-04 .overlay-first",".shutter-04 .overlay-after"], { scale:0, autoAlpha: 0, duration: 0.3, ease: "power2.in" })