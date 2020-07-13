//button code
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 350px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function() {
  // nav_scroll();
  scrollFunction();
}

// status: ongoing
// document.getElementById("read_more").addEventListener( 'click' , changeClass);
// 
// function changeClass() {
//   var content = document.getElementById("extra_content");
//   var btn = document.getElementById("read_more");
//   content.classList.toggle('show');
// 
//   if (content.classList.contains("show")) {
//       btn.innerHTML = "Show Less";
//   } else {
//       btn.innerHTML = "Show More";
//   }
// }

// navbar scroll view
// status: ongoing
// var prevScrollpos = window.pageYOffset;
// function nav_scroll() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-60px";
//   }
//   prevScrollpos = currentScrollPos;
// }

