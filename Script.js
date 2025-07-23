gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

// Animate tea images on load
gsap.from("#blackTea", {
  y: -200,
  opacity: 0,
  duration: 2,
});
gsap.from("#greenTea", {
  y: 200,
  opacity: 0,
  duration: 2,
});

// Scroll-triggered movement
gsap.to("#blackTea", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    scrub: true
  },
  x: -200,
  rotation: -15
});

gsap.to("#greenTea", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    scrub: true
  },
  x: 200,
  rotation: 15
});

// Animate tea menu items
gsap.utils.toArray(".tea-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100,
    duration: 1
  });
});
