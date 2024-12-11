// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}


// Gsap scroll animation

gsap.to("#main",{
  backgroundColor:"#fff",
  duration:0.5,
  scrollTrigger:{
      trigger:"nav",
      scroller:"body",
      // markers:true,
      start:"top -30%",
      end:"top -80%",
      scrub:1
  }
})


//       const video = document.getElementById('Video');

// window.addEventListener('scroll', () => {
//   const videoBottom = video.getBoundingClientRect().bottom;
//   const viewportHeight = window.innerHeight;

//   if (videoBottom <= 0) {
//     video.pause(); // Pause the video when it scrolls out of view
//   } else {
//     video.play(); // Play the video if it's in view
//   }
// });

