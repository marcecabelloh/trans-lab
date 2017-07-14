/*llama api saldo Bip!*/
//id de mi botón
$("#boton-saldo").on("click", function(e){
	e.preventDefault();
      var id = ($("#num-tarjeta").val());//id de mi input 
      var inputCalcular = ($("#calcularTarifa").val());
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
        //función para imprimir calculo de saldo

        var valor1 = $('#alto').val();
        var valor2 = $('#medio').val();
        var valor3 = $('#bajo').val();
        

        .fail(function(){
            console.log("error");
        });
           });


