/* MoodleBox web site specific Javascript code */

/* Make dropdown link work correctly when clicked */
$('.dropdown-toggle').click(function(e) {
  if ($(document).width() > 750) {
    e.preventDefault();
    var url = $(this).attr('href');
    if (url !== '#') {
      window.location.href = url;
    }
  }
});

/* Make dropdown open on hover and close when leaving */
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

/* Donation form */
$("input[name='radio-donation-level']:radio").change(function() {
  var parent_form = $(this).parents('form');
  parent_form.find('.give-default-level, .give-radio-input').removeClass('give-default-level');
  $(this).addClass('give-default-level');
  if ( $.isNumeric($(this).val()) ) {
    parent_form.find('.give-text-input').val($(this).val());
  }
  else {
    parent_form.find('.give-text-input').focus();
  }
});
$("input[name='amount']#give-amount").focus(function() {
  var parent_form = $(this).parents('form');
  parent_form.find('.give-default-level, .give-radio-input').removeClass('give-default-level');
  parent_form.find('.give-radio-input').prop('checked', false);
  parent_form.find('.give-radio-input.give-radio-level-custom').prop('checked', true);
});
