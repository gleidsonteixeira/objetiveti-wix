function criarTexto(){
    var palco = document.getElementById('palco');
    var html = '<li class="texto click">'+
                    '<i class="material-icons">notes</i> Texto'+
                    '<div class="deletarTexto"><i class="material-icons">delete</i></div>'+
                    '<div class="editarTexto"><i class="material-icons">create</i></div>'+
                '</li>';
    palco.innerHTML = html;
}
function listarTexto(){}
function editarTexto(){
    var container = $('.fContainer');
    $(document).on('click', '.texto .editarTexto', function(){
        var html =  '<form method="post">'+
                        '<h6>Escreva seu texto <span class="fecharTexto">fechar [x]</span></h6>'+
                        '<div class="input-field">'+
                            '<input id="textarea" type="text">'+
                            '<label for="textarea">Seu texto</label>'+
                        '</div>'+
                        '<button type="submit">Confirmar</button>'+
                    '</form>';
        container.prepend(html);
        activeFormulario();
    });
    $(document).on('click', '.fecharTexto', function(){
        deactiveFormulario();
    })
}editarTexto();
function deletarTexto(){
    $(document).on('click', '.deletarTexto', function(){
        $(this).parent().remove();
    });
}deletarTexto();