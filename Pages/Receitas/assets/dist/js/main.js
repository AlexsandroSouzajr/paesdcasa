const body = document.querySelector("body"),
  pageTitle = document.querySelector("title")
  document.title = "Pães d'Casa - Receitas";
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
  footerSection = document.querySelector("footer");

function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'pt' }, 'google_translate_element');
}

const modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle");

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


const navigation = document.querySelectorAll('.navigation');
window.addEventListener('load', function () {
  navigation.forEach(item => {
    item.classList.remove('navigation')
  })
});

const slideloading = document.querySelectorAll('.slide__loader');
window.addEventListener('load', function () {
  slideloading.forEach(item => {
    item.classList.remove('slide__loader')
  })
});

const loading = document.querySelectorAll('.loading');
window.addEventListener('load', function () {
  loading.forEach(item => {
    item.classList.remove('loading')
  })
});

const cardloader = document.querySelectorAll('.card-item__loader');
window.addEventListener('load', function () {
  cardloader.forEach(item => {
    item.classList.remove('card-item__loader')
  })
});

const loadertitle = document.querySelectorAll('.loader__title');
window.addEventListener('load', function () {
  loadertitle.forEach(item => {
    item.classList.remove('loader__title')
  })
});

const loadersocial = document.querySelectorAll('.loader__social');
window.addEventListener('load', function () {
  loadersocial.forEach(item => {
    item.classList.remove('loader__social')
  })
});

const loadertop = document.querySelectorAll('.loader__btntop');
window.addEventListener('load', function () {
  loadertop.forEach(item => {
    item.classList.remove('loader__btntop')
  })
});




const AnimateOnScroll = function ({ offset } = { offset: 10 }) {
  // Define a dobra superior, inferior e laterais da tela
  const windowTop = offset * window.innerHeight / 850;
  const windowBottom = window.innerHeight - windowTop;
  const windowLeft = 0;
  const windowRight = window.innerWidth;

  this.start = element => {
    window.requestAnimationFrame(() => {
      // Seta os atributos customizados
      element.style.animationDelay = element.dataset.animationDelay;
      element.style.animationDuration = element.dataset.animationDuration;

      // Inicia a animacao setando a classe para animar
      element.classList.add(element.dataset.animation);

      // Seta o elemento como animado
      element.dataset.animated = "true";
    });
  };

  this.inViewport = element => {
    // Obtem o boundingbox do elemento
    const elementRect = element.getBoundingClientRect();
    const elementTop =
    elementRect.top + parseInt(element.dataset.animationOffset) ||
    elementRect.top;
    const elementBottom =
    elementRect.bottom - parseInt(element.dataset.animationOffset) ||
    elementRect.bottom;
    const elementLeft = elementRect.left;
    const elementRight = elementRect.right;

    // Verifica se o elemento esta na tela
    return (
      elementTop <= windowBottom &&
      elementBottom >= windowTop &&
      elementLeft <= windowRight &&
      elementRight >= windowLeft);

  };

  // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
  this.verifyElementsInViewport = (els = elements) => {
    for (let i = 0, len = els.length; i < len; i++) {
      // Passa para o proximo laço se o elemento ja estiver animado
      if (els[i].dataset.animated) continue;

      this.inViewport(els[i]) && this.start(els[i]);
    }
  };

  // Obtem todos os elementos a serem animados
  this.getElements = () =>
  document.querySelectorAll("[data-animation]:not([data-animated])");

  // Atualiza a lista de elementos a serem animados
  this.update = () => {
    elements = this.getElements();
    elements && this.verifyElementsInViewport(elements);
  };

  // Inicia os eventos
  window.addEventListener("load", this.update, false);
  window.addEventListener(
  "scroll",
  () => this.verifyElementsInViewport(elements),
  { passive: true });

  window.addEventListener(
  "resize",
  () => this.verifyElementsInViewport(elements),
  { passive: true });

};


const options = {
  offset: 15
};

const animation = new AnimateOnScroll(options);