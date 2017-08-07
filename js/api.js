/*llama api saldo Bip!*/
//id de mi botón
$(document).ready(function(){ 

$("#boton-saldo").on("click", function(e){
	e.preventDefault();
      var id = ($("#num-tarjeta").val());//id de mi input 
        $.ajax({
            url:'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+id+'',
            type: 'GET',
            datatype: 'json',
           
        })
        .done(function(response){
            console.log(response.saldoTarjeta);
            //id de mi div vació dentro del html5
            $("#imprimir").append('<p class= par-saldo>Su saldo es:</p>' + '<p class= par-resultado>'+ response.saldoTarjeta + '</p>')
        })
        //función para imprimir calculo de saldo: La lógica es tomar el valor de 
        //acuerdo al horario la tarifa correspondiente y que este solo sean números para
        //que puedan restarse con el saldo de la tarjeta y así calcular tu saldo real

           });





    /*calculo de saldo bip de acuerdo a tarifas en distintos horarios*/

    $("#btn-calculo").click(function(e){
        e.preventDefault();
        var tarjeta = $("#calcularTarifa").val();
                $.ajax({
                        url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?data',
                        type: 'GET',
                        dataType: 'json',
                        data: {'bip' : tarjeta}         
                    })  

                    .done(function(el) {
                        var uno = el.saldoTarjeta;                          
                        var res = uno.split("");
                        var res2 = res.splice(1,3); 
                        var res3 = res2.join("");
                        var dos = 740;
                        var resta = res3 - dos;                                             
                        $("#printCalculo").append('<p class= par-saldo>Saldo total si estas en horario alto: $740</p>'+'<br>'+'<p class= par-resultado>'+ '$'+resta +'</p>');
                        /*console.log(resta);*/
                    })                  

                    .done(function(el) {
                        var uno = el.saldoTarjeta;                          
                        var res = uno.split("");
                        var res2 = res.splice(1,3); 
                        var res3 = res2.join("");
                        var dos = 680;
                        var resta = res3 - dos;                                             
                        $("#printCalculo").append('<p class= par-saldo>Saldo total si estas en horario medio: $680</p>'+'<br>'+'<p class= par-resultado>'+ '$'+resta +'</p>');
                        /*console.log(resta);*/
                    })
                    
                    .done(function(el) {
                        var uno = el.saldoTarjeta;                          
                        var res = uno.split("");
                        var res2 = res.splice(1,3); 
                        var res3 = res2.join("");
                        var dos = 640;
                        var resta = res3 - dos;                                             
                        $("#printCalculo").append('<p class= par-saldo>Saldo total si estas en horario bajo: $640</p>'+'<br>'+'<p class= par-resultado>'+ '$'+resta +'</p>');
                        /*console.log(resta);*/
                    })
                    
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        console.log("complete");
                    });
                    
        $("#opciones").on('change', function(){
                    
            switch($('#opciones option:selected').val()) {              
                case '1':                   
                    $("#printCalculo").prepend('<h3>Costo Pasaje</h3>'+'<br>'+'<h5>$740</h5>');  
                                    
                break;

                case '2':
                    $("#printCalculo").prepend('<h3>Costo Pasaje</h3>'+'<br>'+'<h5>$680</h5>');  
                                        
                break;

                case '3':
                    $("#printCalculo").prepend('<h3>Costo Pasaje</h3>'+'<br>'+'<h5>$640</h5>'); 
                                        
                break;  
                default: $("#printCalculo").clear(); break;                                  
            };                              
        }); 
        $("#calcularTarifa").val("");
    });

});