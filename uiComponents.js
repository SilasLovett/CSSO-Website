let consoleLoadingScreen = document.getElementById("consoleLoadingScreen");

window.addEventListener('load', function() {
  setTimeout(() => {
    consoleLoadingScreen.style.opacity = "0";
    setTimeout(() => {
      consoleLoadingScreen.style.display = "none";
    }, 500);
  }, 1700);
});

sendRandomMessages();

let loadingMessagesBox = document.getElementById("loadingMessagesBox");

async function sendRandomMessages() {
  let count = 0;
  while(count < 20) {
    count++;
    await new Promise(resolve => setTimeout(resolve, 40));
    loadingMessagesBox.innerHTML += `<h3 class="basicWhiteText">Initializing system... Please wait.</h3>`;
  }
}

function sendLoadingMessage(message) {
  loadingMessagesBox.innerHTML += `<h3 class="basicWhiteText">${message}</h3>`;
}

sendLoadingMessage("Welcome to the CSSO website! <3");

setTimeout(() => {
  sendLoadingMessage("We hope you enjoy your stay!");
}, 100);

setTimeout(() => {
  sendLoadingMessage("Notifications should be loaded.");
}, 300);

setTimeout(() => {
  sendLoadingMessage("I literally don't know what to put here I should set up firebase.");
}, 500);

setTimeout(() => {
  sendLoadingMessage("Click events are totally functioning.");
}, 800);

setTimeout(() => {
  sendLoadingMessage("Everything should hopefully be working!");
}, 1000);












function updateNavElements() {
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
  });
}

let mobileNavButton = document.getElementById("mobileNavButton");
let mobileNav = document.getElementById("mobileNav");

let mobileNavButtonSpan1 = document.getElementById("mobileNavButtonSpan1");
let mobileNavButtonSpan2 = document.getElementById("mobileNavButtonSpan2");
let mobileNavButtonSpan3 = document.getElementById("mobileNavButtonSpan3");

mobileNavButton.addEventListener('click', () => {
  if(mobileNav.classList.contains("mobileNavOpen")) {
    mobileNav.classList.remove("mobileNavOpen");
    mobileNav.classList.add("mobileNavClose");

    mobileNavButton.style.transform = "rotate(0deg)";

    mobileNavButtonSpan1.style.transform = "rotate(0deg)";
    mobileNavButtonSpan3.style.transform = "rotate(0deg)";

    setTimeout(() => {
      mobileNavButtonSpan2.style.display = "block";
      mobileNavButtonSpan1.style.top = "0%";
      mobileNavButtonSpan3.style.top = "calc(100% - 4px)";
    }, 125);

  } else {
    mobileNav.classList.remove("mobileNavClose");
    mobileNav.classList.add("mobileNavOpen");

    mobileNavButton.style.transform = "rotate(180deg)";

    mobileNavButtonSpan1.style.top = "calc(50% - 2px)";
    mobileNavButtonSpan3.style.top = "calc(50% - 2px)";

    setTimeout(() => {
      mobileNavButtonSpan2.style.display = "none";
      mobileNavButtonSpan1.style.transform = "rotate(45deg)";
      mobileNavButtonSpan3.style.transform = "rotate(-45deg)";
    }, 125);
  }

});

let accountBoxButton = document.getElementById("accountBoxButton");
let mobileAccountBoxButton = document.getElementById("mobileAccountBoxButton");
let accountBox = document.getElementById("accountBox");

accountBoxButton.addEventListener('click', () => {
  switchAccountBox();
});

mobileAccountBoxButton.addEventListener('click', () => {
  switchAccountBox();
});

function switchAccountBox() {
  if(accountBox.classList.contains("accountBoxOpen")) {
    accountBox.classList.remove("accountBoxOpen");
    accountBox.style.right = "-600px";
  } else {
    accountBox.classList.add("accountBoxOpen");
    accountBox.style.right = "32px";
  }
}

let searchHoverSection = document.getElementById("searchHoverSection");

mobileAccountBoxButton.addEventListener('mouseenter', () => {
  mobileAccountBoxButton.style.flexGrow = 1;
  searchHoverSection.style.flexGrow = 0;
  mobileNavSearch.style.paddingLeft = "0px";
  mobileNavSearch.style.paddingRight = "0px";
});

searchHoverSection.addEventListener('mouseenter', () => {
  mobileAccountBoxButton.style.flexGrow = 0;
  searchHoverSection.style.flexGrow = 1;
  mobileNavSearch.style.paddingLeft = "16px";
  mobileNavSearch.style.paddingRight = "8px";
});

let clickableMenuLinks = document.querySelectorAll(".clickableMenuLink");

let clickableBackLinks;

let extraLinks = document.getElementById("extraLinks");
let mainLinks = document.getElementById("mainLinks");

let linksMap = new Map();

linksMap.set('Get Started', [
  {title: "Learn More", link:"/CSSO/learn-more"},
  {title: "Log in", link:"/CSSO/login"},
  {title: "Sign Up", link:"/CSSO/sign-up"},
]);

linksMap.set('Curriculums', [
  {title: "Curriculum Information", link:"/CSSO/curriculums"},
  {title: "Getting Started", link:"/CSSO/curriculums/getting-started"},
  {title: "How to use our curriculums", link:"/CSSO/curriculums/how-to"},
  {title: "Courses", link:"/CSSO/curriculums/courses"},
  {title: "Learning Paths", link:"/CSSO/curriculums/learning-paths"},
]);

linksMap.set('Club Resources', [
  {title: "Club Information", link:"/CSSO/clubs"},
  {title: "Club Benefits", link:"/CSSO/clubs/benefits"},
  {title: "Find Clubs Near You!", link:"/CSSO/clubs/map"},
  {title: "Register Your Club :D", link:"/CSSO/clubs/register"},
  {title: "Club Legal Information", link:"/CSSO/clubs/legal"},
]);

linksMap.set('Projects', [
  {title: "About Projects", link:"/CSSO/projects"},
  {title: "Make a Suggestion", link:"/CSSO/projects/suggestions"},
]);

linksMap.set('Information', [
  {title: "Nonprofit Information", link:"/CSSO/info/nonprofit"},
  {title: "Our Partners", link:"/CSSO/info/partners"},
  {title: "Privacy Policy", link:"/CSSO/info/privacy-policy"},
  {title: "Terms and Conditions", link:"/CSSO/info/terms-and-conditions"},
  {title: "Disclaimers", link:"/CSSO/info/disclaimers"},
  {title: "Cookie Policy", link:"/CSSO/info/cookie-policy"},
  {title: "Accessibility Statement", link:"/CSSO/info/accessibility-statement"},
]);

linksMap.set('About Us', [
  {title: "Our Team", link:"/CSSO/about-us/team"},
  {title: "Our Goals 🚀", link:"/CSSO/about-us/goals"},
]);

linksMap.set('Default', [
  {title: "Unknown Link", link:"/CSSO/404"},
  {title: "404", link:"/CSSO/404"},
]);

let extraLinksActive = false;

clickableMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainLinks.style.left = "-100%";
    extraLinks.style.left = "0%";

    extraLinksActive = true;

    let linkChoice = link.querySelector(".titleWhiteText").innerText;
    let links = [];

    let color;

    switch (linkChoice) {
      case "Get Started":
        color = "color1";
        break;
      case "Curriculums":
        color = "color2";
        break;
      case "Club Resources":
        color = "color3";
        break;
      case "Projects":
        color = "color4";
        break;
      case "Information":
        color = "color5";
        break;
      case "About Us":
        color = "color6";
        break;
      default:
        color = "color1";
        break;
    }

    if(linksMap.has(linkChoice)) {
      links = linksMap.get(linkChoice);
    } else {
      links = linksMap.get("Default");
    }

    extraLinks.innerHTML = `
<div class="mobileLink clickableBackLink borderTop">
    <h2 class="titleWhiteText"> Go Back</h2>
    <img src="/CSSOImages/icons/backarrow.png" class="clickableImage backwardsClickableImage">
</div>

<div class="mobileLink ${color}">
    <h2 class="titleWhiteText darkText">${linkChoice}</h2>
</div>`

    links.forEach(link => {
      extraLinks.innerHTML += `
<a href="${link.link}" target="_blank">
  <div class="mobileLink borderBottom">
      <h2 class="titleWhiteText">${link.title}</h2>
  </div>
</a>
      `
    });

    clickableBackLinks = extraLinks.querySelectorAll(".clickableBackLink");

    updateMobileNavSearch();

    clickableBackLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainLinks.style.left = "0%";
        extraLinks.style.left = "100%";
        extraLinksActive = false;
        updateMobileNavSearch();
      });
    });

  });
});

let headerMiddleSection = document.getElementById("headerMiddleSection");

function generateHeaderLinks() {
  let html = ``;

  linksMap.forEach((value, key) => {
    let sectionName = key;

    if(sectionName === "Default" || sectionName === "Get Started") {
      return;
    }

    html += `
<div class="navElement">
  <h3 class="pinkLink noSelect">${sectionName}</h3>
  <div class="navMenu">`;

    value.forEach((obj) => {
      html += `
    <a href="${obj.link}" target="_blank">
      <div class="navBlock">
          <h3 class="basicWhiteText">${obj.title}</h3>
      </div>
    </a>`;
    });

    html += `
  </div>
</div>`;

  });

  headerMiddleSection.innerHTML = html;

  updateNavElements();
}

generateHeaderLinks();

let footerLinks = document.getElementById("footerLinks");

function generateFooterLinks() {

  let html = ``;

  linksMap.forEach((value, key) => {
    let sectionName = key;

    if(sectionName === "Default" || sectionName === "Get Started") {
      return;
    }

    html += `<div class="footerColumn">`;
    html += ` <h2 class="basicWhiteText">${sectionName}</h2>`;

    value.forEach((obj) => {
      html += `
    <a href="${obj.link}" target="_blank">
      <h3 class="basicGrayText">${obj.title}</h3>
    </a>`;
    });

    html += `</div>`;


  });


  footerLinks.innerHTML = html;
}

generateFooterLinks();

let mobileNavSearch = document.getElementById("mobileNavSearch");

mobileNavSearch.addEventListener("input", () => {
  updateMobileNavSearch();
});

function updateMobileNavSearch() {
  let query = mobileNavSearch.value.toLowerCase();

  let mainLinksGoals = Array.from(mainLinks.querySelectorAll(".titleWhiteText"));

  mainLinksGoals.forEach(item => {
    item.style.color = "";
  });

  let extraLinksGoals = Array.from(extraLinks.querySelectorAll(".titleWhiteText"));

  extraLinksGoals.forEach(item => {
    item.style.color = "";
  });

  if(query === "") {
    return;
  }

  if(!extraLinksActive) {
    let filtered = mainLinksGoals.filter(item => item.innerText.toLowerCase().includes(query));

    linksMap.forEach((value, key) => {
      let filtered = value.filter(item => item.title.toLowerCase().includes(query));
      if(filtered.length > 0) {
        mainLinksGoals.filter(item => item.innerText.includes(key)).forEach(item => {
          item.style.color = "red";
        })
      }
    });

    filtered.forEach(item => {
      item.style.color = "red";
    });

  } else {
    let filtered = extraLinksGoals.filter(item => item.innerText.toLowerCase().includes(query));

    filtered.forEach(item => {
      item.style.color = "red";
    });
  }
};

/*let items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
let filteredItems = items.filter(item => item.toLowerCase().includes(query));

filteredItems.forEach(item => {
    let div = document.createElement('div');
    div.textContent = item;
    results.appendChild(div);
});*/


let bannerNotificationClose = document.getElementById("bannerNotificationClose");
let bannerNotification = document.getElementById("bannerNotification");
let bannerNotificationText = document.getElementById("bannerNotificationText");

let header = document.getElementById("header");

bannerNotificationClose.addEventListener('click', () => {
  bannerNotification.style.top = "-48px";
  header.style.top = "0px";
  mobileNav.style.paddingTop = "0px";
  accountBox.style.transform = "translateY(0px)";
});

function createBannerNotification(text) {
  bannerNotificationText.innerText = text;
  bannerNotification.style.top = "0px";
  header.style.top = "48px";
  mobileNav.style.paddingTop = "48px";
  accountBox.style.transform = "translateY(48px)";
}

setTimeout(function() {
  createBannerNotification("Please remember, this site is a work in progress!");
}, 5000);

/* Toast notifications */

// thank u https://www.youtube.com/watch?v=Q_X-I-aziZY

const infoNotification = document.createElement("div");
const questionNotification = document.createElement("div");

let toastNotificationBox = document.getElementById("toastNotificationBox");

const notificationTypes = [
    infoNotification, questionNotification
]

notificationTypes.forEach(n => {
    n.classList.add("toastNotification");
})

infoNotification.classList.add("infoNotification");
questionNotification.classList.add("questionNotification")

function toast(type, alert, text) {
    return new Promise((resolve) => {
        let image;
        let id;

        if(alert === true) {
            image = "images/icons/exclamationDark.png";
        } else if(alert === false) {
            image = "images/icons/checkmarkDark.png";
        }

        if(type === "notification") {

            infoNotification.innerHTML = 
`<div class="computerHeader">
<h5>Notification</h5>
<img src="images/icons/closeDark.png" class="notificationCloseIcon">
</div>
<div class="mainNotification">
<div class="leftSection">
<img src="${image}">
<h2 class="titleWhiteText">${text}</h2>
</div>
<div class="rightSection">
</div>
</div>`;

            id = 0
        } else if (type === "question") {

            questionNotification.innerHTML = 
`<div class="computerHeader">
<h5>Notification</h5>
</div>
<div class="mainNotification">
<div class="leftSection">
<img src="${image}">
<h2 class="titleWhiteText">${text}</h2>
</div>
<div class="rightSection">
<button class="smallBlackButton toastNoButton">Yes</button>
<button class="smallBlackButton toastYesButton">No</button>
</div>
</div>`

            id = 1
        }
        const element = notificationTypes[id].cloneNode(true);
        toastNotificationBox.appendChild(element);

        if(type != "question") {
            resolve(true)
        }

        let noButton = element.querySelector(".toastNoButton");
        noButton.addEventListener("click", e => {
            resolve(false)
            e.target.parentElement.parentElement.parentElement.remove();
        });

        let yesButton = element.querySelector(".toastYesButton");
        yesButton.addEventListener("click", e => {
            resolve(true)
            e.target.parentElement.parentElement.parentElement.remove();
        });
    });

}

window.addEventListener("click", e => {
    if(e.target.classList.contains("notificationCloseIcon")) {
        e.target.parentElement.parentElement.remove();
    }
});

//toast("notification", true, "sup with the squad!");
//toast("question", false, "Hello hihi suppp >:)");

/* Cookie Notifications */

const cookieButtonNotification = document.createElement("div");

let cookiesNotificationBox = document.getElementById("cookiesNotificationBox");

const cookieNotificationTypes = [
  cookieButtonNotification,
]

cookieNotificationTypes.forEach(n => {
    n.classList.add("cookiesNotification");
})

cookieButtonNotification.classList.add("cookieButtonNotification");

function cookieNotification(type, title, text) {
  return new Promise((resolve) => {
      let id;

      if(type === "cookies") {

        cookieButtonNotification.innerHTML = 
`<div class="computerHeader">
<h5>Notification</h5>
<img src="images/icons/closeDark.png" class="cookieNotificationCloseIcon">
</div>
<div class="mainNotification">
<h2 class="titleWhiteText">${title}</h2>
<h3 class="basicWhiteText">${text}</h3>
<div class="buttonsBox">
<button class="blackButton cookieNoButton">Cookie Settings</button>
<button class="blackButton cookieYesButton">Close</button>
</div>
</div>`;

          id = 0
      }

      const element = cookieNotificationTypes[id].cloneNode(true);
      cookiesNotificationBox.appendChild(element);

      if(type != "cookies") {
          resolve(true)
      }

      let noButton = element.querySelector(".cookieNoButton");
      noButton.addEventListener("click", e => {
          resolve(false)
          e.target.parentElement.parentElement.parentElement.remove();
      });

      let yesButton = element.querySelector(".cookieYesButton");
      yesButton.addEventListener("click", e => {
          resolve(true)
          e.target.parentElement.parentElement.parentElement.remove();
      });
  });

}

window.addEventListener("click", e => {
  if(e.target.classList.contains("cookieNotificationCloseIcon")) {
      e.target.parentElement.parentElement.remove();
  }
});

//cookieNotification("cookies", "Hello!", "This site may use cookies!");
//cookieNotification("cookies", "SUPPP!", "This site may use cookies!");
