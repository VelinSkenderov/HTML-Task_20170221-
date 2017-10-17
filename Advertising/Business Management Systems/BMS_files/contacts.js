$(function(){
        var options = {
            beforeSubmit:  before,
            success: after
        };

        $("#feedback").validate({
            submitHandler: function(form) {
                $(form).ajaxSubmit(options);
            },
            rules: {
                fname: {
                    required: true,
                    minlength: 4
                },
                lname: {
                    required: true,
                    minlength: 4
                },
            }
        });
});

function after(responseText, statusText, xhr, $form)  {
  var obj = jQuery.parseJSON( responseText );
  $('#output').removeClass("hidden").addClass('alert-'+ obj.status ).html(obj.data);
  if( obj.status == 'success') {
    $('[type="reset"]').trigger('click');

  }
  $('#output').fadeout('slow').delay(5000);
}

function before(formData, jqForm, options) {
    $('#output').removeClass().addClass('alert hidden').empty();
}