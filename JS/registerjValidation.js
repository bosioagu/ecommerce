let validateMail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
let validateUSer= /^[A-Za-z0-9_-]{5,15}$/;
let validatePassword = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;


$(()=>{
    $("#registerForm").submit ((e)=>{
        e.preventDefault()
        let datosFormulario = new FormData(e.target)
        $('.errorMsg').hide();

        if (!validateMail.test(datosFormulario.get("email"))){
            $('#erroremail').show()
        }else{
            if(!validateUSer.test(datosFormulario.get("username"))){
                $('#errorusername').show();
            }else{
                if(!validatePassword.test(datosFormulario.get("password"))){
                    $('#errorpassword').show();
                }else{
                    alert(`Usuario ${datosFormulario.get("username")} creado`)
                    $("#registerForm").trigger("reset")
                }
        }
        }
    })
})