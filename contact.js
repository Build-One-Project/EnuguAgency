// //Get the button:
// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 50px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener('click', () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// })

// function googleTranslateElementInit() { 
//   new google.translate.TranslateElement(
//       {pageLanguage: 'en'}, 
//       'google_translate'
// )}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}