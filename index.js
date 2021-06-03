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


// const searchBar = document.getElementById("search");
// searchBar.addEventListener("keyup", e => { 
//   const searchString = e.target.value; 
// });
// console.log(searchString)

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

// function googleTranslateElementInit() { 
//   new google.translate.TranslateElement(
//       {pageLanguage: 'en'}, 
//       'google_translate'
//   )}

// $(document).ready(function() {

//   var delay = 300; // milliseconds
//   var cookie_expire = 0; // days

//   var cookie = localStorage.getItem("list-builder");
//   if(cookie == undefined || cookie == null) {
//       cookie = 0;
//   }

//   if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
//       $("#list-builder").delay(delay).fadeIn("fast", () => {
//           $("#popup-box").fadeIn("fast", () => {});
//       });

//       $("button[name=subscribe]").click(() => {
//         $.post($("#popup-form").attr("action"), { name: $("input[name=name]").val(), email: $("input[name=email]").val(), list: $("input[name=list]").val() }, (result) => {
//           $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Polyglot Developer newsletter!</p>");
//         });
//       });

//       $("#popup-close").click(() => {
//           $("#list-builder, #popup-box").hide();
//           localStorage.setItem("list-builder", (new Date()).getTime());
//       });
//   }

// });