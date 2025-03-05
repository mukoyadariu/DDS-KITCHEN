let menus = document.querySelector("nav")
let menuBtn = document.querySelector(".menu-btn")
let closeBtn = document.querySelector(".close-btn")

menuBtn.addEventListener("click",function(){
    menus.classList.add("active");
})

closeBtn.addEventListener("click",function(){
    menus.classList.remove("active");
})

// swiper js code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
      },
      968:{
        slidesPerView: 3,
      },
    }
  });

  const SectionCenter = document.querySelector('.menus_items_container');
  const filterBtns = document.querySelectorAll('.btn_cat'); // fixed the class name
  
  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const category = e.currentTarget.dataset.id; // changed to lowercase 'category'
      const menuCategory = menu.filter(function(menuItem) {
        if (menuItem.category === category) { // changed to lowercase 'category'
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItem(menu); // fixed function name
      } else {
        displayMenuItem(menuCategory); // fixed function name
      }
    });
  });
  
  const menu = [
    {
      id: 1,
      title: "lasgna",
      category: "Dinner", // changed to match the filter condition
      price: 25,
      img: "../img/images.jpg"
    },
    {
      id: 2,
      title: "lasgna",
      category: "Lunch", // changed to match the filter condition
      price: 25,
      img: "../img/images.jpg"
    },
    {
      id: 3,
      title: "lasgna",
      category: "Drinks", // changed to match the filter condition
      price: 25,
      img: "../img/images.jpg"
    },
    {
      id: 4,
      title: "lasgna",
      category: "Starter", // changed to match the filter condition
      price: 25,
      img: "../img/images.jpg"
    },
    {
      id: 5,
      title: "lasgna",
      category: "Drinks",
      price: 25,
      img: "../img/images.jpg"
    },
    {
      id: 6,
      title: "lasgna",
      category: "Starter",
      price: 25,
      img: "../img/images.jpg"
    },
    {
      id: 7,
      title: "lasgna",
      category: "Dinner",
      price: 25,
      img: "../img/images.jpg"
    },
    {
      id: 8,
      title: "lasgna",
      category: "Lunch",
      price: 25,
      img: "../img/images.jpg"
    },
    {
      id: 9,
      title: "lasgna",
      category: "Dinner",
      price: 25,
      img: "../img/images.jpg"
    },
  ];
  
  window.addEventListener("DOMContentLoaded", function() {
    displayMenuItem(menu); // fixed function name
  });
  
  function displayMenuItem(menuItem) { // fixed function name
    let displayMenusItem = menuItem.map(function(item) {
      return `<div class="img_cards">
                <img src="${item.img}" alt="" />
                <p class="price"> Only On ${item.price} Dollars</p>
                <p>${item.title}</p>
              </div>`;
    });
  
    displayMenusItem = displayMenusItem.join("");
    SectionCenter.innerHTML = displayMenusItem;
  }
// static counter start
const countersEl = document.querySelectorAll('.num');

countersEl.forEach((countersEl) => {
  countersEl.innerText = "0";
  increamentCounter();

  function increamentCounter() {
    let currentNum = +countersEl.innerText;
    const dataCeil = countersEl.getAttribute("data-ceil");
    const increament = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increament);

    if (currentNum < dataCeil) {
      countersEl.innerText = currentNum;
      setTimeout(increamentCounter, 70);
    } else {
      countersEl.innerText = dataCeil;
    }
  }
});
// static counter close

// Sticky menus start
const nav = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
// Sticky menus close

// Parallax effect
const Parallax = document.querySelector('#showcase');
window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  Parallax.style.transform = `translateY(${offset * 0.7}px)`; 
});
