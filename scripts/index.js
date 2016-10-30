$(document).ready(function(){
  $(window).trigger('hashchange'); // Need it?

  $('.button-collapse').sideNav({closeOnClick: true});

  $(window).on('hashchange', function(){
    render(decodeURI(window.location.hash));
  });

  function render(url) {
    switch (url) {
      case '#Home':
        $('.Ava').hide();
        $('.Chime').hide();
        $('.About').hide();
        $('.Homepage').show();
        break;
      case '#About':
        $('.Ava').hide();
        $('.Chime').hide();
        $('.About').show();
        $('.Homepage').hide();
        break;
      case '#Ava':
        $('.Ava').show();
        $('.Chime').hide();
        $('.About').hide();
        $('.Homepage').hide();
        break;
      case '#Chime':
        $('.Ava').hide();
        $('.Chime').show();
        $('.About').hide();
        $('.Homepage').hide();
        break;
      default:

    }
  }
});
