$(document).ready(function() {
  // Variables
  var $input = $('#phone-number');
  var $randInput1 = $('#rand-num-1');
  var $randInput2 = $('#rand-num-2');
  var $randInput3 = $('#rand-num-3');
  var $spanCodePhoneNumber = $('#country-code');
  var $resendButton = $('#button-resend');
  var $nextButton = $('#next-button');
  //  Asignándole valor al span que contienen el valor del código del número telefónico escogido segun el país en la anterior vista
  $spanCodePhoneNumber.text('+' + localStorage.codePhoneNumber);
  // Asignándole el método focus a los inputs donde se introducirán los digitos del código pasado
  $randInput1.focus();
  $randInput2.focus();
  $randInput3.focus();
  // Verificando si el código enviado al usuario es el adecuado
  $randInput3.on('input', function() {
    let $listOfInputs = $('input');
    let $string = '';
    $listOfInputs.each(function(el) {
      $string += $listOfInputs[el].value;
      let $codePhoneNumberUser = localStorage.firstDigit + localStorage.secondDigit + localStorage.thirdDigit;
      if ($string === $codePhoneNumberUser) {
        $nextButton.removeAttr('disabled');
      } else {
        $nextButton.attr('disabled', true);
      }
    });
  });
  /* Reenviando neuvo código al usuario */
  $resendButton.on('click', function() {
    var $randNumber1 = parseInt(Math.random() * 10);
    var $randNumber2 = parseInt(Math.random() * 10);
    var $randNumber3 = parseInt(Math.random() * 10);
    console.log($randNumber1);
    console.log($randNumber2);
    console.log($randNumber3);
    localStorage.firstDigit = $randNumber1;
    localStorage.secondDigit = $randNumber2;
    localStorage.thirdDigit = $randNumber3;
    alert('Tu código: LAB-' + localStorage.firstDigit + localStorage.secondDigit + localStorage.thirdDigit);
    $randInput1.val('');
    $randInput2.val('');
    $randInput3.val(''); 
  });

  $nextButton.one('click', function() {
    setTimeout(function() {
      window.location.href = '../views/signup2.html';
    }, 3000);
  });
});
