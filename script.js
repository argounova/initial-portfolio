$( document ).ready(function() {
    console.log( "ready!" );

$('#image1b').on('mouseenter', function(){
    $('#image1b').toggle();
    $('#image1a').toggle();
    $('#image1a').css('border','none');
    $('#image1a').css('box-shadow','5px 5px 5px #AC82B8');
});

$('#image1a').on('mouseleave', function(){
    $('#image1a').toggle();
    $('#image1b').toggle();
});

$('#image2b').on('mouseenter', function(){
    $('#image2b').toggle();
    $('#image2a').toggle();
    $('#image2a').css('border','none');
    $('#image2a').css('box-shadow','5px 5px 5px #AC82B8');
});
$('#image2a').on('mouseleave', function(){
    $('#image2a').toggle();
    $('#image2b').toggle();
});

$('#image3b').on('mouseenter', function(){
    $('#image3b').toggle();
    $('#image3a').toggle();
    $('#image3a').css('border','none');
    $('#image3a').css('box-shadow','5px 5px 5px #AC82B8');
});
$('#image3a').on('mouseleave', function(){
    $('#image3a').toggle();
    $('#image3b').toggle();
});

$('#image4b').on('mouseenter', function(){
    $('#image4b').toggle();
    $('#image4a').toggle();
    $('#image4a').css('border','none');
    $('#image4a').css('box-shadow','5px 5px 5px #AC82B8');
});
$('#image4a').on('mouseleave', function(){
    $('#image4a').toggle();
    $('#image4b').toggle();
});

$('#image5b').on('mouseenter', function(){
    $('#image5b').toggle();
    $('#image5a').toggle();
    $('#image5a').css('border','none');
    $('#image5a').css('box-shadow','5px 5px 5px #AC82B8');
});
$('#image5a').on('mouseleave', function(){
    $('#image5a').toggle();
    $('#image5b').toggle();
});

$('#contactModal').on('hidden.bs.modal', function () {
  $('input[type=email]').each(function() {
    this.value = "";
  });
  $('input[type=text]').each(function() {
    this.value = "";
  });
});

$('#btn-formSent').on('click', function() {
  location.reload();
});

function formSubmit(e) {
  e.preventDefault();
  emailjs.init('ZElOBNy_cU2ZofiP0');
  console.log(this);
  this.contact_number.value = Math.random() * 100000 | 0;
  emailjs.sendForm('service_peaz7nq', 'template_iuipk7c', this)
    .then(function(response) {
      $('#formSent').modal('show');
      console.log('Email sent', response.status, response.text);
    }, function(error) {
      $('#formFail').modal('show');
      console.log('Email failed to send...', error);
    });
}

$('#contact-form').on('submit', formSubmit);

});