// ATTACK ON TITAN
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// BLEACH


var modalTwo = document.getElementById("modalTwo");

// Get the button that opens the modal
var btnOne = document.getElementById("bleach");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeTwo")[0];

// When the user clicks the button, open the modal 
btnOne.onclick = function() {
  modalTwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalTwo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
}

// JIGOKURAKU


var modalThree = document.getElementById("modalThree");

// Get the button that opens the modal
var btnTwo = document.getElementById("gabi");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeThree")[0];

// When the user clicks the button, open the modal 
btnTwo.onclick = function() {
  modalThree.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalThree.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalThree) {
    modalThree.style.display = "none";
  }
}

// MASHLE


var modalFour = document.getElementById("modalFour");

// Get the button that opens the modal
var btnThree = document.getElementById("mashle");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeFour")[0];

// When the user clicks the button, open the modal 
btnThree.onclick = function() {
  modalFour.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalFour.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFour) {
    modalFour.style.display = "none";
  }
}

// MHA

var modalFive = document.getElementById("modalFive");

// Get the button that opens the modal
var btnFour = document.getElementById("mha");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeFive")[0];

// When the user clicks the button, open the modal 
btnFour.onclick = function() {
    modalFive.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalFive.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFive) {
    modalFive.style.display = "none";
  }
}

// // VINLAND SAGA
var modalSix = document.getElementById("modalSix");

// Get the button that opens the modal
var btnFive = document.getElementById("saga");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeSix")[0];

// When the user clicks the button, open the modal 
btnFive.onclick = function() {
  modalSix.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalSix.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSix) {
    modalSix.style.display = "none";
  }
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}