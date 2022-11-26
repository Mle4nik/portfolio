// $(document).ready(function(){
//     $(".one").on("click", function() {
//         $('html').animate({ scrollTop: $("#about").offset().top }, 500);
//     });
// })

// function goBlock(elem) {
//     $('html').animate({ scrollTop: elem.offset().top }, 500);
// }

// $(document).ready(function(){
//     $(".one").on("click", function() {
//         goBlock($("#about"))
//     });
// })
const langArr = {
  one: {
    eng: "Home",
    ru: "Главная",
  },

  two: {
    eng: "About me",
    ru: "Обо мне",
  },

  three: {
    eng: "Skills",
    ru: "Навыки",
  },

  four: {
    eng: "Portfolio",
    ru: "Портфолио",
  },

  five: {
    eng: "Contacts",
    ru: "Контакты",
  },

  theme: {
    eng: "DARKMOD",
    ru: "ТЕМА САЙТА",
  },

  name: {
    eng: "Murad Akhmedov",
    ru: "Мурад Ахмедов",
  },

  job: {
    eng: "Back-End Dev. 20 years old, Makhachkala",
    ru: "Back-End разработчик. 20 лет, Махачкала",
  },

  about_me: {
    eng: "About me",
    ru: "Обо мне",
  },

  hey: {
    eng: "Hey, I'm Murad - Back-End Dev. from Makhachkala. <br> I'm interested IT, Programming and everything connected with it.",
    ru: "Привет, Меня зовут Мурад и я - Back-End разработчик из Махачкалы.",
  },

  study: {
    eng: "Nowadays, i study at the Dagestan State University of natonal economy.",
    ru: "Ныне, я обучаюсь в Дагестанском государственном университет народного хозяйства.",
  },

  motto: {
    eng: "My motto for life: Do what you love. Love what you do.",
    ru: "Мой дивиз по жизни: Делай то, что любишь. Люби то, что ты делаешь.",
  },

  skills: {
    eng: "Skills",
    ru: "Навыки",
  },

  port: {
    eng: "Portfolio",
    ru: "Портфолио",
  },

  contacts: {
    eng: "Contacts",
    ru: "Контакты",
  },

  chat: {
    eng: "Want to know more or just chat? You are welcome!",
    ru: "Хочешь узнать больше или просто пообщаться? Добро пожаловать!",
  },

  send: {
    eng: "Send message",
    ru: "Напиши сообщение",
  },

  contact: {
    eng: "Contact me on Telegram, Whatsapp, Mail, GitHub",
    ru: "Свяжись со мной Telegram, Whatsapp, Mail, GitHub",
  },
};

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

var button = document.querySelector(".header .two");
var about = document.querySelector("#about");

button.addEventListener("click", () => {
  // console.log('клик')
  scrollTo(about);
});

var button = document.querySelector(".header .three");
var skill = document.querySelector("#skills");

button.addEventListener("click", () => {
  scrollTo(skill);
});

var button = document.querySelector(".header .four");
var port = document.querySelector("#portfolio");

button.addEventListener("click", () => {
  scrollTo(port);
});

var button = document.querySelector(".header .five");
var contact = document.querySelector("#contacts");

button.addEventListener("click", () => {
  scrollTo(contact);
});

// function block(element) {
//     window.
// }

// window.onload = () => {
//     window.onscroll = function(e) {
//         let winY = window.scrollY;
//         if (winY > 300) {
//             progressBar();

//             scrollBarAnimation();

//             winY = null;
//         }
//     };

//     window.onscroll() = () => {
//         if(window.screenY > 500) {
//             document.querySelector('.arrowUp').classList.remove('isShowTop')
//         }
//     }
// }

const offset = 600;
const scrollUp = document.querySelector(".arrowUp");
const scrollUpSvgPath = document.querySelector(".scroll-up_svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = `stroke-dashoffset 20ms`;

const updateDashoffset = () => {
  // scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  updateDashoffset();

  if (getTop() > offset) {
    scrollUp.classList.add("arrowUp-active");
  } else {
    scrollUp.classList.remove("arrowUp-active");
  }
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let check = document.getElementById("check");

check.onclick = function () {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "dark-mode.css") {
    theme.href = "light-mode.css";
  } else {
    theme.href = "dark-mode.css";
  }
};

function changeLang(lang) {
  const opps = {"ru" : "eng", "eng": "ru"}

  for (let i = 0; i < Object.keys(langArr).length; i++) {
    document.querySelector(`.${Object.keys(langArr)[i]}`).textContent =
      langArr[Object.keys(langArr)[i]][lang];
  }
  document.querySelector(`.${lang} a`).style.color = "white";
  document.querySelector(`.${opps[lang]} a`).style.color = "gray";
}

// select.addEventListener('change', changeURLLanguage);

// function changeURLLanguage() {
//     let lang = select.value;
//     location.href = window.location.pathname + '#' + lang;
//     // location.reload()
// }

// window.onscroll = function showHeader () {

//     var header = document.querySelector('.header');

//     if(window.pageYOffset > 500) {
//         header.classList.add('header_fixed');
//         console.log('hello')
//     }

// }
