gsap.registerPlugin(ScrollTrigger); // もし未登録なら

// -----------------------------------------------------------------------------------//
//			flip-wrapper-01
// -----------------------------------------------------------------------------------//


// 初期状態：全部表示
gsap.set(".flip-wrapper-01 .img-01", { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });


// ① 1枚ずつ clip-path で消していく
gsap.to(".flip-wrapper-01 .img-01", { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)", duration: 2, repeat: -1, yoyo: true, repeatDelay: 3, });






// -----------------------------------------------------------------------------------//
//			flip-wrapper-02
// -----------------------------------------------------------------------------------//



const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut", duration: 1.2 } });

// 初期状態：全て clipPath FULL（全表示）
gsap.set(".flip-wrapper-02 .img", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
});

// 1枚目を消す（→2枚目が見える）
tl.to(".flip-wrapper-02 .img-01", {
  clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
}, "+=1.5");

// 2枚目を消す（→3枚目が見える）
tl.to(".flip-wrapper-02 .img-02", {
  clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
}, "+=2");

// ② img-01を一時的に最前面へ
tl.set(".flip-wrapper-02 .img-01", {
  zIndex: 1
}, "<"); // 同タイミングで


// 3番目を消す前に、1番目を復活
tl.set(".flip-wrapper-02 .img-01", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
}, "+=1.8");

// 3番目を消す（→1番目が見える）
tl.to(".flip-wrapper-02 .img-03", {
  clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
}, "+=0.2");

// ③ z-indexを戻す（見た目に影響ないタイミングでOK）
tl.set(".flip-wrapper-02 .img-01", {
  zIndex: 4
});

// 全部戻す（初期状態）
tl.set(".flip-wrapper-02 .img", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
}, "+=1.5");




// -----------------------------------------------------------------------------------//
//			flip-wrapper-03
// -----------------------------------------------------------------------------------//


gsap.set(".flip-wrapper-03 .img-01", {   clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" });



gsap.to(".flip-wrapper-03 .img-01", {
  clipPath: "polygon(25% 0%, 25% 0%, 0% 100%, 0% 100%)",
  duration: 2,
  repeat: -1,
  yoyo: true,
  repeatDelay: 3,
  ease: "power2.inOut"
});
