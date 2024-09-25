$(document).ready(function () {
    //metodo para escuchar el evento de tipo sumit del formulario 
    $("#simpleform").on('sumit', function (event) {
        event.preventDefault();

        let isValid = true;
        let errorMessage ="";
        let successMessage ="";
        //eliminar mensaje previos    
        $('.error').remove();
        $('#formMessage').empty();
    
        //validacion del formulario
        const username = $("#username").val().trim();
        if(username === ""){
            isValid = false;
            $("#username").after('<span class="error"> El Nombre de Usuario es Obligatorio</span>');
        } else {
        // Validación del correo electrónico

        const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
                isValid = false;
                $('#email').after('<span class="error"> Ingrese un correo electrónico válido.</span>');
            }
        }
        //validar la contraseña
        const password = $("#password").val().trim();
        if (password === ""){
            isvalid = false;
            $("#password").after('<span class="error"> La Contraseña es obligatoria </span>');
            }
        if (isvalid){ 
            successMessage ='<p class="success"> Formulario enviado exitosamente</p>';
            $("#formMessage").html(successMessage);
        } else {
            errorMessage ='<p class="error"> Hubo un error en el envio del formulario </p>'
            $("#formMessage").html(errorMessage);
        }

    });    

});