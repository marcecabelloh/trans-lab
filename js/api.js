/*llama api saldo Bip!*/
//id de mi botón


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

       .fail(function(){
            console.log("error");
        });
           });




