// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
// Our Custom Javascript or jQuery Codes is given below.
$(document).ready(function(){
	// ACTIVE CLASS
	$("nav ul li a").click(function(){$("nav ul li a").removeClass("actives"),$(this).addClass("actives")}),
	$("nav a img.logo").click(function(){$("nav ul li a").removeClass("actives"),$("nav ul li:first-child a").addClass("actives")});
	// OWL CAROUSEL SLIDER
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		margin: 15,
		items: 1,
		loop: true,
		autoplay: false,
		autoplayTimeout: 10000,
		autoplayHoverPause: false,
		autoplaySpeed: false,
		dragEndSpeed: false,
		freeDrag: false,
		dots: false,
		nav: true,
		startPosition: 0,
		responsiveClass: true,
		responsiveRefreshRate: true
	});
	// ANIMATION EFFECT
	wow = new WOW();
	wow.init();
});
// MOBILE MENU
function openNav() {
	document.getElementById('myNav').style.width = "100%";
}
function closeNav() {
	document.getElementById('myNav').style.width = "0%";
}