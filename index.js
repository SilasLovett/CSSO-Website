gsap.registerPlugin(ScrollTrigger);

/*gsap.from("#descriptionSection", {
    scrollTrigger: {
      trigger: "#descriptionSection",
      start: "top bottom", // top hits the bottom of the screen
      end: "top center",
      scrub: 0.25,
    },
    autoAlpha: 0,
    x: '-100%',
});*/

gsap.from("#statsBox1", {
  scrollTrigger: {
    trigger: "#statsBox1",
    start: "top bottom", // top hits the bottom of the screen
    end: "top center+=200",
    scrub: 0.25,
  },
  autoAlpha: 0,
  x: '-100%',
});

gsap.from("#statsBox2", {
  scrollTrigger: {
    trigger: "#statsBox2",
    start: "top bottom", // top hits the bottom of the screen
    end: "top center+=200",
    scrub: 0.25,
  },
  autoAlpha: 0,
  x: '-100%',
});

gsap.from("#statsBox3", {
  scrollTrigger: {
    trigger: "#statsBox3",
    start: "top bottom", // top hits the bottom of the screen
    end: "top center+=200",
    scrub: 0.25,
  },
  autoAlpha: 0,
  x: '-100%',
});

gsap.from("#statsBox4", {
  scrollTrigger: {
    trigger: "#statsBox4",
    start: "top bottom", // top hits the bottom of the screen
    end: "top center+=200",
    scrub: 0.25,
  },
  autoAlpha: 0,
  x: '-100%',
});


let navElements = document.querySelectorAll(".navElement");

navElements.forEach(link => {
  link.addEventListener('mouseenter', () => {

    let navMenu = link.querySelector(".navMenu");
    if(navMenu != null) {
      navMenu.style.display = "flex";
    }

  });
  link.addEventListener('mouseleave', () => {

    // Your event handler code here
    let navMenu = link.querySelector(".navMenu");
    if(navMenu != null) {
      navMenu.style.display = "none";
    }

  });
})

let mobileNavButton = document.getElementById("mobileNavButton");
let mobileNav = document.getElementById("mobileNav");

let extraLinks = document.getElementById("extraLinks");
let mainLinks = document.getElementById("mainLinks");

mobileNavButton.addEventListener('click', () => {
  if(mobileNav.classList.contains("mobileNavOpen")) {
    mobileNav.classList.remove("mobileNavOpen");
    mobileNav.classList.add("mobileNavClose");
  } else {
    mobileNav.classList.remove("mobileNavClose");
    mobileNav.classList.add("mobileNavOpen");
  }

});

let clickableMobileLinks = document.querySelectorAll(".clickableMobileLink");

clickableMobileLinks.forEach(link => {
  link.addEventListener('click', () => {

    extraLinks.style.left = "0";
    mainLinks.style.left = "-100%";

  });
})