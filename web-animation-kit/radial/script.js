gsap.registerPlugin(ScrollTrigger); // もし未登録なら

// -----------------------------------------------------------------------------------//
//			radial-01
// -----------------------------------------------------------------------------------//

// 幻想的・やわらか・上品
gsap.to(".radial-01 .bg-01", {
	opacity: 0,
	duration: 1.25,
	ease: "sine.inOut",
	repeat: -1,
	yoyo: true,
	repeatDelay: 2,
});

gsap.to(".radial-01 .bg-02", {
	opacity: 0,
	duration: 2,
	ease: "sine.inOut",
	repeat: -1,
	delelay: 0.5,
	yoyo: true,
	repeatDelay: 1,
});

// -----------------------------------------------------------------------------------//
//			radial-02
// -----------------------------------------------------------------------------------//


// .bg-01：色変化＋ぼかし＋スケール揺らぎ
gsap.to(".radial-02 .bg-01", {
  scale: 1.08,
  filter: "hue-rotate(-50deg) blur(4px)",
  opacity: 0.3,
  duration: 3,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// .bg-02：逆方向の色変化とより深いぼかし
gsap.to(".radial-02 .bg-02", {
  scale: 1.12,
  filter: "hue-rotate(-90deg) blur(6px)",
  opacity: 0.3,
  duration: 4,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  delay: 0.5
});


// -----------------------------------------------------------------------------------//
//			radial-03
// -----------------------------------------------------------------------------------//


// bg-01：左上から、ちょっと横伸び＆ゆる回転
gsap.to(".radial-03 .bg-01", {
  scaleX: 1.75,
  scaleY: 0.75,
  duration: 3.5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  transformOrigin: "left top"
});

// bg-02：右下から、逆方向に縮んで＆逆回転
gsap.to(".radial-03 .bg-02", {
  scaleX: 1.5,
  scaleY: 0.5,
  duration: 3.0,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  transformOrigin: "right bottom"
});
