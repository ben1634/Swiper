console.log("JavaScript loaded");
const sideToggle = document.querySelector(".navy");
const sidebar = document.querySelector(".sidebar");
const outer = document.querySelector(".middle-content");
const searchBtn = document.querySelector(".search-btn");
const searchHead = document.querySelector(".s-head");
const answer = document.querySelector(".answer");
const faqs = document.querySelectorAll(".faq");
const faqIcon = document.querySelectorAll(".faqy");
const ques = document.querySelectorAll(".ques");
const content = document.querySelector(".content");
const dashboardBtn = document.querySelector(".label1");
const searchBar = document.getElementById("search-input");
const sidebarContent = document.getElementById("sidebar-content");
const sidelinks = document.querySelectorAll("[data-panel]");
const sidebar2 = document.querySelector(".sidebar2");
const hamBtn = document.querySelector(".ham");
const navbar = document.querySelector(".navbar");
const navlinks = document.querySelector(".navlinks");
const navToggle = document.querySelector(".navbar");






const version = "14.0.5";

const today = new Date();

const options = {
  month: "long",
  day: "numeric",
  year: "numeric"
};

document.getElementById("release-date").textContent =
`v${version} released on ${today.toLocaleDateString("en-US", options)}`;







// Two functions
function openSearch() {
  searchHead.classList.add("active");

  searchBar.focus();
}

function closeSearch() {
  searchHead.classList.remove("active");
}





// Search Button

searchBtn.addEventListener("click", openSearch);

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key.toLowerCase() == "k") {
    event.preventDefault();

    openSearch();
  }
});

// ctrl plus k search

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key.toLowerCase() === "k") {
    event.preventDefault();

    searchHead.classList.add("active");
    searchBar.focus();
  }
});








// outside to close searchbar

searchHead.addEventListener("click", (e) => {
  if (e.target === searchHead) {
    closeSearch();
  }
});

// Escape to close searchbar

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearch();
  }
});




// Search Button

searchBtn.addEventListener("click", function () {
  searchHead.classList.toggle("active");
});

sideToggle.addEventListener("click", function () {
  sidebar.classList.toggle("open");
});

outer.addEventListener("click", function () {
  sidebar.classList.remove("open");
});

// Page-load-remove

window.addEventListener("load", () => {
  sidebar.classList.remove("open");
});




// FAQ

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
    } else {
      faq.classList.add("active");
    }
  });
});

faqIcon.forEach((faqy) => {
  faqy.addEventListener("click", () => {
    faqy.classList.toggle("active");
  });
});





var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});














/*
 const progressCircle = document.querySelector('.autoplay-progress svg');
      const progressContent = document.querySelector('.autoplay-progress span');
      var swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty('--progress', 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
          },
        },
      });
*/



/*
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


*/











