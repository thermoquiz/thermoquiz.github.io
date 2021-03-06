
var PREGUNTA;
var preguntas = [];
var opcion_A = [];
var opcion_B = [];
var opcion_C = [];
var opcion_D = [];

var preguntas_seleccionadas = [];
var bien_o_mal = [];
var respuestas_del_estudiante = [];

var respuesta_correcta;
var respuesta_del_estudiante;

var calif;
var errores;

var nombre_del_estudiante;

var contador;
var numero_de_preguntas; 
var tiempo_maximo;
var tiempo_restante;

//------------------------------------------------------------------------------
var downloadTimer = setInterval(function(){
  if(tiempo_restante <= 0){
    //clearInterval(downloadTimer);
    document.getElementById("relleno").innerHTML = "Tiempo: 0";
  } else {
    document.getElementById("relleno").innerHTML = "Tiempo: " + tiempo_restante;
  }
  tiempo_restante -= 1;
}, 1000);

//------------------------------------------------------------------------------
function iniciar(){

	contador = 0;
	numero_de_preguntas = 20; 
	tiempo_maximo = numero_de_preguntas*20;
	tiempo_restante = tiempo_maximo;
	
	nombre_del_estudiante = document.getElementById("nombre_del_estudiante").value;

	document.getElementById("buttons").style.display = "block";
	document.getElementById("score").style.display = "block";
	document.getElementById("resumen").style.display = "none";
	document.getElementById("question_").style.display = "block";
	
	cargar_preguntas();
	
	calificacion_a_cero();
	
	seleccionar_preguntas();
		
	EXAMEN();

}

//---------------------------------------------------------------------------------
function shuffle(array) {
    let i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}



//------------------------------------------------------------------------------
function seleccionar_preguntas(){
	
	let tmpArray1 = [];
	let tmpArray2 = [];
	
	for (let i=0; i<preguntas.length; i++)
		tmpArray1[i] = i;
	
	tmpArray2 = shuffle(tmpArray1);
	
	for(let i=0; i<numero_de_preguntas; i++)
		preguntas_seleccionadas[i] = tmpArray2[i];
	
	//console.log(preguntas_seleccionadas);
	
}


//------------------------------------------------------------------------------
function EXAMEN(){
	
	actualizar_calificacion();

	//console.log("EXAMEN ", contador, preguntas_seleccionadas[contador], tiempo_restante);
	
	PREGUNTA = preguntas[preguntas_seleccionadas[contador]] + "<br><br>";
	
	mostrar_pregunta();
	
	mostrar_respuestas();
	
}

//------------------------------------------------------------------------------
function mostrar_pregunta(){
	
	
	document.getElementById("question").innerHTML = PREGUNTA;
		
	if(contador >= numero_de_preguntas  || tiempo_restante <= 0)
		document.getElementById("question").innerHTML = "Examen finalizado<br><br>";
	
}

//------------------------------------------------------------------------------
function mostrar_respuestas(){
	
	//console.log(contador, ANSWER);

	var opcion_correcta = "";
	var opcion_falsa = [];

	opcion_correcta = opcion_A[preguntas_seleccionadas[contador]]; 
	opcion_falsa[0] = opcion_B[preguntas_seleccionadas[contador]];		
	opcion_falsa[1] = opcion_C[preguntas_seleccionadas[contador]];
	opcion_falsa[2] = opcion_D[preguntas_seleccionadas[contador]];
	
	respuesta_correcta = aleatorio(1,4);

	if(respuesta_correcta === 1){
		if(aleatorio(1,2)===1){
			document.getElementById("boton_1").innerHTML = opcion_correcta;
			document.getElementById("boton_2").innerHTML = opcion_falsa[2];
			document.getElementById("boton_3").innerHTML = opcion_falsa[1];
			document.getElementById("boton_4").innerHTML = opcion_falsa[0];
		}else{
			document.getElementById("boton_1").innerHTML = opcion_correcta;
			document.getElementById("boton_2").innerHTML = opcion_falsa[0];
			document.getElementById("boton_3").innerHTML = opcion_falsa[1];
			document.getElementById("boton_4").innerHTML = opcion_falsa[2];
		}		
	}
	if(respuesta_correcta === 2){
		if(aleatorio(1,2)===1){
			document.getElementById("boton_1").innerHTML = opcion_falsa[2];
			document.getElementById("boton_2").innerHTML = opcion_correcta;
			document.getElementById("boton_3").innerHTML = opcion_falsa[0];
			document.getElementById("boton_4").innerHTML = opcion_falsa[1];
		}else{
			document.getElementById("boton_1").innerHTML = opcion_falsa[0];
			document.getElementById("boton_2").innerHTML = opcion_correcta;
			document.getElementById("boton_3").innerHTML = opcion_falsa[1];
			document.getElementById("boton_4").innerHTML = opcion_falsa[2];
		}
	}
	if(respuesta_correcta === 3){
		if(aleatorio(1,2)===1){
			document.getElementById("boton_1").innerHTML = opcion_falsa[1];
			document.getElementById("boton_2").innerHTML = opcion_falsa[2];
			document.getElementById("boton_3").innerHTML = opcion_correcta;
			document.getElementById("boton_4").innerHTML = opcion_falsa[0];
		}else{
			document.getElementById("boton_1").innerHTML = opcion_falsa[0];
			document.getElementById("boton_2").innerHTML = opcion_falsa[1];
			document.getElementById("boton_3").innerHTML = opcion_correcta;
			document.getElementById("boton_4").innerHTML = opcion_falsa[2];
		}
	}
	if(respuesta_correcta === 4){
		if(aleatorio(1,2)===1){
			document.getElementById("boton_1").innerHTML = opcion_falsa[2];
			document.getElementById("boton_2").innerHTML = opcion_falsa[1];
			document.getElementById("boton_3").innerHTML = opcion_falsa[0];
			document.getElementById("boton_4").innerHTML = opcion_correcta;

		}else{
			document.getElementById("boton_1").innerHTML = opcion_falsa[0];
			document.getElementById("boton_2").innerHTML = opcion_falsa[1];
			document.getElementById("boton_3").innerHTML = opcion_falsa[2];
			document.getElementById("boton_4").innerHTML = opcion_correcta;
		}
	}

	
	
	if(contador >= numero_de_preguntas || tiempo_restante <= 0){

		mostrar_resumen();

	}

}


//------------------------------------------------------------------------------
function mostrar_resumen(){
		
	let resumen = "";
	
	document.getElementById("buttons").style.display = "none";
	//document.getElementById("score").style.display = "none";
	//document.getElementById("question_").style.display = "none";
	document.getElementById("resumen").style.display = "block";
	
	resumen += "<h2>";
	resumen += "Nombre: "+nombre_del_estudiante+".<br>";
	resumen += "Calif: "+calif+".<br>";
	resumen += "Contestó: "+contador+" de 20 preguntas"+".<br>";
	resumen += "Firma: "+preguntas_seleccionadas[0]+", "+preguntas_seleccionadas[1]+", "+preguntas_seleccionadas[2]+", "+preguntas_seleccionadas[3]+".<br><br>";
	resumen += "</h2>";
	
	for(let i=0; i<numero_de_preguntas; i++){
	
		resumen += (i+1) +". <b>"+ preguntas[preguntas_seleccionadas[i]] + "</b><br>";
		resumen += respuestas_del_estudiante[i] +" "+ bien_o_mal[i]+ "<br><br>";
		
		document.getElementById("resumen").innerHTML = resumen;
		
	}

}


//------------------------------------------------------------------------------
function boton_1()  { respuesta_del_estudiante = 1; respuestas_del_estudiante[contador] = document.getElementById("boton_1").innerHTML; revisar_respuestas(); }
function boton_2()  { respuesta_del_estudiante = 2; respuestas_del_estudiante[contador] = document.getElementById("boton_2").innerHTML; revisar_respuestas(); } 
function boton_3()  { respuesta_del_estudiante = 3; respuestas_del_estudiante[contador] = document.getElementById("boton_3").innerHTML; revisar_respuestas(); } 
function boton_4()  { respuesta_del_estudiante = 4; respuestas_del_estudiante[contador] = document.getElementById("boton_4").innerHTML; revisar_respuestas(); } 

//------------------------------------------------------------------------------
function revisar_respuestas(){
	
	
	
	if(contador < numero_de_preguntas  && tiempo_restante >= 0 ){
		
		if(respuesta_del_estudiante === respuesta_correcta){
			calif += 5;
			bien_o_mal[contador] = "&#10004;";
		}
		else{
			errores += 1;
			bien_o_mal[contador] = "&#10060;";
		}

	}
	
	actualizar_calificacion();
	contador++ ;
	EXAMEN();
}



//------------------------------------------------------------------------------
function calificacion_a_cero(){
	calif = 0;
	errores = 0;
	actualizar_calificacion();
}

//------------------------------------------------------------------------------
function actualizar_calificacion(){

	//document.getElementById("errores").innerHTML = "Errores: " + errores;
	document.getElementById("errores").innerHTML = (contador+1) + " de " + numero_de_preguntas;
	document.getElementById("calif").innerHTML = "Calif: "+ calif;
	//document.getElementById("show_user_name").innerHTML = nombre_del_estudiante +"; "+actividad;
	
	if(contador >= numero_de_preguntas)
	{
		document.getElementById("errores").innerHTML = numero_de_preguntas + " de " + numero_de_preguntas;
	}
	
	


}


//------------------------------------------------------------------------------
function aleatorio(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




//------------------------------------------------------------------------------
function cargar_preguntas()
{

	preguntas[0] = "La Capacidad calorífica (C) de una sustancia:";
	opcion_A[0] = "Es el calor requerido para incrementar la temperatura de una sustancia por grado en Celsius";
	opcion_B[0] = "Permite medir el cambio de entalpía a presión constante";
	opcion_C[0] = "Permite medir el cambio de entropía en un proceso a temperatura constante";
	opcion_D[0] = "Ninguna de las respuestas";

	preguntas[1] = "Medida del grado de desorden:";
	opcion_A[1] = "Entropía";
	opcion_B[1] = "Energía Interna";
	opcion_C[1] = "Entalpía";
	opcion_D[1] = "Energía libre de Gibbs";
	
	preguntas[2] = "Enunciado de la Segunda Ley de la Termodinámica involucra:";
	opcion_A[2] = "Que el universo tiende al caos";
	opcion_B[2] = "Ley de la conservación de la energía";
	opcion_C[2] = "Equilibrio térmico";
	opcion_D[2] = "Entropía es cero en el cero absoluto";

	preguntas[3] = "Enunciado de la Primera Ley de la Termodinámica involucra:";
	opcion_A[3] = "Ley de la conservación de la energía";
	opcion_B[3] = "Que el universo tiende al caos";
	opcion_C[3] = "Equilibrio térmico";
	opcion_D[3] = "Ley de la conservación de la materia";

	preguntas[4] = "Enunciado de la Tercera Ley de la Termodinámica involucra:";
	opcion_A[4] = "Entropía es cero en el cero absoluto";
	opcion_B[4] = "Equilibrio térmico";
	opcion_C[4] = "Universo tiende al caos";
	opcion_D[4] = "Ley de la conservación de la energía";

	preguntas[5] = "La entropía de un elemento puro en su forma condensada estable (sólido o líquido) es cero en el cero absoluto:";
	opcion_A[5] = "Tercera Ley de la Termodinámica";
	opcion_B[5] = "Ley Cero de la Termodinámica";
	opcion_C[5] = "Primera Ley de la Termodinámica";
	opcion_D[5] = "Segunda Ley de la Termodinámica";

	preguntas[6] = "Utilidad de la Tercera Ley de la Termodinámica:";
	opcion_A[6] = "Permite medir entropías absolutas a cualquier temperatura";
	opcion_B[6] = "Permite medir el Cambio de Energía Interna del sistema";
	opcion_C[6] = "Permite medir la entalpía en un proceso";
	opcion_D[6] = "Permite medir la capacidad calorífica";

	preguntas[7] = "El término “espontáneo” en termodinámica está relacionado con:";
	opcion_A[7] = "La dirección de un proceso natural";
	opcion_B[7] = "La velocidad de un proceso natural";
	opcion_C[7] = "La velocidad y dirección de un proceso natural";
	opcion_D[7] = "Ninguna respuesta";

	preguntas[8] = "El término “espontáneo” en termodinámica ¿tiene alguna relación con el tiempo en que se efectúa el proceso?:";
	opcion_A[8] = "No";
	opcion_B[8] = "Sí";
	opcion_C[8] = "Depende de las condiciones";
	opcion_D[8] = "Depende de la velocidad del proceso";

	preguntas[9] = "La entropía es:";
	opcion_A[9] = "Medida del grado de desorden";
	opcion_B[9] = "Grado de excitación molecular";
	opcion_C[9] = "Contenido de calor de un sistema";
	opcion_D[9] = "Ninguna respuesta";

	preguntas[10] = "La Energía no se crea ni se destruye, sólo se transforma: Energía del Universo es Constante.";
	opcion_A[10] = "Primera Ley de la Termodinámica";
	opcion_B[10] = "Segunda Ley de la Termodinámica";
	opcion_C[10] = "Ley cero de la Termodinámica";
	opcion_D[10] = "Tercera Ley de la Termodinámica";

	preguntas[11] = "Si dos sistemas termodinámicos están cada uno en equilibrio térmico con un tercero, entonces están en equilibrio térmico entre sí:";
	opcion_A[11] = "Ley cero de la Termodinámica";
	opcion_B[11] = "Segunda Ley de la Termodinámica";
	opcion_C[11] = "Primera Ley de la Termodinámica";
	opcion_D[11] = "Tercera Ley de la Termodinámica";

	preguntas[12] = "Todo proceso natural se verifica con un aumento de la entropía del universo, y la dirección del cambio es aquella que conduce a dicho aumento.";
	opcion_A[12] = "Segunda Ley de la Termodinámica";
	opcion_B[12] = "Tercera Ley de la Termodinámica";
	opcion_C[12] = "Primera Ley de la Termodinámica";
	opcion_D[12] = "Ley cero de la Termodinámica";

	preguntas[13] = "Permite medir entropías absolutas a cualquier temperatura:";
	opcion_A[13] = "Tercera Ley de la Termodinámica";
	opcion_B[13] = "Ley cero de la Termodinámica";
	opcion_C[13] = "Primera Ley de la Termodinámica";
	opcion_D[13] = "Segunda Ley de la Termodinámica";

	preguntas[14] = "La Primera Ley de la Termodinámica:";
	opcion_A[14] = "Permite medir el cambio de energía interna del sistema durante un proceso";
	opcion_B[14] = "Permite medir entropías absolutas a cualquier temperatura";
	opcion_C[14] = "Permite medir el cambio de energía libre de Gibbs";
	opcion_D[14] = "Permite medir el cambio de entalpía del sistema durante un proceso";

	preguntas[15] = "Permite medir el cambio de energía interna del sistema durante un proceso:";
	opcion_A[15] = "Primera Ley de la Termodinámica";
	opcion_B[15] = "Ley cero de la Termodinámica";
	opcion_C[15] = "Segunda Ley de la Termodinámica";
	opcion_D[15] = "Tercera Ley de la Termodinámica";

	preguntas[16] = "Permite conocer la dirección en la que se verifica un proceso:";
	opcion_A[16] = "Energía Libre de Gibbs";
	opcion_B[16] = "Entalpía";
	opcion_C[16] = "Capacidad calorífica";
	opcion_D[16] = "Calor";

	preguntas[17] = "La dirección en la que se verifica un proceso natural implica:";
	opcion_A[17] = "Un aumento en la entropía del universo";
	opcion_B[17] = "Un aumento de la entropía del sistema";
	opcion_C[17] = "Una disminución de la entropía del sistema";
	opcion_D[17] = "Una disminución en la entropía del universo";

	preguntas[18] = "Un cambio de estado de una sustancia desde el estado sólido (inicio) al estado líquido (final), transformación denominada fusión,  implica:";
	opcion_A[18] = "Un cambio de entropía positivo del sistema";
	opcion_B[18] = "Un cambio de entropía negativo del sistema";
	opcion_C[18] = "Entropía del sistema constante";
	opcion_D[18] = "Ninguna de las respuestas";

	preguntas[19] = "Un cambio de estado de una sustancia desde el estado líquido (inicio) al estado sólido (final), transformación denominada solidificación,  implica:";
	opcion_A[19] = "Un cambio de entropía negativo del sistema";
	opcion_B[19] = "Un cambio de entropía positivo del sistema";
	opcion_C[19] = "Entropía del sistema constante";
	opcion_D[19] = "Ninguna de las respuestas";

	preguntas[20] = "Un cambio de estado de una sustancia desde el estado gas (inicio) al estado líquido (final), transformación denominada condensación,  implica:";
	opcion_A[20] = "Un cambio de entropía negativo del sistema";
	opcion_B[20] = "Entropía del sistema constante";
	opcion_C[20] = "Un cambio de entropía positivo del sistema";
	opcion_D[20] = "Ninguna de las respuestas";

	preguntas[21] = "Un cambio de estado de una sustancia pura desde el estado líquido (inicio) al estado gas (final), transformación denominada ebullición, implica:";
	opcion_A[21] = "Un cambio de entropía positivo del sistema";
	opcion_B[21] = "Entropía del sistema constante";
	opcion_C[21] = "Un cambio de entropía negativo del sistema";
	opcion_D[21] = "Ninguna de las respuestas";

	preguntas[22] = "Un cambio de estado de una sustancia pura desde el estado sólido (inicio) al estado gas (final), transformación denominada sublimación, implica:";
	opcion_A[22] = "Un cambio de entropía positivo del sistema";
	opcion_B[22] = "Un cambio de entropía negativo del sistema";
	opcion_C[22] = "Entropía del sistema constante";
	opcion_D[22] = "Ninguna de las respuestas";

	preguntas[23] = "Variable termodinámica que permite medir si un proceso es espontáneo o no. Particularmente importante para procesos a P y T constantes.";
	opcion_A[23] = "Energía Libre de Gibbs";
	opcion_B[23] = "Capacidad calorífica";
	opcion_C[23] = "Entalpía";
	opcion_D[23] = "Energía interna";

	preguntas[24] = "&Delta;E = q + W";
	opcion_A[24] = "Ecuación de la Primera Ley de la Termodinámica";
	opcion_B[24] = "Permite medir el cambio de Energía Libre de Gibbs a P y T constantes";
	opcion_C[24] = "Ecuación de la Segunda Ley de la Termodinámica";
	opcion_D[24] = "Permite medir el cambio de entalpía a presión constante";

	preguntas[25] = "&Delta;G = &Delta;H - T&Delta;S";
	opcion_A[25] = "Permite medir el cambio de Energía Libre de Gibbs a P y T constantes";
	opcion_B[25] = "Ecuación de la Segunda Ley de la Termodinámica";
	opcion_C[25] = "Ecuación de la Primera Ley de la Termodinámica";
	opcion_D[25] = "Ninguna de las respuestas";

	preguntas[26] = "&Delta;H = &Delta;E + P&Delta;V";
	opcion_A[26] = "Permite medir el cambio de entalpía a presión constante";
	opcion_B[26] = "Ecuación de la Primera Ley de la Termodinámica";
	opcion_C[26] = "Ecuación de la Segunda Ley de la Termodinámica";
	opcion_D[26] = "Permite medir el cambio de Energía Libre de Gibbs a P y T constantes";

	preguntas[27] = "&Delta;G < 0 en una reacción implica:";
	opcion_A[27] = "Proceso es espontáneo (reacción ocurre en esa dirección)";
	opcion_B[27] = "Proceso no espontáneo (reacción no ocurre en esa dirección)";
	opcion_C[27] = "Equilibrio químico";
	opcion_D[27] = "Ninguna de las respuestas";

	preguntas[28] = "&Delta;G > 0 en una reacción implica:";
	opcion_A[28] = "Proceso no espontáneo (reacción no ocurre en esa dirección)";
	opcion_B[28] = "Proceso es espontáneo (reacción ocurre en esa dirección)";
	opcion_C[28] = "Equilibrio químico";
	opcion_D[28] = "Ninguna de las respuestas";

	preguntas[29] = "&Delta;G = 0 en una reacción implica:";
	opcion_A[29] = "Equilibrio químico";
	opcion_B[29] = "Ninguna de las respuestas";
	opcion_C[29] = "Proceso es espontáneo (reacción ocurre en esa dirección)";
	opcion_D[29] = "Proceso no espontáneo (reacción no ocurre en esa dirección)";

	preguntas[30] = "Un  proceso con un &Delta;G < 0 se denomina:";
	opcion_A[30] = "Exergónico";
	opcion_B[30] = "Endergónico";
	opcion_C[30] = "Exotérmico";
	opcion_D[30] = "Endotérmico";

	preguntas[31] = "Un  proceso con un &Delta;G > 0 se denomina:";
	opcion_A[31] = "Endergónico";
	opcion_B[31] = "Exergónico";
	opcion_C[31] = "Exotérmico";
	opcion_D[31] = "Endotérmico";

	preguntas[32] = "Un  proceso con un &Delta;H < 0 se denomina:";
	opcion_A[32] = "Exotérmico";
	opcion_B[32] = "Endotérmico";
	opcion_C[32] = "Exergónico";
	opcion_D[32] = "Endergónico";

	preguntas[33] = "Un  proceso con un &Delta;H > 0 se denomina:";
	opcion_A[33] = "Endotérmico";
	opcion_B[33] = "Exotérmico";
	opcion_C[33] = "Exergónico";
	opcion_D[33] = "Endergónico";

	preguntas[34] = "Un Proceso exotérmico:";
	opcion_A[34] = "Es cualquier proceso en el que se libera calor";
	opcion_B[34] = "Es cualquier proceso en el que se absorbe calor";
	opcion_C[34] = "Es cualquier proceso en el que aumenta la energía libre de Gibbs";
	opcion_D[34] = "Es cualquier proceso en el que disminuye la energía libre de Gibbs";

	preguntas[35] = "Un Proceso endotérmico: ";
	opcion_A[35] = "Es cualquier proceso en el que se absorbe calor";
	opcion_B[35] = "Es cualquier proceso en el que se libera calor";
	opcion_C[35] = "Es cualquier proceso en el que disminuye la energía libre de Gibbs";
	opcion_D[35] = "Es cualquier proceso en el que aumenta la energía libre de Gibbs";

	preguntas[36] = "Es el calor requerido para incrementar la temperatura de una cierta cantidad de sustancia por grado de temperatura en celsius.";
	opcion_A[36] = "Capacidad calorífica";
	opcion_B[36] = "Entalpía";
	opcion_C[36] = "Energía interna";
	opcion_D[36] = "Entropía";



}
