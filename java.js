        function abrir_ventana(){
            window.open("https://www.youtube.com/watch?v=YbxADoU1yK8&ab_channel=WmediaporJuanAndr%C3%A9sN%C3%BA%C3%B1ez");

        }
        function parar_abrir(){
            clearTimeout(pop);
        }
        pop = setInterval("abrir_ventana()",3000);
