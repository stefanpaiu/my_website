var prevScrollpos = window.pageYOffset;
const comingSoon = $(".coming-soon-label");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $(".navbar").css("top", 0);
  } else {
    $(".navbar").css("top", -87 +"px");
  }
  prevScrollpos = currentScrollPos;
};

comingSoon.click(function() {
    if(comingSoon.text() === "COMING SOON") {
        comingSoon.text("REALLY SOON!");
    }
    else {
        comingSoon.text("COMING SOON");
    } 
});