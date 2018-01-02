$(document).ready(function() {
  // Variables
  var $inputFirstName = $('#exampleInputFirstName');
  var $inputLastName = $('#exampleInputLastName');
  var $inputEmail = $('#exampleInputEmail');
  var $checkbox = $('#checkbox');
  var $nextButton = $('#next-button-2');
  // Transformando a mayúsculo lo escrito en los input para el nombre y apellido

  $inputFirstName.on('input', function(event) {
    console.log($inputFirstName.val());
    console.log($inputFirstName.val().length);
    $inputFirstName.addClass('name-input');
    if ($inputFirstName.val() === '' && $inputFirstName.val().length < 0) {
      $inputFirstName.removeClass('name-input');
    }
  });

  $inputLastName.on('input', function() {
    console.log($inputLastName.val());
    console.log($inputLastName.val().length);
    $inputLastName.addClass('name-input');
    if ($inputLastName.val() === '' && $inputLastName.val().length < 0) {
      $inputLastName.removeClass('name-input');
    }
  });

  // Validando el correo electrónico

  $inputEmail.on('input', function() {
    var PATTEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    var $result = PATTEMAIL.test($(this).val());
    console.log($(this).val());
    console.log(PATTEMAIL.test($(this).val()));
  });

  // Agregando el atributo checked

  $checkbox.on('click', function() {
    $checkbox.attr('checked', 'true');
    $checkbox.on('click', function() {
      $checkbox.removeAttr('checked');
    });
  });

  // if ($checkbox.attr('checked') === '') {
  //   $checkbox.click(function() {
  //     $checkbox.removeAttr('checked', 'true');
  //   });
  // };

  // Deshabilitando el botón NEXT

  if ($inputFirstName.val() !== '' && $inputLastName.val() !== '' && $checkbox.attr('checked') === true) {
    $nextButton.removeAttr('disabled');
  } else {
    $nextButton.attr('disabled', 'true');
  }
});
