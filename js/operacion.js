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
	var tiempo_casa = 0;

	function Tiempo_total_casa() {
		$("select[name=casa]").each(function() {
			tiempo_casa += parseInt($(this).val());
		});
		return horab + (tiempo_casa * 0.5);
	}
	function Tiempo_total_servicios(){
		return $("input:checked").length;
	}
	function Tiempo_total() {
		// Tiempo_total_casa + Tiempo_total_servicios
		Tiempo_total_casa();
		Tiempo_total_servicios();

		$("#tiempo").text(Tiempo_total_casa() + Tiempo_total_servicios());
	}
	Tiempo_total();

	$("select").change(function() {
		Tiempo_total();
	});
	$("input[type=checkbox]").change(function() {
		Tiempo_total();
	});

});