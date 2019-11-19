
var problema = "TODO";
var tema = "TEMA1"
var laFlashCardMuestraLa = "PREGUNTA";
var TXT;
var DEBUG;

//------------------------------------------------------------------------------
function start(){

    examen = document.getElementById("examen").value;
	laFlashCardMuestraLa = "PREGUNTA";
	TXT = "";

	flash_card_remove();

	if(examen==="examen1" ) guia_1();
    if(examen==="examen2" ) guia_2();
    if(examen==="examen3" ) guia_3();
    if(examen==="examen4" ) guia_4();
    
	flash_card_show(); 
    
}

//----------------------------------------------------- EXAMEN 1
function guia_1()
{
    
    TXT += "<center><b>Guía para el Primer Examen Parcial de Termodinámica</b></center><br>";
    TXT += "<center><sup>Prof. Octavio Juárez.</sup></center><br>";

    TXT += "<ol>";
	TXT += "<li> Escribe las 7 unidades fundamentales del SI.<br><br>";
	TXT += "<li> Escribe algunos ejemplos de unidades derivadas del SI.<br><br>";
	TXT += "<li> Escribe el valor numérico de los siguientes prefijos del SI:<br><br>";
        TXT += "<ul>";
        TXT += "<li>T, G, M, k ";
        TXT += "<li>d, c, m, &mu;, n, p";
        TXT += "</ul><br>";
	TXT += "<li>Enlista los 4 estados naturales de agregación de la materia.<br><br>";
	TXT += "<li>Escribe algunos estados no naturales de agregación de la materia.<br><br>";
	TXT += "<li>Explica brevemente los siguientes procesos físicos:<br><br>";
        TXT += "<ul>";
        TXT += "<li>Solidificación y fusión.";
        TXT += "<li>Sublimación y sublimación inversa.";
        TXT += "<li>Evaporación y condensación.";
        TXT += "</ul><br>";    
    TXT += "<li>Explica brevemente los siguientes términos:<br><br>";
        TXT += "<ul>";
        TXT += "<li>Líquido subenfriado y líquido saturado.";
        TXT += "<li>Mezcla vapor saturado + líquido subenfriado.";
        TXT += "<li>Vapor saturado y vapor sobrecalentado.";
        TXT += "</ul><br>";
    TXT += "<li>Define la temperatura desde un punto de vista microscópico.<br><br>";
    TXT += "<li>Define la temperatura desde un punto de vista macroscópico.<br><br>";
    TXT += "<li>Las escalas de temperatura se clasifican en relativas y absolutas, explica sus diferencias.<br><br>";
    TXT += "<li>Explica brevemente (con un dibujo) cómo se inventaron las escalas de temperatura Celsius y Fahrenheit; compáralas mediante un dibujo.<br><br>";
    TXT += "<li>Escribe las ecuaciones para convertir entre grados Celsius y Fahrenheit.<br><br>";
    TXT += "<li>Explica brevemente (con un dibujo) cómo William Thomson definió la escala de temperatura absoluta.<br><br>";
    TXT += "<li>Escribe las ecuaciones para convertir entre Kelvin y grados Celsius.<br><br>";
    TXT += "<li>Describe el funcionamiento del barómetro. ¿Para qué sirve?<br><br>";
    TXT += "<li>Describe el funcionamiento del manómetro de tubo U. ¿Para qué sirve?    <br><br>";
    TXT += "<li>Escribe la ecuación para calcular la presión absoluta en:<br><br>";
        TXT += "<ul>";
        TXT += "<li>Manómetro tubo U abierto.";
        TXT += "<li>Manómetro tubo U cerrado.";
        TXT += "</ul><br>";
    TXT += "<li>Investiga las siguientes equivalencias:<br><br>";
        TXT += "<ul>";
        TXT += "<li>atm y mmHg		";	
        TXT += "<li>atm y torr	";
        TXT += "<li>atm y Pa ";
        TXT += "<li>atm y psi	";
        TXT += "<li>bar y Pa ";
        TXT += "<li>L y m<sup>3</sup>	";
        TXT += "<li>mL y cm<sup>3</sup>";
        TXT += "</ul><br>";
    TXT += "<li>Enuncia (utiliza palabras, dibujos y ecuaciones) las leyes de los gases:<br><br>";
        TXT += "<ul>";
        TXT += "<li>Ley de Charles.";
        TXT += "<li>Ley de Avogadro.";
        TXT += "<li>Ley de Boyle.";
        TXT += "</ul><br>";
    TXT += "</ol>";
        
}

//----------------------------------------------------- EXAMEN 2
function guia_2()
{


    TXT += "<center><b>Guía para el Segundo Examen Parcial de Termodinámica</b></center><br>";
    TXT += "<center><sup>Prof. Octavio Juárez.</sup></center><br>";

    TXT += "<ol>";
	TXT += "<li> Escribe las 5 características microscópicas que describen a un gas ideal.<br><br>";
	TXT += "<li> Deduce la ecuación de estado del gas ideal a partir de las leyes de Boyle, Charles y Avogadro.<br><br>";
	TXT += "<li> Escribe la ecuación del gas ideal en términos de la densidad y peso molecular del gas.<br><br>";
    TXT += "<li> Escribe el valor de R (la constante universal de los gases) en las siguientes unidades:<br><br>";
        TXT += "<ul>";
        TXT += "<li>atm L / mol K";
        TXT += "<li>Pa m<sup>3</sup> / mol K";
        TXT += "</ul><br>";
	TXT += "<li>Mediante la ecuación del gas ideal escribe una ecuación que relacione el estado inicial y final del gas.<br><br>";
	TXT += "<li>Estudia y simplifica la ecuación anterior para los siguientes casos:<br><br>";
        TXT += "<ul>";
        TXT += "<li>Temperatura y cantidad de sustancia constantes.";
        TXT += "<li>Presión y cantidad de sustancia constantes.";
        TXT += "<li>Volumen y cantidad de sustancia constantes.";
        TXT += "</ul><br>";    
    TXT += "<li>Enuncia la ley de Dalton de las presiones parciales.<br><br>";    
    TXT += "<li>Define qué es una presión parcial.<br><br>";    
    TXT += "<li>Define qué es el factor de compresibilidad Z.<br><br>";    
    TXT += "<li>Desde el punto de vista de las fuerzas intermoleculares, ¿qué significa lo siguiente?<br><br>";
        TXT += "<ul>";
        TXT += "<li>Z > 1";
        TXT += "<li>Z = 1";
        TXT += "<li>Z < 1";
        TXT += "</ul><br>";
    TXT += "<li>La ecuación de van der Waals incluye dos correcciones ¿Cuáles son?<br><br>";
    TXT += "<li>Estudia y practica un método numérico para calcular el volumen en la ecuación de estado de van der Waals. <br><br>";
    TXT += "<li>Define el punto crítico de una sustancia.<br><br>";
    TXT += "<li>Define la presión, temperatura y volumen reducidos.<br><br>";
    TXT += "<li>Escribe el principio de los estados correspondientes.<br><br>";
    TXT += "<li>¿Bajo qué condiciones se considera que un gas real se comporta como un gas ideal?<br><br>";
    TXT += "</ol>";

    
    
}

//----------------------------------------------------- EXAMEN 3
function guia_3()
{


    TXT += "<center><b>Guía para el Tercer Examen Parcial de Termodinámica</b></center><br>";
    TXT += "<center><sup>Prof. Octavio Juárez.</sup></center><br>";
    
    TXT +="<br>";
    TXT +='<center><a href="https://drive.google.com/open?id=15oOW9-u2l29nHL0ZZ60cxi0VPwMbMk5m">Click Me :D</a></center>';
    TXT +="<br>";
    
}

//----------------------------------------------------- EXAMEN 4
function guia_4()
{


    TXT += "<center><b>Guía para el Cuarto Examen Parcial de Termodinámica</b></center><br>";
    TXT += "<center><sup>Prof. Octavio Juárez.</sup></center><br>";
    
    TXT +="<br>";
    TXT +='<center><a href="https://drive.google.com/open?id=1D5yF_E_jPEIXJUq1e_jx23DEOQYO-KuS">Click Me :D</a></center>';
    TXT +="<br>";
    
    
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

	// if(laFlashCardMuestraLa === "PREGUNTA" ){
		// laFlashCardMuestraLa = "RESPUESTA";
		// document.getElementById("flashCardQuestion").style.display = "none";
		// document.getElementById("flashCardAnswer").style.display = "block";
	// }else{
		// laFlashCardMuestraLa = "PREGUNTA";
		// document.getElementById("flashCardQuestion").style.display = "block";
		// document.getElementById("flashCardAnswer").style.display = "none";
	// }
}

//------------------------------------------------------------------------------
function flash_card_show(){

	if(DEBUG==="YES") console.log("flash_card_show()");

	document.getElementById("flashCard").style.display = "block";
	document.getElementById("flashCardQuestion").style.display = "block";
	document.getElementById("flashCardQuestion").innerHTML = TXT;
	document.getElementById("flashCardAnswer").innerHTML = ANSWER;

}


