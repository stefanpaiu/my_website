var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("nav").outerHeight();

// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});

// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
    {
        return;
    }

    // If current position > last position AND scrolled past navbar...
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $("nav").addClass("nav-up");
    } else {
        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        if(st + $(window).height() < $(document).height()) { 
        $("nav").removeClass("nav-up");
        }
    }
    lastScrollTop = st;
}

// For navbar to hide, but it does not disappear
$(".navbar-toggler").click(function(){
  $("#navbarTogglerDemo02").toggleClass("show");
})