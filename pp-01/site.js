
$('#contact-form').on('submit',
  function(e) {
    var phone = $('#phone').val();
    var email = $('#email').val();
    var birthday = $('#birthday').val();
    var check = new Date();
    check = new Date(check.setYear(check.getYear() - 18));
    var agecheck = check.getYear();
    var check2 = /\d{10}/;
    var check3 = /.*@.*/;
    e.preventDefault();
    if (!(birthday > agecheck)) {
      console.log('must be 18 years or older');
      alert('You must be 18 years or older');
      return false;
    }
    if(!(check2.test(phone)))
    {
      console.log('invalid phone number');
      alert('Please enter a valid telephone number');
      return false;
    }
    if(!(check3.test(email)))
    {
      console.log('invalid email address');
      alert('Please enter a valid email address');
      return false;
    }
    else {
      $(this).remove();
      $('body').append('<h1>Thank You! Your form has been submitted. Email Address: ' + email + '</h1>');
    }
  }
);
