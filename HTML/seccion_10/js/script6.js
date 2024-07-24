$(document).ready(function(){
    $('#myForm').on('submit', function(event){
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        // Validación de campos
        let isValid = true;
        $('input, textarea').each(function(){
            if($(this).val() === '') {
                isValid = false;
                $(this).next('.error').remove();
                $(this).after('<span class="error">Este campo es requerido</span>');
            } else {
                $(this).next('.error').remove();
            }
        });

        if(isValid) {
            // Envío de datos mediante AJAX
            let formData = {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            };

            $.ajax({
                type: 'POST',
                url: 'https://ejemplo.com/api/enviar', // Reemplaza con la URL real de tu servidor
                data: formData,
                success: function(response){
                    $('#response').html('<p>Mensaje enviado exitosamente</p>');
                    $('#myForm')[0].reset(); // Limpia el formulario
                },
                error: function(){
                    $('#response').html('<p>Ocurrió un error al enviar el mensaje</p>');
                }
            });
        }
    });
});
