$(document).ready(function(){});

function activeFormulario(){
    $("#formulario").addClass('active');
    setTimeout(function(){
        $("#formulario").find('form').animate({
            opacity: 1
        }, 1000);
    }, 800)
}
function deactiveFormulario(){
    $("#formulario").removeClass('active');
    setTimeout(function(){
        $("#formulario .fContainer").find('form').remove();
    },300);
}