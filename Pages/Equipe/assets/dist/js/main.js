const body = document.querySelector("body"),
  pageTitle = document.querySelector("title")
  document.title = "Pães d'Casa - Nossa equipe";
  links = document.querySelectorAll('a[href="#"]'),
  nav = document.querySelector("header nav"),
  logoImage = document.querySelector("header nav .logo img"),
  navToggle = document.querySelector("header nav .toggle"),
  navSpanMiddle = document.querySelector("header nav .toggle .middle"),
  navNavigationBar = document.querySelector("header nav .navigation-bar"),
  navNavigationBarLi = document.querySelectorAll(
    "header nav .navigation-bar li"
  ),
  headerSection = document.querySelector("header"),
  aboutSection = document.querySelector(".about"),
  footerSection = document.querySelector("footer");

// function googleTranslateElementInit() {
//   new google.translate.TranslateElement({ pageLanguage: 'pt' }, 'google_translate_element');
// }

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');

  
select.addEventListener('click', () => {
  select.classList.toggle('select-clicked');
  caret.classList.toggle('caret-rotate');
  menu.classList.toggle('menu-open');
});

options.forEach(option => {
  option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
    
      options.forEach(option => {
        option.classList.remove('active');
        });
          option.classList.add('active');
  });
});
});

const modeToggle = document.querySelector(".dark-light");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}


modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");


  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});


links.forEach(link =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
  })
);

// toggle hamburger menu button
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navSpanMiddle.classList.toggle("hide");
  navNavigationBar.classList.toggle("show");
});

// show active navigationbar li
navNavigationBarLi.forEach(li =>
  li.addEventListener("click", () => {
    const arr = Array.from(li.parentElement.children);
    arr.forEach(li => li.classList.remove("active"));
    li.classList.add("active");
  })
);

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 | document.documentElement.scrollTop > 0) {
    document.querySelector("nav").style.top = "10px";
  } else {
    document.querySelector("nav").style.top = "-100px";
  }
}