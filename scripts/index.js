$(document).ready(function(){

  // var updateTimeline = function functionName(num) {
  //   for (var i = 1; i <= num; i++) {
  //     $(`#timeline-${i}`).addClass('complete');
  //   }
  //   for (var j = 6; j > num; j--) {
  //     $(`#timeline-${j}`).removeClass('complete');
  //   }
  // }
  //
  // $('#ava-timeline').on('scrollSpy:enter', function() {
  //   $('#timeline-title').fadeOut(300);
  //   $(`#ava-timeline`).addClass('timeline-container-fixed');
  // });
  //
  // $('#ava-stage1').on('scrollSpy:enter', function() {
  //   updateTimeline(1);
  // });
  // $('#ava-stage2').on('scrollSpy:enter', function() {
  //   updateTimeline(2);
  // });
  // $('#ava-stage3').on('scrollSpy:enter', function() {
  //   updateTimeline(3);
  // });
  // $('#ava-stage4').on('scrollSpy:enter', function() {
  //   updateTimeline(4);
  // });
  // $('#ava-stage5').on('scrollSpy:enter', function() {
  //   updateTimeline(5);
  // });
  // $('#ava-stage6').on('scrollSpy:enter', function() {
  //   updateTimeline(6);
  // });
  //
  // var offset = $(window).height();
  // $('#ava-timeline').scrollSpy({offset: 1000});
  // $('#ava-stage1').scrollSpy();
  // $('#ava-stage2').scrollSpy();
  // $('#ava-stage3').scrollSpy();
  // $('#ava-stage4').scrollSpy();
  // $('#ava-stage5').scrollSpy();
  // $('#ava-stage6').scrollSpy();



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
    var scrollToTop = function() {
      window.scrollTo(0, 0);
    };
    switch (url) {
      case '#ProductDesign':
        fadeOutCurrentURL(currentURL);
        $('.ProductDesign').delay(300).fadeIn(300);
        setTimeout(scrollToTop, 300);
        currentURL = url;
        break;
      case '#GraphicDesign':
        fadeOutCurrentURL(currentURL);
        $('.GraphicDesign').delay(300).fadeIn(300);
        setTimeout(scrollToTop, 300);
        currentURL = url;
        break;
      case '#About':
        fadeOutCurrentURL(currentURL);
        $('.About').delay(300).fadeIn(300);
        setTimeout(scrollToTop, 300);
        currentURL = url;
        break;
      case '#Ava':
        fadeOutCurrentURL(currentURL);
        $('.Ava').delay(300).fadeIn(300);
        setTimeout(scrollToTop, 300);
        currentURL = url;
        break;
      case '#Chime':
        fadeOutCurrentURL(currentURL);
        $('.Chime').delay(300).fadeIn(300);
        setTimeout(scrollToTop, 300);
        currentURL = url;
        break;
    }
  }

  // $('.ProductDesign').hide();
  $('.GraphicDesign').hide();
  $('.About').hide();
  $('.Ava').hide();
  $('.Chime').hide();
  window.location.hash = currentURL;
});

// Nav Auto Hiding/Showing
var didScroll;
var lastScrollTop = 0;
var delta = 25;
var navbarHeight = 64;

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
  } else if (st + $(window).height() >= $(document).height() - navbarHeight){
    $('.Navigation').animate({
      'margin-top': "0",
    }, 200, function() {
    });
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
