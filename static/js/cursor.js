! function() {
    //
    function r(r, o) {
        if (r && o) {
            let a = 1;
            r.addEventListener("click", function() {
                if (r.classList.toggle("is-active"), o.classList.toggle("is-active"), r.classList.contains(
                    "tips-inner") && o.classList.contains("is-active")) {
                    let r = t.length * Math.random() | 0;
                    r === a && (r = t.length * Math.random() | 0);
                    let o = t[r];
                    e.innerHTML = o, a = r
                }
            })
        }
    }
    //

    let s = !0,
        c = window.matchMedia("(prefers-reduced-motion: reduce)");
    c.matches && (s = !1);
    // 加载
    let l = document.querySelector(".loader"),
        d = document.querySelector(".cursor"),
        u = document.querySelector(".site-header"),
        f = document.querySelectorAll(".scroll-text");

    //
    function S() {
        if (document.querySelectorAll("[data-splitting]") && Splitting(), l && function(e) {
            let t = e.querySelectorAll(".loader-animation"),
                r = e.querySelector(".loader-background");
            const o = gsap.timeline({
                defaults: {
                    ease: "Sine.ease"
                }
            });
            o.to(t, {
                opacity: 0,
                duration: .15,
                delay: .3
            }).to(r, {
                yPercent: -100,
                duration: .5,
                delay: .3
            }).to(e, {
                opacity: 0,
                duration: .15
            }).to(e, {
                autoAlpha: 0,
                display: "none",
                duration: 0
            })
        }(l), d && function(e) {
            gsap.set(e, {
                xPercent: -50,
                yPercent: -50
            });
            let t = e,
                r = {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2
                },
                o = {
                    x: r.x,
                    y: r.y
                },
                a = gsap.quickSetter(t, "x", "px"),
                n = gsap.quickSetter(t, "y", "px");
            document.body.addEventListener("mousemove", e => {
                o.x = e.x, o.y = e.y
            }), gsap.ticker.add(() => {
                const e = 1 - Math.pow(.8, gsap.ticker.deltaRatio());
                r.x += (o.x - r.x) * e, r.y += (o.y - r.y) * e, a(r.x), n(r.y)
            }), document.body.addEventListener("mouseenter", function(e) {
                (e.target.matches("a") || e.target.matches(".hamburger")) && t.classList.add(
                    "link-hover"), e.target.matches(".copy") && t.classList.add("fade"), e.target
                    .matches(
                        ".graphic") && t.classList.add("graphic-hover"), e.target.matches(
                    ".tips-inner") && t.classList.add("tips-hover"), e.target.matches(
                    ".easter-egg") && t
                    .classList.add("hide")
            }, !0), document.body.addEventListener("mouseleave", function(e) {
                (e.target.matches("a") || e.target.matches(".hamburger")) && t.classList.remove(
                    "link-hover"), e.target.matches(".copy") && t.classList.remove("fade"), e.target
                    .matches(".graphic") && t.classList.remove("graphic-hover"), e.target.matches(
                    ".tips-inner") && t.classList.remove("tips-hover"), e.target.matches(
                    ".easter-egg") && t.classList.remove("hide")
            }, !0), setTimeout(function() {
                t.classList.add("active")
            }, 1500)
        }(d), u && function(e) {
            let t = e.querySelector(".hamburger"),
                r = e.querySelectorAll(".site-header-name .char"),
                o = e.querySelectorAll(".site-header-tagline .word"),
                a = e.querySelector(".site-header-menu"),
                n = e.querySelectorAll(".site-header-menu li");
            gsap.set(t, {
                opacity: 0
            }), gsap.set(r, {
                yPercent: 100
            }), gsap.set(o, {
                yPercent: 100,
                opacity: 0
            }), gsap.set(n, {
                yPercent: -150,
                opacity: 0
            });
            const i = gsap.timeline({
                defaults: {
                    ease: "Sine.ease"
                }
            });
            i.to(r, {
                yPercent: 0,
                duration: .5,
                stagger: .05,
                delay: .8
            }).add("secondary").to(o, {
                yPercent: 0,
                opacity: 1,
                delay: -.45,
                duration: .5,
                stagger: .075
            }, "secondary").to(n, {
                yPercent: 0,
                opacity: 1,
                duration: .4,
                stagger: .075,
                onComplete: function() {
                    a.classList.add("loaded")
                }
            }, "secondary").to(t, {
                opacity: 1,
                duration: .5
            }, "secondary")
        }(g, y, p));
    }
    let b = document.querySelector("#hamburger"),
        v = document.querySelector(".tips-inner"),
        q = document.querySelector(".tips-text-wrap");
    window.addEventListener("DOMContentLoaded", () => {
        b && u && r(b, u), v && q && r(v, q), s && S();
        let e = document.querySelector("#scrollTrigger");
        if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window &&
            "intersectionRatio" in window.IntersectionObserverEntry.prototype && e) {
            let t = {
                    rootMargin: "150px",
                    threshold: .5
                },
                r = t => {
                    for (let r of t) r.target === e && (r.isIntersecting ? document.body.classList.remove(
                        "scrolled") : document.body.classList.add("scrolled"))
                };
            new window.IntersectionObserver(r, t).observe(e)
        }
    }), document.addEventListener("readystatechange", e => {
        c.addEventListener("change", () => {
            c.matches ? s = !1 : (s = !0, S())
        })
    })
}();