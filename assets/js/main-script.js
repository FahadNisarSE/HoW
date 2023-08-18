// JS FOR FIXED TOP NAV ON SCROLL

// let nav = document.getElementById('topNav');
// console.log(nav);

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   nav.style.position = 'fixed';
//   nav.style.background = 'white';

// }

// JS FOR TOP NAV'S MEGA MENU

document.addEventListener("DOMContentLoaded", function () {
  /////// Prevent closing from click inside dropdown
  document.querySelectorAll('.dropdown-menu').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })
  
  // JS for colored top nav on scroll & again transparent on page top
  
  const navbar = document.getElementById("topNav");
  
  window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  })
});

