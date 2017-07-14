/*códigos relacionados a validación de inputs mail y password y que al hacer click en boton redireccione a siguiente página*/
var url = "index2.html"; //variable que redirecciona a index 2 	
$(document).ready(function() {
	$("#btn").click(function(event) {
		email();
		password();
	});
	function email(){
		var email = $("#email").val();
		if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){
  			alert("Por favor ingresa un correo electrónico válido");
		}
	}
	
	function password(){
		var password = $("#password").val();
		if(!(/^\d{8}([0-9])*$/.test(password)) ){
			alert("Por favor ingresa una contraseña de 8 dígitos")
		}else{
		
			$('#btn').attr('href', url);// al hacer click en boton y si se llenan los campos correctamente, nos envía a index2
		}
	}
});


/*perfil usuario: que al ingresar número de tarjeta bip imprima número dentro de una caja*/

$('#btn-tarjeta').click(function(){
	valorTarjeta = $('#tarjeta').val();
	var cajita= $('#contenedor').append('<input type= number>');
	cajita.html(valorTarjeta);


})