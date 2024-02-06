const body = document.querySelector("body"),
  links = document.querySelectorAll('a[href="#"]'),
  nav = document.querySelector("header nav"),
  logoImage = document.querySelector("header nav .logo img"),
  navToggle = document.querySelector("header nav .toggle"),
  navSpanMiddle = document.querySelector("header nav .toggle .middle"),
  navNavigationBar = document.querySelector("header nav .navigation-bar"),
  navNavigationBarLi = document.querySelectorAll(
    "header nav .navigation-bar li"
  );

// toggle hamburger menu button
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navSpanMiddle.classList.toggle("hide");
  navNavigationBar.classList.toggle("show");
});

// show active navigationbar li
// navNavigationBarLi.forEach(li =>
//   li.addEventListener("click", () => {
//     const arr = Array.from(li.parentElement.children);
//     arr.forEach(li => li.classList.remove("active"));
//     li.classList.add("active");
//   })
// );

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".notification").style.display = "block";
  }, 1500);
});

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

const cookieBox = document.querySelector(".cookies__container"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  if (document.cookie.includes("pães d'casa")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if (button.id == "aceitarBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie =
          "cookiePdc= pães d'casa; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener("load", executeCodes);

$(window).on('load', function() {

  let nbImg = 0;
  $('.slider .container-images img').each(function() {
    nbImg += 1;
  });

  $('.slider .arrow').click(function() {
    let n = imageActive();
    
    $('.slider').removeClass('right left');

    if($(this).hasClass('left')) { 
      n -= 1;
      $('.slider').addClass('left');
      setTimeout(function() {
        $('.slider .container-images img.active').addClass('to_left');
      }, 50)
    }
    else if($(this).hasClass('right')) { 
      n += 1;
      $('.slider').addClass('right');
      setTimeout(function() {
        $('.slider .container-images img.active').addClass('to_right');
      }, 50)
    }

    if(n > nbImg) n = 1;
    if(n < 1) n = nbImg;

    setTimeout(function() {
      $('.slider .container-images img').removeClass('active');
      $('.slider .container-images img:nth-child('+n+')').addClass('active');
    
      setTimeout(function() {
        $('.slider .container-images img').removeClass('to_left');
        $('.slider .container-images img').removeClass('to_right');
      }, 500)
    }, 50)
  });

  function imageActive() {
    let n = 1;
    $('.slider .container-images img').each(function(index) {
      if($(this).hasClass('active')) {
        n += index;
      }
    });
    return n;
  }

});


$(window).on('load', function() {

  let nbImg = 0;
  $('.slider .container-images .caption span').each(function() {
    nbImg += 1;
  });

  $('.slider .arrow').click(function() {
    let n = imageActive();
    
    $('.slider').removeClass('right left');

    if($(this).hasClass('left')) { 
      n -= 1;
      $('.slider').addClass('left');
      setTimeout(function() {
        $('.slider .container-images .caption span.active').addClass('to_left');
      }, 50)
    }
    else if($(this).hasClass('right')) { 
      n += 1;
      $('.slider').addClass('right');
      setTimeout(function() {
        $('.slider .container-images .caption span.active').addClass('to_right');
      }, 50)
    }

    if(n > nbImg) n = 1;
    if(n < 1) n = nbImg;

    setTimeout(function() {
      $('.slider .container-images .caption span').removeClass('active');
      $('.slider .container-images .caption span:nth-child('+n+')').addClass('active');
    
      setTimeout(function() {
        $('.slider .container-images .caption span').removeClass('to_left');
        $('.slider .container-images .caption span').removeClass('to_right');
      }, 500)
    }, 50)
  });

  function imageActive() {
    let n = 1;
    $('.slider .container-images .caption span').each(function(index) {
      if($(this).hasClass('active')) {
        n += index;
      }
    });
    return n;
  }

});