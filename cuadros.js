$(document).ready(function(){
    let mostrar  = $('.mostrar')
    let texto = document.getElementsByName('tablaD');
    let gokuNube = $('#gokuNube');
    $(texto).hide();
    
    $(mostrar[0]).on('click',function(mostrar){
        if($(texto[0]).is(':visible')){
            $(texto[0]).hide();
        }else{
            $(texto).hide();
            $(texto[0]).show();
        }
    });

    $(mostrar[1]).on('click',function(){
        if($(texto[1]).is(':visible')){
            $(texto[1]).hide();
        }else{
            $(texto).hide();
            $(texto[1]).show();
        }
    });

    $(mostrar[2]).on('click',function(){
        if($(texto[2]).is(':visible')){
            $(texto[2]).hide();
        }else{
            $(texto).hide();
            $(texto[2]).show();
        }
    });

    
});