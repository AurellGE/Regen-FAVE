$("#form").validate({
    rules:{
        name:{
            minlength: 3,
        },
        email:{
            email: true
        },
        phone:{
            Number: true
        },
        linkedin:{
            URL: true
        },
        subject:{
            minlength: 5
        },
        message:{
            minlength: 10
        }
    },

    submitHandler: function(form) {
      form.submit();
    }
   });