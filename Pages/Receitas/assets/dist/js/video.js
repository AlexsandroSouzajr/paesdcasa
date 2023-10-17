$(document).ready(function () {
  $(".video-gallery").magnificPopup({
    delegate: "a",
    type: "iframe",
    gallery: {
      enabled: true
    }
  });
});

$(document).ready(function () {
  $(".video-gallery2").magnificPopup({
    delegate: "a",
    type: "iframe",
    gallery: {
      enabled: true
    }
  });
});

$(document).ready(function () {
  $(".video-gallery3").magnificPopup({
    delegate: "a",
    type: "iframe",
    gallery: {
      enabled: true
    }
  });
});


// -> filter-receitas config  <- //
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");


const filterCards = (e) => {
  document.querySelector("#filter-buttons .active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach(card => {
    // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
    if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
      return card.classList.replace("hide", "show");
    }
    card.classList.add("hide");
  });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));
// -> Fim | filter-receitas config | <- //



// -> sl-buttons config  <- //
const slButtons = document.querySelectorAll("#sl-buttons .togglesbtn");


const selectionCards = (e) => {
  document.querySelector("#sl-buttons .active").classList.remove("active");
  e.target.classList.add("active");
}

slButtons.forEach(button => button.addEventListener("click", selectionCards));
   // -> Fim | sl-buttons config | <- //