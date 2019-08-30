
var problema = "TODO";
var tema = "TEMA1"
var laFlashCardMuestraLa = "PREGUNTA";
var QUESTION;
var ANSWER;
var DEBUG;

//------------------------------------------------------------------------------
function start(){

	problema = document.getElementById("problema").value;
    tema = document.getElementById("tema").value;
	laFlashCardMuestraLa = "PREGUNTA";
	QUESTION = "";
	ANSWER = "";

	flash_card_remove();

	if(tema==="tema1" && problema==="problema01") prob_1_01();
    if(tema==="tema1" && problema==="problema02") prob_1_02();
    
	flash_card_show(); 
    
}


//------------------------------------------------------------------------------
function prob_todos(){

	var rnd = randi(1,20);

	if(rnd === 1)  	prob_1_01();
	if(rnd === 2)  	prob_1_02();

}


//----------------------------------------------------- LEY DE CHARLES
function prob_1_01()
{
    var rnd = irand(1,2);

	if(rnd === 1) //
	{
        
        var T1 = rand(20,30); //°C
        var T2 = round2(T1 + rand(50,80)); //°C
        var V1 = rand(20,25); //L

		QUESTION  = "";
		QUESTION += "<gray>LEY DE CHARLES</gray><br>";
        QUESTION += "<br>";
        QUESTION += "Un gas a "+T1+" °C ocupa "+V1+" L.<br>";
        QUESTION += "<br>";
        QUESTION += "¿Qué volumen ocupará si la temperatura aumenta a "+T2+" °C?<br>";
        QUESTION += "<br>";

        T1 = _C2K_(T1);
        T2 = _C2K_(T2);

        var V2 = round2(V1*T2/T1);

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA </gray><br>";
		ANSWER += "<br>";
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

		QUESTION  = "";
		QUESTION += "<gray>LEY DE CHARLES</gray><br>";
        QUESTION += "<br>";
        QUESTION += "Considere un gas a "+T1+" °C.<br>";
        QUESTION += "<br>";
        QUESTION += "¿Qué temperatura es necesaria para que el gas ocupe "+factor+" del volumen inicial?<br>";
        QUESTION += "<br>";

        T1 = _C2K_(T1);
        
        if(op===1) var T2 = round2(2.0*T1);
        if(op===2) var T2 = round2(3.0*T1);
        if(op===3) var T2 = round2(1.0/2.0*T1);
        if(op===4) var T2 = round2(1.0/3.0*T1);
        
        
        T2 = round2(_K2C_(T2));

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA </gray><br>";
		ANSWER += "<br>";
		ANSWER += T2+" °C.<br>";
        ANSWER += "<br>";

	}

}

//------------------------------------------------------------------------------
function prob_1_02()
{
	

    
    rnd=1;

	if(rnd === 1) //
	{

		QUESTION  = "";
		QUESTION += "<gray>EJEMPLO 1-2A<gray><br>";
        QUESTION += "<br>";

		ANSWER  = "";
		ANSWER += "<gray>RESPUESTA </gray><br>";
		ANSWER += "<br>";
		ANSWER += "RESPUESTA.<br>";
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


