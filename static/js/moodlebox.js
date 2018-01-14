$('.dropdown-toggle').click(function(e) {
  if ($(document).width() > 768) {
    e.preventDefault();
    var url = $(this).attr('href');
    if (url !== '#') {
      window.location.href = url;
    }
  }
});

$('.dropdown').hover(function(e) {
  if ($(document).width() > 750) {
    $(this).children('a').addClass('open');
  }
}, function(e) {
  if ($(document).width() > 750) {
    $(this).removeClass('open');
    $(this).children('a').blur();
    $(this).children('a').removeClass('open');
  }
});
