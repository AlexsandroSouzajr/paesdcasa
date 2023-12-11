const body = document.querySelector("body"),
  pageTitle = document.querySelector("title"),
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

  (function () {
    let darkMode = localStorage.getItem("darkMode");
    const darkSwitch = document.getElementById("switch");
  
    const enableDarkMode = () => {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkMode", "enabled");
    };
  
    const disableDarkMode = () => {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkMode", null);
    };
  
    if (darkMode === "enabled") {
      enableDarkMode();
    }
  
    darkSwitch.addEventListener("click", () => {
      darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  })();

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

links.forEach(link =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
  })
);

var $info = $('.tooltip');
$info.each( function () {
  var dataInfo = $(this).data("tooltip");
  $( this ).append('<span class="inner" >' + dataInfo + '</span>');
});

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

// window.addEventListener("scroll", function () {
//   var nav = document.querySelector("nav");
//   nav.classList.toggle("sticky", window.scrollY > 0);
// })


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 0 | document.documentElement.scrollTop > 0) {
//     document.querySelector("nav").style.top = "0px"; // 10px
//   } else {
//     document.querySelector("nav").style.top = "-100px";
//   }
// }

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".notification").style.display = "block";
  }, 1500);
});

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

MorphSVGPlugin.convertToPath('polygon');
var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  pContainer = select('.pContainer'),
  mainSVG = select('.mainSVG'),
  star = select('#star'),
  sparkle = select('.sparkle'),
  tree = select('#tree'),
  showParticle = true,
  particleColorArray = ['#E8F6F8', '#ACE8F8', '#F6FBFE','#A2CBDC','#B74551', '#5DBA72', '#910B28', '#910B28', '#446D39'],
  particleTypeArray = ['#star','#circ','#cross','#heart'],
  particleTypeArray = ['#star'],
  particlePool = [],
  particleCount = 0,
  numParticles = 201


gsap.set('svg', {
  visibility: 'visible'
})

gsap.set(sparkle, {
	transformOrigin:'50% 50%',
	y:-100
})

let getSVGPoints = (path) => {
	
	let arr = []
	var rawPath = MotionPathPlugin.getRawPath(path)[0];
	rawPath.forEach((el, value) => {
		let obj = {}
		obj.x = rawPath[value * 2]
		obj.y = rawPath[(value * 2) + 1]
		if(value % 2) {
			arr.push(obj)
		}
		//console.log(value)
	})
	
	return arr;
}
let treePath = getSVGPoints('.treePath'),
    treeBottomPath = getSVGPoints('.treeBottomPath'),
    mainTl = gsap.timeline({delay:0, repeat:0}),
    starTl;

function flicker(p){

  gsap.killTweensOf(p, {opacity:true});
  gsap.fromTo(p, {
    opacity:1
  }, {
		duration: 0.07,
    opacity:Math.random(),
    repeat:-1
  })
}

function createParticles() {
  
  var i = numParticles, p, particleTl, step = numParticles/treePath.length, pos;
  while (--i > -1) {
    
    p = select(particleTypeArray[i%particleTypeArray.length]).cloneNode(true);
    mainSVG.appendChild(p);
    p.setAttribute('fill', particleColorArray[i % particleColorArray.length]);
    p.setAttribute('class', "particle");   
    particlePool.push(p);
    //hide them initially
    gsap.set(p, {
                 x:-100, 
                 y:-100,
   transformOrigin:'50% 50%'
                 })
    
    

  }

}

var getScale = gsap.utils.random(0.5, 3, 0.001, true);

function playParticle(p){
  if(!showParticle){return};
  var p = particlePool[particleCount]
 gsap.set(p, {
	 x: gsap.getProperty('.pContainer', 'x'),
	 y: gsap.getProperty('.pContainer', 'y'),
	 scale:getScale()
    }
    );
var tl = gsap.timeline();
  tl.to(p, {
		duration: gsap.utils.random(0.61,6),
      physics2D: {
        velocity: gsap.utils.random(-23, 23),
        angle:gsap.utils.random(-180, 180),
        gravity:gsap.utils.random(-6, 50)
      },
      scale:0,
      rotation:gsap.utils.random(-123,360),
      ease: 'power1',
      onStart:flicker,
      onStartParams:[p],
      onRepeat: (p) => {
        gsap.set(p, {         
            scale:getScale()
        })
      },
      onRepeatParams: [p]

    });
  

  particleCount++;
  particleCount = (particleCount >=numParticles) ? 0 : particleCount
  
}

function drawStar(){
  
  starTl = gsap.timeline({onUpdate:playParticle})
  starTl.to('.pContainer, .sparkle', {
		duration: 6,
		motionPath :{
			path: '.treePath',
      autoRotate: false
		},
    ease: 'linear'
  })  
  .to('.pContainer, .sparkle', {
		duration: 1,
    onStart:function(){showParticle = false},
    x:treeBottomPath[0].x,
    y:treeBottomPath[0].y
  })
  .to('.pContainer, .sparkle',  {
		duration: 2,
    onStart:function(){showParticle = true},
		motionPath :{
			path: '.treeBottomPath',
      autoRotate: false
		},
    ease: 'linear'    
  },'-=0')
.from('.treeBottomMask', {
		duration: 2,
  drawSVG:'0% 0%',
  stroke:'#',
  ease:'linear'
},'-=2')  
   
}


createParticles();
drawStar();

mainTl.from(['.treePathMask','.treePotMask'],{
	duration: 6,
  drawSVG:'0% 0%',
  stroke:'#',
	stagger: {
		each: 6
	},
  duration: gsap.utils.wrap([6, 1,2]),
  ease:'linear'
})
.from('.treeStar', {
	duration: 3,
  scaleY:0,
  scaleX:0.15,
  transformOrigin:'50% 50%',
  ease: 'elastic(1,0.5)'
},'-=4')

 .to('.sparkle', {
	duration: 3,
    opacity:0,
    ease:"rough({strength: 2, points: 100, template: linear, taper: both, randomize: true, clamp: false})"
  },'-=0')
  .to('.treeStarOutline', {
	duration: 1,
    opacity:1,
    ease:"rough({strength: 2, points: 16, template: linear, taper: none, randomize: true, clamp: false})"
  },'+=1')

mainTl.add(starTl, 0)
gsap.globalTimeline.timeScale(1.5);


// typical import
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 