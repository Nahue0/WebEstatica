$(document).ready(()=>{ 
    let seleccion = [$('#cero'),$('#uno')];
    let otraVariable = [$('#pelea')];
    console.log(seleccion);
    $('#cero').on('click',function(){
        $.ajax({
            type: 'GET',
            url: 'battlesData.json',
            dataType: 'json'
            
        }).done((data)=>{
            
                let vegetta = data[1];
                
                document.getElementById("tituloCabecera").innerHTML = "Holaaa";
                
                
            // $.each(data,function(indice,informacion){
            //     /*informacion, contiene al json con id:"" description:"", es decir una lista de los objetos json*/
                
            //     let nombreCuadro = $('<div class="table-tittle">');
            //     nombreCuadro.append(informacion.id);
            //     document.getElementById("tituloCabecera").innerHTML = informacion.id;

            //     let columna = $('<div class = "table-content">');
                
            //     let arregloDescription ;

            //     let infor = informacion.description;

            //     $(infor).each(function(index){
            //         /*Esto recorre las claves "description" de cada batalla*/
            //         arregloDescription = infor[index].id;
                    
            //         /*each es una funcion que recorre todo los elementos de la lista */
            //         $(arregloDescription).each(function(index)
            //             {
            //                 columna.append(arregloDescription[index]);
            //                 $('#tabla').append(columna);
            //                 columna = $('<div class = "table-content">');
            //             }   
            //         );
                    
                    
            //     });
                
                
                
                

            // });
        });
    });

});