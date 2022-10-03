$(document).ready(function(){
    let lista = $('.circulos');
    console.log(lista.length);    
    $(lista).hide();
    $(lista[0]).show();
    let i = 0;

    $('#adelante').click(
        function(){
                if(i < lista.length-1){
                    i = i + 1;
                    $(lista).hide();
                    $(lista[i]).show();
                }else{
                    i = 0;
                    $(lista).hide();
                    $(lista[i]).show();
                }

        }
    );

    $('#atras').click(
        function(){
                if(i > 0){
                    i = i - 1;
                    $(lista).hide();
                    $(lista[i]).show();
                }else{
                    i = lista.length-1;
                    $(lista).hide();
                    $(lista[i]).show();
                }

        }
    );

});
