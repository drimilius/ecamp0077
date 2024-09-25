$(document).ready(function(){
    // ocultar y motstrar texto
    $("#palancaButton").click(function(){
        $("#parrafo").toggle();
    })
    //metodo para cambiar de color  un evento de mouse
    $("#parrafo2").mouseenter(function(){ 
        $(this).css("background-color", "yellow");
    }).mouseleave(function(){ 
        $(this).css("background-color", "red");    

    })
    //caja animada para boton
    $("#animate").click(function(){
    $("#box").animate({ 
        width: "200px",
        height: "200px",
        opacity: 0.2,
        marginLeft: "50%",
        marginTop: "30%",
        fontSize: "100px"
        }, 1000);
    })   
});
