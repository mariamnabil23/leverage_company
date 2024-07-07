// loading page

// loading page
window.addEventListener("load", function () {
  $(window).ready(function () {
    $(".loader").fadeOut(1200, function () {
      $("body").css("overflow", "auto");
      $(".loading-spiner").fadeOut(1500);
    });
  });
});

// animation
wow = new WOW({
  boxClass: "animate__animated", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();

// net animation
// VANTA.NET({
//   el: "#home",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 650.0,
//   minWidth: 300.0,
//   scale: 1.0,
//   scaleMobile: 1.0,
//   color: 0x70741,
//   backgroundColor: 0xa0a2a,
//   points: 20.00,
//   maxDistance: 13.00,
//   spacing: 14.00
// });


// AOS ANIMATION
AOS.init({
  duration: 800,
  anchorPlacement: 'center-bottom'
});




