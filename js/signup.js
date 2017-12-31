$(document).ready(function() {
  var $flagButton = $('#main-flag-button');
  var $li1 = $('#flag-li-1');
  var $li2 = $('#flag-li-2');
  var $li3 = $('#flag-li-3');
  var $clickedLi;
  var $input = $('#phone-number');
  var mainFlag;
  var $flag;
  var $span = $('#main-flag-button span');
  var $nextButton = $('#next-button');
  var MAXCHARACTERS = 12; // es 12 Y no 10, porque si bien te piden que el número debe ser de 10 digitos, la indicación no cuenta el código del país.
  $input.val('52');

  $li1.click(function() {
    $flag = $('#flag-li-1 img');
    $mainFlag = $('#main-flag-button img');
    $flagButton.html($flag);
    $flagButton.append($span);
    $span.addClass('spacing');
    $flag.removeClass('flags');
    $flag.addClass('main-flag');
    $flagButton.removeClass('.btn .caret');
    $li1.html($mainFlag);
    $mainFlag.addClass('flags');
    $input.val('57');
    if ($('#main-flag-button img').data('country') === 'mex') {
      $input.val('52');
    }
    if ($('#main-flag-button img').data('country') === 'co') {
      $input.val('57');
    }
    if ($('#main-flag-button img').data('country') === 'pe') {
      $input.val('51');
    }
    if ($('#main-flag-button img').data('country') === 'us') {
      $input.val('01');
    }
  });
  $li2.click(function() {
    $flag = $('#flag-li-2 img');
    $mainFlag = $('#main-flag-button img');
    $flagButton.html($flag);
    $flagButton.append($span);
    $span.addClass('spacing');
    $flag.removeClass('flags');
    $flag.addClass('main-flag');
    $flagButton.removeClass('.btn .caret');
    $li2.html($mainFlag);
    $mainFlag.removeClass('main-flag');
    $mainFlag.addClass('flags');
    $input.val('51');
    if ($('#main-flag-button img').data('country') === 'mex') {
      $input.val('52');
    }
    if ($('#main-flag-button img').data('country') === 'co') {
      $input.val('57');
    }
    if ($('#main-flag-button img').data('country') === 'pe') {
      $input.val('51');
    }
    if ($('#main-flag-button img').data('country') === 'us') {
      $input.val('01');
    }
  });
  $li3.click(function() {
    $flag = $('#flag-li-3 img');
    $mainFlag = $('#main-flag-button img');
    $flagButton.html($flag);
    $flagButton.append($span);
    $span.addClass('spacing');
    $flag.removeClass('flags');
    $flag.addClass('main-flag');
    $flagButton.removeClass('.btn .caret');
    $li3.html($mainFlag);
    $mainFlag.addClass('flags');
    $input.val('01');
    if ($('#main-flag-button img').data('country') === 'mex') {
      $input.val('52');
    }
    if ($('#main-flag-button img').data('country') === 'co') {
      $input.val('57');
    }
    if ($('#main-flag-button img').data('country') === 'pe') {
      $input.val('51');
    }
    if ($('#main-flag-button img').data('country') === 'us') {
      $input.val('01');
    }
  });
  $input.on('input', function(event) {
    if (event.target.value.trim()) {
      $characters = $input.val();
      if (jQuery.type($characters) === 'string') {
        console.log(event.target.value.trim().length);
        var actualNumberOfCharacters = MAXCHARACTERS - event.target.value.trim().length;
        if (actualNumberOfCharacters === 0) {
          $nextButton.removeAttr('disabled');
          $input.addClass('green-border');
        }
        if (actualNumberOfCharacters <= -1 || actualNumberOfCharacters > 0) {
          $nextButton.attr('disabled', 'true');
          $input.removeClass('green-border');
        }
      }
    }
  });
});
