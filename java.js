$(document).ready(function(){
    let lista = $('.circulos');
    let i = 0;
    console.log(lista.length);    
    let siguiente = $('#adelante');
    let atras = $('#atras');
    

    $(lista).hide();
    $(lista[0]).show();

    $(siguiente).click(
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

    window.addEventListener('scroll',()=>{
        let animado = document.getElementsByClassName('pieDePagina');
        let posicion = animado[0].getBoundingClientRect().top
        let tamañoPantalla = window.innerHeight/1.5;

        if(posicion < tamañoPantalla){
            animado[0].style.webkitAnimation= 'mostrar 5s forwards ';
            
        }

        /*496.890625*/
    });
    

});

