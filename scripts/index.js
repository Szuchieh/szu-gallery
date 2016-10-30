$(document).ready(function(){
  $('.button-collapse').sideNav({closeOnClick: true});
  $(window).on('hashchange', function(){
    render(decodeURI(window.location.hash));
  });
  var currentURL = '#ProductDesign';
  function fadeOutCurrentURL(hash) {
    switch (hash) {
      case '#ProductDesign':
        $('.ProductDesign').fadeOut(300);
        break;
      case '#GraphicDesign':
        $('.GraphicDesign').fadeOut(300);
        break;
      case '#About':
        $('.About').fadeOut(300);
        break;
      case '#Ava':
        $('.Ava').fadeOut(300);
        break;
      case '#Chime':
        $('.Chime').fadeOut(300);
        break;
    }
  }

  function render(url) {
    switch (url) {
      case '#ProductDesign':
        fadeOutCurrentURL(currentURL);
        $('.ProductDesign').delay(300).fadeIn(300);
        currentURL = url;
        break;
      case '#GraphicDesign':
        fadeOutCurrentURL(currentURL);
        $('.GraphicDesign').delay(300).fadeIn(300);
        currentURL = url;
        break;
      case '#About':
        fadeOutCurrentURL(currentURL);
        $('.About').delay(300).fadeIn(300);
        currentURL = url;
        break;
      case '#Ava':
        fadeOutCurrentURL(currentURL);
        $('.Ava').delay(300).fadeIn(300);
        currentURL = url;
        break;
      case '#Chime':
        fadeOutCurrentURL(currentURL);
        $('.Chime').delay(300).fadeIn(300);
        currentURL = url;
        break;
    }
  }

  $('.GraphicDesign').hide();
  $('.About').hide();
  $('.Ava').hide();
  $('.Chime').hide();
  window.location.hash = currentURL;
});

// Nav Auto Hiding/Showing
var didScroll;
var lastScrollTop = 0;
var delta = 3;
var navbarHeight = $('.Navigation').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  } else if (st > lastScrollTop && st > navbarHeight){
    $('.Navigation').animate({
      'margin-top': "-64",
    }, 200, function() {
    });
  } else if (st + $(window).height() < $(document).height()) {
    $('.Navigation').animate({
      'margin-top': "0",
    }, 200, function() {
    });
  }
  lastScrollTop = st;
}
