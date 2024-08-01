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
let mobileNavBackButton = document.getElementById("mobileNavBackButton");

clickableMobileLinks.forEach(link => {
  link.addEventListener('click', () => {

    extraLinks.style.left = "0";
    mainLinks.style.left = "-100%";

  });
})

mobileNavBackButton.addEventListener('click', () => {

  extraLinks.style.left = "100%";
  mainLinks.style.left = "0";

});


// CSS EDITOR

let CSSHeightInput = document.getElementById("CSSHeightInput");
let CSSWidthInput = document.getElementById("CSSWidthInput");
let CSSBRInput = document.getElementById("CSSBRInput");
let CSSBCInput = document.getElementById("CSSBCInput");
let CSSBackgroundInput = document.getElementById("CSSBackgroundInput");
let CSSColorInput = document.getElementById("CSSColorInput");
let CSSFontInput = document.getElementById("CSSFontInput");

let CSSEditorButton = document.getElementById("CSSEditorButton");

CSSHeightInput.addEventListener('input', () => {
  CSSEditorButton.style.height = CSSHeightInput.value;
});

CSSWidthInput.addEventListener('input', () => {
  CSSEditorButton.style.width = CSSWidthInput.value;
});

CSSBRInput.addEventListener('input', () => {
  CSSEditorButton.style.borderRadius  = CSSBRInput.value;
});

CSSBCInput.addEventListener('input', () => {
  CSSEditorButton.style.border = "2px solid " + CSSBCInput.value;
});

CSSBackgroundInput.addEventListener('input', () => {
  CSSEditorButton.style.backgroundColor = CSSBackgroundInput.value;
});

CSSColorInput.addEventListener('input', () => {
  CSSEditorButton.style.color = CSSColorInput.value;
});

CSSFontInput.addEventListener('input', () => {
  CSSEditorButton.style.fontSize = CSSFontInput.value;
});

let CSSResetButton = document.getElementById("CSSResetButton");

CSSResetButton.addEventListener('click', () => {
  CSSEditorButton.style.height = "60px";
  CSSHeightInput.value = "60px";

  CSSEditorButton.style.width = "180px";
  CSSWidthInput.value = "180px";

  CSSEditorButton.style.borderRadius = "10px";
  CSSBRInput.value = "10px";

  CSSEditorButton.style.border = "2px solid white";
  CSSBCInput.value = "white";

  CSSEditorButton.style.backgroundColor = "black";
  CSSBackgroundInput.value = "black";

  CSSEditorButton.style.color = "white";
  CSSColorInput.value = "white";

  CSSEditorButton.style.fontSize = "1.25em";
  CSSFontInput.value = "1.25em";
});