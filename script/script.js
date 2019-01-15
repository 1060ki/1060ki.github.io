$(window).on('scroll', function() {
  var $this = $(this);
  var scrollPosition = $(window).height() + $(window).scrollTop();

  $('.c-headline').each(function(_, elem) {
    var $elem = $(elem);
    if ($elem.position().top < scrollPosition) {
      $elem.find('.c-headline__text').css({'display': 'inline-block'});
    }
  })
});
