
    $("#addFarmerForm").validate({
        rules: {
            farmer_name: {
                required: true,
                minlength: 5
            },
            pickmarket: {
                required: true
            },
            contact: {
                required: false,
                minlength: 5
            },
            farmerdetail: {
                required: true,
                minlength: 5
            }            
        },
        //For custom messages
        messages: {
            farmer_name: {
                required: "Please enter farmer's name",
                minlength: "Enter at least 5 characters"
            },
            farmerdetail: {
                required: "Please tell us something about your favorite farmer.",
                minlength: "Enter at least 5 characters"
            },
            contact: {
                minlength: "Enter at least 5 characters"
            },
            pickmarket: "Pick a farmer's market for your favorite farmer!",
        },
        errorElement: 'div',
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    }); 