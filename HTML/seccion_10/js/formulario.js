$(document).ready(function () {
    //metodo para escuchar el evento de tipo submit del formulario
    $("#simpleform").on('submit', function (event) {
        //evita el renvio de formulario
        event.preventDefault();

        let isValid = true;
        let errorMessage = "";
        let successMessage = "";
        // eliminar mensaje previos
        $('.error').remove();
        $('#formMessage').empty();

        //validacion del formulario
        const username = $("#username").val().trim();
        if (username === "") {
            isValid = false;
            $("#username").after('<span class="error" > El nombre de usuarios es obligatorio</span>');
        } else {
            const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailPattern.test(email)) {
                isValid = false;
                $("#email").after('<span class="error"> Ingrese un email valido </span>');
            }
        }

        //validacion de la contraseña
        const password = $("#password").val().trim();
        if (password === "") {
            isValid = false;
            $("#password").after('<span class="error"> La contrasena es obligatoria </span>');
        }
        if (isValid) {
            successMessage = '<p class="success"> Formulario enviado exitosamente</p>'
            $("#formMessage").html(successMessage);
        } else {
            errorMessage = '<p class="error"> Por favor corrige los errores en el formulario</p>'
            $("#formMessage").html(errorMessage);
        }



    });


});