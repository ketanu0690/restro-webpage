// for search
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

//   for menu bar
menuBar = () => {
  var x = document.querySelector("#navbar2");
  console.log(x);
  console.log("came here");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
};


// to enabel dark theme
var dark = document.getElementById('dark');
dark.onclick = function (x) {
  document.body.classList.toggle("dark-theme");
}


//  preloader 
$(document).ready(function() {
  console.log("preloder");
  preloaderFadeOutTime = 500;
  function hidePreloader() {
  var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });

