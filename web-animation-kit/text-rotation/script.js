gsap.registerPlugin(ScrollTrigger); // もし未登録なら

// -----------------------------------------------------------------------------------//
//			text-rotation-01
// -----------------------------------------------------------------------------------//
const textRotation01 = {
  container: document.querySelector(".text-rotation-01"),
};

textRotation01.spans = textRotation01.container.querySelectorAll("span");
textRotation01.spanWidth = textRotation01.spans[0].offsetWidth;

gsap.fromTo(
  textRotation01.container,
  { x: 0 },
  {
    x: -textRotation01.spanWidth,
    duration: 16,
    ease: "linear",
    repeat: -1,
  }
);

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
//			text-rotation-03
// -----------------------------------------------------------------------------------//
const textRotation03 = {
	front: document.querySelector(".text-rotation-03 .text-front"),
	back: document.querySelector(".text-rotation-03 .text-back")
};

// span 2個分の幅（1個分でOK。2個で自然ループになる）
const spanWidth = textRotation03.front.querySelector("span").offsetWidth;

gsap.set([textRotation03.front, textRotation03.back], {
	x: 0,
});

gsap.to([textRotation03.front, textRotation03.back], {
	x: -spanWidth,
	duration: 16,
	ease: "linear",
	repeat: -1
});


// -----------------------------------------------------------------------------------//
//			text-rotation-04
// -----------------------------------------------------------------------------------//
const textRotation04 = {
	container: document.querySelector(".text-rotation-04"),
};

textRotation04.spans = textRotation04.container.querySelectorAll("span");
textRotation04.spanWidth = textRotation04.spans[0].offsetHeight;

// 最初に左にずらしておく（画面外からスタート）
gsap.set(textRotation04.container, {
	y: textRotation04.spanWidth,
});

// 右に向かって流す
gsap.to(textRotation04.container, {
  y: 0,
  duration: 10,
  ease: "linear",
  repeat: -1,
});
