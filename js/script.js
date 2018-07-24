$(document).ready(function(){$(".button-collapse").sideNav({closeOnClick:true}); $('.slider').slider(); inserirVideo(); menu(); expandir(); showVideo();});$(window).resize(function(){});$(window).scroll(function(){menu();});$(window).load(function(){});function quadrado(e){return $(e).height($(e).width())}function menu(){var a=window.pageYOffset;if(a>100){$("nav").addClass("active");$("#topo").css({"background-color":"white"});$(".button-collapse").css({"color":"#000"})}else{$("nav").removeClass("active"); $("#topo").css({"background-color":"transparent"}); $(".button-collapse").css({"color":"white"})};} function expandir(){ $("#cases ul li a").click(function(){ $(this).offsetParent().offsetParent().find(".expandir").addClass("active"); }); $(".expandir i").click(function(){ $(this).offsetParent().removeClass("active"); });}
function showVideo(){
    $(".banner ul li a").click(function(){
        var a = $(this).attr("data-url");
        $(".exibir").addClass("active");
        $(".banner").css({"z-index":"999"});
        $(".exibir .frame").html('<iframe width="800" height="450" src="'+a+'" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>')
    })

    $(".exibir i").click(function(){
        $(this).offsetParent().removeClass("active");
        $(".exibir .frame").html("");
        $(".banner").css({"z-index":"1"});
    })
}
function inserirVideo(){
    $("#conheca-a-faster .close").click(function(){
        $("#conheca-a-faster .over").empty();
        $("#conheca-a-faster .over").removeClass("active");
        $("#conheca-a-faster .close").css({"display":"none"});
    })
    $("#conheca-a-faster button").click(function(){
        $("#conheca-a-faster .over").addClass("active");
        $("#conheca-a-faster .over").html('<iframe width="850" height="478" src="https://www.youtube.com/embed/f415B2B6_0M?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
        $("#conheca-a-faster .close").css({"display":"block"});
    })
}

//menu();