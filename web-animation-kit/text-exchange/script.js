gsap.registerPlugin(ScrollTrigger); // もし未登録なら

// -----------------------------------------------------------------------------------//
//			text-exchange-01
// -----------------------------------------------------------------------------------//



gsap.set(".text-exchange-01 .exchange", { autoAlpha: 1 })
gsap.set(".text-exchange-01 .exchange .item", { transformOrigin:"50% 50% -50" })

let textExchange01 = gsap.timeline({ repeat: -1 })
textExchange01
.from(".text-exchange-01 .exchange .item", { rotationX:-90, opacity:0, stagger: 0.8 })
.to(".text-exchange-01 .exchange .item", { rotationX:90, opacity:0, stagger: 0.8 }, 0.8 )


// -----------------------------------------------------------------------------------//
//			text-exchange-02
// -----------------------------------------------------------------------------------//

gsap.set(".text-exchange-02 .exchange", { autoAlpha: 1 })
gsap.set(".text-exchange-02 .exchange .item", { transformOrigin:"50% 50% -50" })
gsap.set(".text-exchange-02 .exchange .item .border", { transformOrigin: "left center" })

let textExchange02 = gsap.timeline({ repeat: -1 })
textExchange02
.from(".text-exchange-02 .exchange .item", { rotationX:-90, opacity:0, stagger: 1.2 })
.to(".text-exchange-02 .exchange .item .border", { scale: 1, stagger: 1.2, ease: "power3.in" }, "<=0.1")
.to(".text-exchange-02 .exchange .item", { rotationX:90, opacity:0, stagger: 1.2 }, 1.2 )




// -----------------------------------------------------------------------------------//
//			text-exchange-03
// -----------------------------------------------------------------------------------//

gsap.set(".text-exchange-03 .exchange", { autoAlpha: 1 })
gsap.set(".text-exchange-03 .exchange .item", { transformOrigin:"50% 50% -50%" })
gsap.set(".text-exchange-03 .exchange .item .border", { transformOrigin: "left center" })

let textExchange03 = gsap.timeline({ repeat: -1 })
textExchange03
.from(".text-exchange-03 .exchange .item", { rotationX:-90, opacity:0, stagger: 1.2 })
.to(".text-exchange-03 .exchange .item", { rotationX:90, opacity:0, stagger: 1.2 }, 1.2 )