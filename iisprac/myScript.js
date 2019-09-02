
var problema = "TODO";
var tema = "TEMA1"
var laFlashCardMuestraLa = "PREGUNTA";
var QUESTION;
var ANSWER;
var DEBUG;

//------------------------------------------------------------------------------
function start(){

	tipo = document.getElementById("tipo").value;
    examen = document.getElementById("examen").value;
	laFlashCardMuestraLa = "PREGUNTA";
	QUESTION = "";
	ANSWER = "";

	flash_card_remove();

	if(examen==="examen1" && tipo==="conceptos") ex_1_conceptos();
    if(examen==="examen1" && tipo==="problemas") ex_1_problemas();

	if(examen==="examen2" && tipo==="conceptos") ex_2_conceptos();
    if(examen==="examen2" && tipo==="problemas") ex_2_problemas();

	if(examen==="examen3" && tipo==="conceptos") ex_3_conceptos();
    if(examen==="examen3" && tipo==="problemas") ex_3_problemas();
    
	if(examen==="examen4" && tipo==="conceptos") ex_4_conceptos();
    if(examen==="examen4" && tipo==="problemas") ex_4_problemas();
    
	flash_card_show(); 
    
}

//----------------------------------------------------- EX_1_CONCEPTOS
function ex_1_conceptos()
{

    QUESTION = "Proximamente :D"
    
    ANSWER = "Ten paciencia! :V"
    
}

//----------------------------------------------------- EX_1_PROBLEMAS
function ex_1_problemas()
{

    QUESTION = ""
    ANSWER = ""
    var option = 1;
    
    QUESTION += "<b>Problema 1:</b><br><br>"
    ANSWER += "<b>Respuesta 1:</b><br><br>"
    
    option = irand(1,2);
    if(option === 1) prob_1_1();
    if(option === 2) prob_1_2();

    QUESTION += "<b>Problema 2:</b><br><br>"
    ANSWER += "<b>Respuesta 2:</b><br><br>"

    option = irand(1,2);
    if(option === 1) prob_1_1();
    if(option === 2) prob_1_2();

    QUESTION += "<b>Problema 3:</b><br><br>"
    ANSWER += "<b>Respuesta 3:</b><br><br>"

    option = irand(1,2);
    if(option === 1) prob_1_1();
    if(option === 2) prob_1_2();

    QUESTION += "<b>Problema 4:</b><br><br>"
    ANSWER += "<b>Respuesta 4:</b><br><br>"

    option = irand(1,2);
    if(option === 1) prob_1_1();
    if(option === 2) prob_1_2();   

    QUESTION += "<b>Problema 5:</b><br><br>"
    ANSWER += "<b>Respuesta 5:</b><br><br>"

    option = irand(1,2);
    if(option === 1) prob_1_1();
    if(option === 2) prob_1_2();

    QUESTION += "<b>Problema 6:</b><br><br>"
    ANSWER += "<b>Respuesta 6:</b><br><br>"

    option = irand(1,2);
    if(option === 1) prob_1_1();
    if(option === 2) prob_1_2();

    QUESTION += "<b>Problema 7:</b><br><br>"
    ANSWER += "<b>Respuesta 7:</b><br><br>"

    option = irand(1,2);
    if(option === 1) prob_1_1();
    if(option === 2) prob_1_2();

    QUESTION += "<b>Problema 8:</b><br><br>"
    ANSWER += "<b>Respuesta 8:</b><br><br>"

    option = irand(1,2);
    if(option === 1) prob_1_1();
    if(option === 2) prob_1_2();
    
}

//----------------------------------------------------- EX_2_CONCEPTOS
function ex_2_conceptos()
{

    QUESTION = "Proximamente :D"
    
    ANSWER = "Ten paciencia! :V"
    
}

//----------------------------------------------------- EX_2_PROBLEMAS
function ex_2_problemas()
{

    QUESTION = "Proximamente :D"
    
    ANSWER = "Ten paciencia! :V"
    
}

//----------------------------------------------------- EX_3_CONCEPTOS
function ex_3_conceptos()
{

    QUESTION = "Proximamente :D"
    
    ANSWER = "Ten paciencia! :V"
    
}

//----------------------------------------------------- EX_3_PROBLEMAS
function ex_3_problemas()
{

    QUESTION = "Proximamente :D"
    
    ANSWER = "Ten paciencia! :V"
    
}

//----------------------------------------------------- EX_4_CONCEPTOS
function ex_4_conceptos()
{

    QUESTION = "Proximamente :D"
    
    ANSWER = "Ten paciencia! :V"
    
}

//----------------------------------------------------- EX_4_PROBLEMAS
function ex_4_problemas()
{

    QUESTION = "Proximamente :D"
    
    ANSWER = "Ten paciencia! :V"
    
}


//----------------------------------------------------- LEY DE CHARLES
function prob_1_1()
{
    var rnd = irand(1,2);

	if(rnd === 1) //
	{
        
        var T1 = rand(20,30); //°C
        var T2 = round2(T1 + rand(50,80)); //°C
        var V1 = rand(20,25); //L

        QUESTION += "Un gas a "+T1+" °C ocupa "+V1+" L.<br>";
        QUESTION += "¿Qué volumen ocupará si la temperatura aumenta a "+T2+" °C?<br>";
        QUESTION += "<br>";

        T1 = _C2K_(T1);
        T2 = _C2K_(T2);

        var V2 = round2(V1*T2/T1);

		ANSWER += V2+" L.<br>";
        ANSWER += "<br>";

	}

	if(rnd === 2) //
	{
        
        var T1 = rand(20,30); //°C
        
        var op=irand(1,4);
        
        if(op===1) var factor = "el doble";
        if(op===2) var factor = "el triple";
        if(op===3) var factor = "un medio";
        if(op===4) var factor = "un tercio";

        QUESTION += "Considere un gas a "+T1+" °C.<br>";
        QUESTION += "¿Qué temperatura es necesaria para que el gas ocupe "+factor+" del volumen inicial?<br>";
        QUESTION += "<br>";

        T1 = _C2K_(T1);
        
        if(op===1) var T2 = round2(2.0*T1);
        if(op===2) var T2 = round2(3.0*T1);
        if(op===3) var T2 = round2(1.0/2.0*T1);
        if(op===4) var T2 = round2(1.0/3.0*T1);
        
        
        T2 = round2(_K2C_(T2));

		ANSWER += T2+" °C.<br>";
        ANSWER += "<br>";

	}

}


//----------------------------------------------------- LEY DE AVOGADRO
function prob_1_2()
{
    var rnd = irand(1,2);

	if(rnd === 1) //
	{
        
        var n1 = rand(1,4);
        var V1 = rand(15,30);
        var n2 = n1 + rand(1,4);

        QUESTION += "Si "+n1+" moles de gas ocupan "+V1+" L,<br>";
        QUESTION += "¿Qué volumen ocuparían "+round2(n2)+" mol de dicho gas?<br>";
        QUESTION += "<br>";

        var V2 = round2(V1*n2/n1);

		ANSWER += V2+" L.<br>";
        ANSWER += "<br>";

	}

	if(rnd === 2) //
	{
        
        var gramos = rand(10,50);
        var n1 = gramos/32.0;
        var V1 = rand(15,50);
        var V2 = V1 + rand(20,30);

        QUESTION += "Si "+gramos+" g de O2 [M=32 g/mol]ocupan "+V1+" L,<br>";
        QUESTION += "¿Cuántas moléculas de O2 habría en "+round2(V2)+" L?<br>";
        QUESTION += "<br>";

        var n2 = V2*n1/V1;
        var moleculas = n2*6.022e23;

		ANSWER += moleculas+" moléculas de O2.<br>";
        ANSWER += "<br>";

	}

}



//------------------------------------------------------------------------------
function flash_card_remove(){

	if(DEBUG==="YES") console.log("flash_card_show()");

	document.getElementById("flashCard").style.display = "none";
	document.getElementById("flashCardQuestion").style.display = "none";
	document.getElementById("flashCardAnswer").style.display = "none";

}

//------------------------------------------------------------------------------
function flash_card_flip(){

	if(laFlashCardMuestraLa === "PREGUNTA" ){
		laFlashCardMuestraLa = "RESPUESTA";
		document.getElementById("flashCardQuestion").style.display = "none";
		document.getElementById("flashCardAnswer").style.display = "block";
	}else{
		laFlashCardMuestraLa = "PREGUNTA";
		document.getElementById("flashCardQuestion").style.display = "block";
		document.getElementById("flashCardAnswer").style.display = "none";
	}
}

//------------------------------------------------------------------------------
function flash_card_show(){

	if(DEBUG==="YES") console.log("flash_card_show()");

	document.getElementById("flashCard").style.display = "block";
	document.getElementById("flashCardQuestion").style.display = "block";
	document.getElementById("flashCardQuestion").innerHTML = QUESTION;
	document.getElementById("flashCardAnswer").innerHTML = ANSWER;

}



//------------------------------------------------------------------------------
function irand0(min, max) {
	var R = Math.floor(Math.random() * (max - min + 1) ) + min;
    return R;
}

//------------------------------------------------------------------------------
function irand(min, max) {

	var R;

	while(1){
		R = Math.floor(Math.random() * (max - min + 1) ) + min;
		if(R !== 0)
			break;
	}

    return R;
}

//------------------------------------------------------------------------------
function rand(min,max) 
{

	var R;
	var entero;
	var decimal;

	entero = irand0(min,max);
	decimal = irand(0,9);

	R = entero + decimal/10.0;

    return R;
}

//------------------------------------------------------------------------------
function rand2(min, max) {
    return Math.random() * (max - min) + min;
}

//------------------------------------------------------------------------------
function round(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}

function round2(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function round4(num) {
    return +(Math.round(num + "e+4")  + "e-4");
}

//------------------------------------------------------------CONVERSIONES-----

function _K2C_(T){return T - 273.15;}
function _C2K_(T){return T + 273.15;}
function _C2F_(T){return (9.0/5.0)*T + 32;}
function _F2C_(T){return (5.0/9.0)*(T - 32);}


