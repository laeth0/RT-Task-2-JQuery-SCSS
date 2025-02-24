$(document).ready(function() {
    $("#myForm").validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
            }
        },
        messages: {
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email"
            },
            password: {
                required: "Please enter your password",
                minlength: "Password must be 8 characters at least",
                pattern: function() {
                    let password = $("#password").val();
                    if (!/[A-Z]/.test(password)) return "Please enter one capital letter at least";
                    if (!/[a-z]/.test(password)) return "Please enter one small letter at least";
                    if (!/\d/.test(password)) return "Please enter one digit at least";
                    if (!/[@$!%*?&]/.test(password)) return "Please enter one special character at least";
                }
            }
        },
        errorPlacement: function(error, element) {
            let id = element.attr("id") + "-error";
            $("#" + id).text(error.text());
        },
        success: function(label, element) {
            let id = $(element).attr("id") + "-error";
            $("#" + id).text("");
        }
    });
});
