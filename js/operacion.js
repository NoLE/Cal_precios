/*


$(document).ready(function() {

	var Operacion = function(){
		var incremento = 1000; 
		var suma = $("input:checked").length;
		$("#resultado").text(suma * incremento);
	};
	Operacion();
	$("input[type=checkbox]").on('click', Operacion);
	
});

}*/

$(document).ready(function() {
	var horab = 1.5;
	var vhora = 6000;
	var tiempo_total_serv = 0;
	$("select").change(function() {
		var tiempo_casa = 0;
		function Tiempo_total_casa() {
			$("select[name=casa").each(function() {
			tiempo_casa += parseInt($(this).val());
			});
			tc = horab + (tiempo_casa * 0.5);
			return tc;
			}
		
		Tiempo_total_casa();
	});
	function Tiempo_total_servicios(){
		var suma = $("input:checked").length;
	}
	function Precio_total(Tiempo_total_casa()) {
		// body...
	}
});