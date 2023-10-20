const body = document.querySelector("body"),
  pageTitle = document.querySelector("title")
  document.title = "Pães d'Casa - Início";
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

function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'pt' }, 'google_translate_element');
}

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

const Pãesd_Casa = document.querySelectorAll('.Pãesd_Casa');
window.addEventListener('load', function () {
  Pãesd_Casa.forEach(item => {
    item.classList.remove('Pãesd_Casa')
  })
});

const wrapperloading = document.querySelectorAll('.wrapper__loader');
window.addEventListener('load', function () {
  wrapperloading.forEach(item => {
    item.classList.remove('wrapper__loader')
  })
});

const wrappertextboxloading = document.querySelectorAll('.wrapper__text-box_loader');
window.addEventListener('load', function () {
  wrappertextboxloading.forEach(item => {
    item.classList.remove('wrapper__text-box_loader')
  })
});

const wrapperimgloading = document.querySelectorAll('.wrapper__img_loader');
window.addEventListener('load', function () {
  wrapperimgloading.forEach(item => {
    item.classList.remove('wrapper__img_loader')
  })
});

const aboutloading = document.querySelectorAll('.about__loader');
window.addEventListener('load', function () {
  aboutloading.forEach(item => {
    item.classList.remove('about__loader')
  })
});

const aboutimgloading = document.querySelectorAll('.about__img_loader');
window.addEventListener('load', function () {
  aboutimgloading.forEach(item => {
    item.classList.remove('about__img_loader')
  })
});

const slideloading = document.querySelectorAll('.slide__loader');
window.addEventListener('load', function () {
  slideloading.forEach(item => {
    item.classList.remove('slide__loader')
  })
});

const ccloading = document.querySelectorAll('.container__combos_loader');
window.addEventListener('load', function () {
  ccloading.forEach(item => {
    item.classList.remove('container__combos_loader')
  })
});

const cardloading = document.querySelectorAll('.card__loader');
window.addEventListener('load', function () {
  cardloading.forEach(item => {
    item.classList.remove('card__loader')
  })
});

const featuresloading = document.querySelectorAll('.features__loader');
window.addEventListener('load', function () {
  featuresloading.forEach(item => {
    item.classList.remove('features__loader')
  })
});

const featureItemloading = document.querySelectorAll('.feature__item_loader');
window.addEventListener('load', function () {
  featureItemloading.forEach(item => {
    item.classList.remove('feature__item_loader')
  })
});


const thloading = document.querySelectorAll('.th__loader');
window.addEventListener('load', function () {
  thloading.forEach(item => {
    item.classList.remove('th__loader')
  })
});

const testimonialsloading = document.querySelectorAll('.testimonials__loader');
window.addEventListener('load', function () {
  testimonialsloading.forEach(item => {
    item.classList.remove('testimonials__loader')
  })
});

const profileimgloading = document.querySelectorAll('.profile__img_loader');
window.addEventListener('load', function () {
  profileimgloading.forEach(item => {
    item.classList.remove('profile__img_loader')
  })
});

const socialLoading = document.querySelectorAll('.social__loader');
window.addEventListener('load', function () {
  socialLoading.forEach(item => {
    item.classList.remove('social__loader')
  })
});

const btntop = document.querySelectorAll('.btntop__loader');
window.addEventListener('load', function () {
  btntop.forEach(item => {
    item.classList.remove('btntop__loader')
  })
});


const AnimateOnScroll = function ({ offset } = { offset: 10 }) {
  // Define a dobra superior, inferior e laterais da tela
  const windowTop = offset * window.innerHeight / 100;
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

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


window.addEventListener('load', function() {
	setTimeout(lazyLoad, 1000);
});

function lazyLoad() {
	var card_images = document.querySelectorAll('.card-image');
	
	card_images.forEach(function(card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');
		
		content_image.src = image_url;
		content_image.addEventListener('load', function() {

			card_image.style.backgroundImage = 'url(' + image_url + ')';
			card_image.className = card_image.className + ' is-loaded';
		});
    
	});
}