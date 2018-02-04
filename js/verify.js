$(document).ready(function() {
  // Variables
  var $input = $('#phone-number');
  var $randInput1 = $('#rand-num-1');
  var $randInput2 = $('#rand-num-2');
  var $randInput3 = $('#rand-num-3');
  var $spanCodePhoneNumber = $('#country-code');
  var $nextButton = $('#next-button');
  //  Asignándole valor al span que contienen el valor del código del número telefónico escogido segun el país en la anterior vista
  $spanCodePhoneNumber.text('+' + localStorage.codePhoneNumber);
  // Asignándole el método focus a los inputs donde se introducirán los digitos del código pasado
  $randInput1.focus();
  $randInput2.focus();
  $randInput3.focus();
  // Verificando si el código enviado al usuario es el adecuado
  var $counter = 0;
  $randInput1.on('input', function() {
    debugger;
    if ($randInput1.val() === localStorage.firstDigit) {
      $counter += 1;
    }
  });

  $randInput2.on('input', function() {
    debugger;
    if ($randInput2.val() === localStorage.secondDigit) {
      $counter += 1;
    }
  });

  $randInput3.on('input', function() {
    debugger;
    if ($randInput3.val() === localStorage.thirdDigit) {
      $counter += 1;
    }
  });

  if ($counter === 3) {
    debugger;
    $nextButton.removeAttr('disabled');
  } else {
    $nextButton.attr('diasbled', true);
  }
});
