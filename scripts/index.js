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
});
