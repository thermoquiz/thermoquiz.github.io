
var problema = "TODO";
var tema = "TEMA1"
var laFlashCardMuestraLa = "PREGUNTA";
var QUESTION;
var ANSWER;
var DEBUG;
var LaPregunta;
var LaRespuesta;
var contador;
var registro=[];

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
function HacerPreguntas_ex1()
{
    
    var P = [];
    var R = [];
    var rnd = 1;

    //-------------------------------------------- LEY DE BOYLE
    
    P[1] = "La Ley de Boyle dice que, a temperatura constante, el volumen de una cantidad fija de gas es inversamente proporcional a su presión.";
    R[1] = "V"

    P[2] = "La Ley de Boyle dice que, a temperatura constante, el volumen de una cantidad fija de gas es directamente proporcional a su presión.";
    R[2] = "F"

    P[3] = "A temperatura constate, el volumen de una cantidad fija de gas es inversamente proporcional a su presión.";
    R[3] = "V";

    P[4] = "A temperatura constate, el volumen de una cantidad fija de gas es directamente proporcional a su presión.";
    R[4] = "F";


    //-------------------------------------------- LEY DE CHARLES
    
    P[5] = "La Ley de Charles dice que, a presión constante, el volumen de una cantidad fija de gas es directamente proporcional a su temperatura.";
    R[5] = "V"

    P[6] = "La Ley de Charles dice que, a presión constante, el volumen de una cantidad fija de gas es inversamente proporcional a su temperatura.";
    R[6] = "F"

    P[7] = "A presión constante, el volumen de una cantidad fija de gas es directamente proporcional a su temperatura.";
    R[7] = "V"

    P[8] = "A presión constante, el volumen de una cantidad fija de gas es inversamente proporcional a su temperatura.";
    R[8] = "F"


    //-------------------------------------------- LEY DE AVOGADRO
    
    P[9] = "La Ley de Avogadro dice que, a presión y temperatura constantes, el volumen de un gas es directamente proporcional a su cantidad de sustancia.";
    R[9] = "V"

    P[10] = "La Ley de Avogadro dice que, a presión y temperatura constantes, el volumen de un gas es inversamente proporcional a su cantidad de sustancia.";
    R[10] = "F"

    P[11] = "A presión y temperatura constantes, el volumen de un gas es directamente proporcional a su cantidad de sustancia.";
    R[11] = "V"

    P[12] = "A presión y temperatura constantes, el volumen de un gas es inversamente proporcional a su cantidad de sustancia.";
    R[12] = "F"

    //--------------------------------------------- LIQUIDO & VAPOR
    
    P[13] = " Un líquido subenfriado es un líquido que NO está a punto de evaporarse.";
    R[13] = "V";

    P[14] = "Un líquido subenfriado es un líquido que está a punto de evaporarse.";
    R[14] = "F";

    P[15] = " Un líquido saturado es un líquido que está a punto de evaporarse.";
    R[15] = "V";

    P[16] = "Un líquido saturado es un líquido que NO está a punto de evaporarse.";
    R[16] = "F";

    P[17] = " Un vapor saturado es un vapor que está a punto de condensarse.";
    R[17] = "V";    

    P[18] = "Un vapor saturado es un vapor que NO está a punto de condensarse.";
    R[18] = "F";    

    P[19] = " Un vapor sobrecalentado es un vapor que NO está a punto de condensarse.";
    R[19] = "V";   

    P[20] = "Un vapor sobrecalentado es un vapor que está a punto de condensarse.";
    R[20] = "F";  

    //-------------------------------------------------------- TEMPERATURA
    
    P[21] = "Desde un punto de vista microscópico, la temperatura es directamente proporcional a la energía cinética promedio de las partículas del sistema.";
    R[21] = "V";

    P[22] = "Desde un punto de vista microscópico, la temperatura es inversamente proporcional a la energía cinética promedio de las partículas del sistema.";
    R[22] = "F";
    
    P[23] = "La escala de temperatura Celcius es relativa.";
    R[23] = "V";

    P[24] = "La escala de temperatura Celcius es absoluta.";
    R[24] = "F";
    
    P[25] = "La escala de temperatura Fahrenheid es relativa.";
    R[25] = "V";

    P[26] = "La escala de temperatura Fahrenheid es absoluta.";
    R[26] = "F";
    
    P[27] = "La escala de temperatura Kelvin es absoluta.";
    R[27] = "V";    

    P[28] = "La escala de temperatura Kelvin es relativa.";
    R[28] = "F";    
    
    P[29] = "Una escala de temperatura absoluta sólo puede tener valores &ge; 0.";
    R[29] = "V";
    
    P[30] = "Una escala de temperatura absoluta puede tener valores negativos.";
    R[30] = "F";
    
    P[31] = "0 °C &equals; 32 °F";
    R[31] = "V";

    P[32] = "0 °C &equals; &minus;32 °F";
    R[32] = "F";

    P[33] = "0 °C &equals; 273.15 K";
    R[33] = "V";

    P[34] = "0 °C &equals; &minus;273.15 K";
    R[34] = "F";

    P[35] = "0 K &equals; &minus;273.15 °C";
    R[35] = "V";

    P[36] = "0 K &equals; 273.15 °C";
    R[36] = "F";

    //---------------------------------------------------PRESION
    
    P[37] = "El barómetro se utiliza para medir la presión atmosférica.";
    R[37] = "V";

    P[38] = "El barómetro se utiliza para medir la presión de un gas confinado.";
    R[38] = "F";    
    
    P[39] = "El manómetro se utiliza para medir la presión de un gas confinado.";
    R[39] = "V";    
    
    P[40] = "El manómetro se utiliza principalmente para medir la presión atmosférica.";
    R[40] = "F";
    
    P[41] = "1 atm &equals; 760 mmHg";
    R[41] = "V";
    
    P[42] = "1 atm &equals; 700 mmHg";
    R[42] = "F";

    P[43] = "1 atm &equals; 101325 Pa";
    R[43] = "V";
    
    P[44] = "1 atm &equals; 100000 Pa";
    R[44] = "F";
    
    P[45] = "Es preferible utilizar un manómetro de tubo U abierto si la presión del gas es superior a la atmosférica.";
    R[45] = "V";

    P[46] = "Es preferible utilizar un manómetro de tubo U cerrado si la presión del gas es superior a la atmosférica.";
    R[46] = "F";    

    P[47] = "Es preferible utilizar un manómetro de tubo U cerrado si la presión del gas es menor a la atmosférica.";
    R[47] = "V";

    P[48] = "Es preferible utilizar un manómetro de tubo U abierto si la presión del gas es menor a la atmosférica.";
    R[48] = "F";  
    
    //------------------------------------------------ UNIDADES SI

    P[49] = "En el SI, la unidad básica para medir la temperatura es el K.";
    R[49] = "V";

    P[50] = "En el SI, la unidad básica para medir la temperatura es el °C.";
    R[50] = "F";

    P[51] = "En el SI, la unidad básica para medir la cantidad de sustancia es el mol.";
    R[51] = "V";

    P[52] = "En el SI, la unidad básica para medir la cantidad de sustancia es el kg.";
    R[52] = "F";
    
    P[53] = "Estas son las 7 unidades básicas del SI: m, kg, s, mol, K, cd y A.";
    R[53] = "V";
    
    P[54] = "Estas son las 7 unidades básicas del SI: m, g, s, mol, K, cd y A.";
    R[54] = "F";
    
    P[55] = "Estas son las 8 unidades básicas del SI: m, kg, s, mol, K, cd, A y Pa.";
    R[55] = "F";

    P[56] = "Estas son las 7 unidades básicas del SI: km, kg, s, mol, K, cd y A.";
    R[56] = "F";
    
    P[57] = "La unidad derivada del SI para medir la presión es el Pa.";
    R[57] = "V";

    P[58] = "La unidad derivada del SI para medir la presión es la atm.";
    R[58] = "F";    
    
    var opt = irand(1,8);
    
        if(opt===1)
        {
            P[59] = "TPa &equals; 10<sup>12</sup> Pa";
            R[59] = "V";   
            P[60] = "TPa &equals; 10<sup>9</sup> Pa";
            R[60] = "F";      
        }
        if(opt===2)
        {
            P[59] = "GPa &equals; 10<sup>9</sup> Pa";
            R[59] = "V";   
            P[60] = "GPa &equals; 10<sup>12</sup> Pa";
            R[60] = "F";   
        }
        if(opt===3)
        {
            P[59] = "MPa &equals; 10<sup>6</sup> Pa";
            R[59] = "V";   
            P[60] = "MPa &equals; 10<sup>9</sup> Pa";
            R[60] = "F";   
        }    

        if(opt===4)
        {
            P[59] = "kPa &equals; 10<sup>3</sup> Pa";
            R[59] = "V";   
            P[60] = "kPa &equals; 10<sup>6</sup> Pa";
            R[60] = "F";   
        }

        if(opt===5)
        {
            P[59] = "mPa &equals; 10<sup>-3</sup> Pa";
            R[59] = "V";   
            P[60] = "mPa &equals; 10<sup>-6</sup> Pa";
            R[60] = "F";   
        }

        if(opt===6)
        {
            P[59] = "&mu;Pa &equals; 10<sup>-6</sup> Pa";
            R[59] = "V";   
            P[60] = "&mu;mPa &equals; 10<sup>-3</sup> Pa";
            R[60] = "F";   
        }

        if(opt===7)
        {
            P[59] = "nPa &equals; 10<sup>-9</sup> Pa";
            R[59] = "V";   
            P[60] = "nPa &equals; 10<sup>-6</sup> Pa";
            R[60] = "F";   
        }

        if(opt===8)
        {
            P[59] = "pPa &equals; 10<sup>-12</sup> Pa";
            R[59] = "V";   
            P[60] = "pPa &equals; 10<sup>-9</sup> Pa";
            R[60] = "F";   
        }

    var opt = irand(1,6);
    
        if(opt===1)
        {
            P[61] = "La sublimación es el cambio de estado sólido a gaseoso.";
            R[61] = "V";    

            P[62] = "La sublimación es el cambio de estado gaseoso a sólido.";
            R[62] = "F";                
        }

        if(opt===2)
        {
            P[61] = "La sublimación inversa es el cambio de estado gaseoso a sólido.";
            R[61] = "V";   

            P[62] = "La sublimación inversa es el cambio de estado sólido a gaseoso.";
            R[62] = "F";              
        }

        if(opt===3)
        {
            P[61] = "La fusión es el cambio de estado sólido a líquido.";
            R[61] = "V";       

            P[62] = "La fusión es el cambio de estado líquido a sólido.";
            R[62] = "F";             
        }
 

        if(opt===4)
        {
            P[61] = "La solidificación es el cambio de estado líquido a sólido.";
            R[61] = "V"; 

            P[62] = "La solidificación es el cambio de estado sólido a líquido.";
            R[62] = "F";             
        }
      
        if(opt===5)
        {
            P[61] = "La evaporación es el cambio de estado líquido a gaseoso.";
            R[61] = "V";       

            P[62] = "La evaporación es el cambio de estado gaseoso a líquido.";
            R[62] = "F";             
        }

        if(opt===6)
        {
            P[61] = "La condensación es el cambio de estado gaseoso a líquido.";
            R[61] = "V"; 

            P[62] = "La condensación es el cambio de estado líquido a gaseoso.";
            R[62] = "F";            
        }

    //---------------------------------------------------- TROLEANDO :V
    
    P[63] = "La Ley de Charles dice que, a temperatura constante, el volumen de una cantidad fija de gas es inversamente proporcional a su presión.";
    R[63] = "F"

    P[64] = "La Ley de Charles dice que, a temperatura constante, el volumen de una cantidad fija de gas es directamente proporcional a su presión.";
    R[64] = "F"

    P[65] = "La Ley de Boyle dice que, a presión constante, el volumen de una cantidad fija de gas es directamente proporcional a su temperatura.";
    R[65] = "F"
    
    P[66] = "La Ley de Boyle dice que, a presión constante, el volumen de una cantidad fija de gas es inversamente proporcional a su temperatura.";
    R[66] = "F"     

    //----------------------------------------------------
    
    var MAX = 66;
       
    if(contador===1)
    {
        rnd = irand(1,MAX);
        registro[contador] = rnd;
    }
    else
    {
        while(1)
        {
            rnd = irand(1,MAX);
            if(registro.includes(rnd)===false)
            {
                registro[contador] = rnd;
                break;
            }
        }
    }
    contador += 1;


    LaPregunta = P[rnd];
    LaRespuesta = R[rnd];
    
    console.log(contador, registro);
    
}

//----------------------------------------------------- EX_1_CONCEPTOS
function ex_1_conceptos()
{
    
    contador = 0;
    registro = [];

    QUESTION = "<center><b>¿Falso o Verdadero?</b></center><br>"
    ANSWER = "<center><b>Respuestas</b></center><br>"
    
    QUESTION +="<ol>";
    ANSWER +="<ol>";
    
    for(var i=0;i<20;i++)
    {
        HacerPreguntas_ex1()
        QUESTION +="<li>" + LaPregunta + "<br><br>";
        ANSWER   +="<li>" + LaRespuesta + "<br><br>";  
    }
    
    QUESTION +="</ol>";
    ANSWER += "</ol>";
    
}

//----------------------------------------------------- EX_1_PROBLEMAS
function ex_1_problemas()
{

    QUESTION = ""
    ANSWER = ""

    var rnd = irand(1,3);
    
    rnd = 1;
       
    if(rnd===1)
    {
        QUESTION += "<b>Problema 1:</b><br><br>"
        ANSWER += "<b>Respuesta 1:</b><br><br>"
        prob_ex1_charles();
        
        QUESTION += "<b>Problema 2:</b><br><br>"
        ANSWER += "<b>Respuesta 2:</b><br><br>"
        prob_ex1_boyle();

        QUESTION += "<b>Problema 3:</b><br><br>"
        ANSWER += "<b>Respuesta 3:</b><br><br>"
        prob_ex1_avogadro();

        QUESTION += "<b>Problema 4:</b><br><br>"
        ANSWER += "<b>Respuesta 4:</b><br><br>"
        prob_ex1_presion();

        QUESTION += "<b>Problema 5:</b><br><br>"
        ANSWER += "<b>Respuesta 5:</b><br><br>"
        prob_ex1_charles();
        
        QUESTION += "<b>Problema 6:</b><br><br>"
        ANSWER += "<b>Respuesta 6:</b><br><br>"
        prob_ex1_boyle();

        QUESTION += "<b>Problema 7:</b><br><br>"
        ANSWER += "<b>Respuesta 7:</b><br><br>"
        prob_ex1_avogadro();

        QUESTION += "<b>Problema 8:</b><br><br>"
        ANSWER += "<b>Respuesta 8:</b><br><br>"
        prob_ex1_presion();    
    }

    if(rnd===2)
    {
        QUESTION += "<b>Problema 1:</b><br><br>"
        ANSWER += "<b>Respuesta 1:</b><br><br>"
        prob_ex1_avogadro();
        
        QUESTION += "<b>Problema 2:</b><br><br>"
        ANSWER += "<b>Respuesta 2:</b><br><br>"
        prob_ex1_presion();

        QUESTION += "<b>Problema 3:</b><br><br>"
        ANSWER += "<b>Respuesta 3:</b><br><br>"
        prob_ex1_charles();

        QUESTION += "<b>Problema 4:</b><br><br>"
        ANSWER += "<b>Respuesta 4:</b><br><br>"
        prob_ex1_boyle();

        QUESTION += "<b>Problema 5:</b><br><br>"
        ANSWER += "<b>Respuesta 5:</b><br><br>"
        prob_ex1_avogadro();
        
        QUESTION += "<b>Problema 6:</b><br><br>"
        ANSWER += "<b>Respuesta 6:</b><br><br>"
        prob_ex1_presion();

        QUESTION += "<b>Problema 7:</b><br><br>"
        ANSWER += "<b>Respuesta 7:</b><br><br>"
        prob_ex1_charles();

        QUESTION += "<b>Problema 8:</b><br><br>"
        ANSWER += "<b>Respuesta 8:</b><br><br>"
        prob_ex1_boyle();    
    }

    if(rnd===3)
    {
        QUESTION += "<b>Problema 1:</b><br><br>"
        ANSWER += "<b>Respuesta 1:</b><br><br>"
        prob_ex1_boyle();
        
        QUESTION += "<b>Problema 2:</b><br><br>"
        ANSWER += "<b>Respuesta 2:</b><br><br>"
        prob_ex1_avogadro();

        QUESTION += "<b>Problema 3:</b><br><br>"
        ANSWER += "<b>Respuesta 3:</b><br><br>"
        prob_ex1_charles();

        QUESTION += "<b>Problema 4:</b><br><br>"
        ANSWER += "<b>Respuesta 4:</b><br><br>"
        prob_ex1_presion();

        QUESTION += "<b>Problema 5:</b><br><br>"
        ANSWER += "<b>Respuesta 5:</b><br><br>"
        prob_ex1_avogadro();
        
        QUESTION += "<b>Problema 6:</b><br><br>"
        ANSWER += "<b>Respuesta 6:</b><br><br>"
        prob_ex1_presion();

        QUESTION += "<b>Problema 7:</b><br><br>"
        ANSWER += "<b>Respuesta 7:</b><br><br>"
        prob_ex1_charles();

        QUESTION += "<b>Problema 8:</b><br><br>"
        ANSWER += "<b>Respuesta 8:</b><br><br>"
        prob_ex1_boyle();    
    }       

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
function prob_ex1_charles()
{
    var rnd = irand(1,3);
    
    var T1 = 25;
    var T2 = 25;
    var V1 = 25;
    var V2 = 25;

	if(rnd === 1) //
	{
        
        while(1)
        {
            T1 = rand(10,80);
            T2 = rand(10,80);
            if( Math.abs(T1 - T2) > 20.0 ) break;
        }
        V1 = rand(20,25); //L

        QUESTION += "A "+T1+" °C el volumen de un gas es de "+V1+" L. ";
        QUESTION += "El gas se somete a un proceso a presión constante y la temperatura cambia a "+T2+" °C.<br>";
        QUESTION += "¿Cuál será el volumen final del gas?<br>";
        QUESTION += "<br>";

        T1 = T1 + 273.15;
        T2 = T2 + 273.15;

        V2 = round2(V1*T2/T1);

		ANSWER += V2+" L.<br>";
        ANSWER += "<br>";

	}

	if(rnd === 2) //
	{
        
        while(1)
        {
            V1 = rand(10,80);
            V2 = rand(10,80);
            if( Math.abs(V1 - V2) > 20.0 ) break;
        }
        T1 = rand(25,50); //°C

        QUESTION += "A "+T1+" °C el volumen de un gas es de "+V1+" L. ";
        QUESTION += "El gas se somete a un proceso a presión constante y el volumen cambia a "+V2+" L.<br>";
        QUESTION += "¿Cuál será la temperatura final del gas?<br>";
        QUESTION += "<br>";

        T1 = T1 + 273.15;
        
        T2 = V2*T1/V1;
        
        T2 = round2( T2 - 273.15 );

		ANSWER += T2+" °C.<br>";
        ANSWER += "<br>";

	}

	if(rnd === 3) //
	{
        
        T1 = rand(20,50); //°C
        
        var op=irand(1,4);
        
        if(op===1) var factor = "el doble";
        if(op===2) var factor = "el triple";
        if(op===3) var factor = "un medio";
        if(op===4) var factor = "un tercio";

        QUESTION += "Al inicio de un proceso a presión constante, la temperatura de un gas es de "+T1+" °C. ";
        QUESTION += "Al final del proceso, el volumen del gas es "+factor+" del volumen inicial.<br>";
        QUESTION += "¿Cuál es la temperatura final del gas?<br>";
        QUESTION += "<br>";

        T1 = T1 + 273.15;
        
        if(op===1) T2 = round2(2.0*T1);
        if(op===2) T2 = round2(3.0*T1);
        if(op===3) T2 = round2(1.0/2.0*T1);
        if(op===4) T2 = round2(1.0/3.0*T1);
        
        T2 = round2(T2 - 273.15);

		ANSWER += T2+" °C.<br>";
        ANSWER += "<br>";

	}

}

//----------------------------------------------------- LEY DE BOYLE
function prob_ex1_boyle()
{
    var rnd = irand(1,2);

    var P1 = 25;
    var P2 = 25;
    var V1 = 25;
    var V2 = 25;

	if(rnd === 1) //
	{
        
        P1 = rand(1,10);
        
        while(1)
        {
            V1 = rand(15,50);
            V2 = rand(15,50);
            if( Math.abs(V1 - V2) > 20.0 ) break;
        }
        
        QUESTION += "A "+P1+" atm el volumen de un gas es de "+V1+" L. ";
        QUESTION += "El gas se somete a un proceso a temperatura constante y su volumen cambia a "+V2+" L.<br>";
        QUESTION += "¿Cuál es la presión final del gas?<br>";
        QUESTION += "<br>";

        P2 = round2( V1*P1/V2 );

		ANSWER += P2+" atm.<br>";
        ANSWER += "<br>";

	}

	if(rnd === 2) //
	{
        
        V1 = rand(15,50);
        
        while(1)
        {
            P1 = rand(1,15);
            P2 = rand(1,15);
            if( Math.abs(P1 - P2) > 3.0 ) break;
        }
        
        QUESTION += "A "+P1+" atm el volumen de un gas es de "+V1+" L. ";
        QUESTION += "El gas se somete a un proceso a temperatura constante y su presión cambia a "+P2+" atm.<br>";
        QUESTION += "¿Cuál es el volumen final del gas?<br>";
        QUESTION += "<br>";

        V2 = round2( V1*P1/P2 );

		ANSWER += V2+" L.<br>";
        ANSWER += "<br>";

	}

}


//----------------------------------------------------- LEY DE AVOGADRO
function prob_ex1_avogadro()
{
    var rnd = irand(1,3);
    
    var n1 = 1;
    var n2 = 1;
    var V1 = 1;
    var V2 = 1;
    var particulas = 1;
    var gramos = 1;

	if(rnd === 1) //
	{
        
        while(1)
        {
            n1 = rand(1,10);
            n2 = rand(1,10);
            if( Math.abs(n1 - n2) > 3.0 ) break;
        }        
        
        V1 = rand(15,60);

        QUESTION += "A cierta temperatura y presión, el volumen de "+n1+" mol de un gas desconocido es de "+V1+" L.<br>";
        QUESTION += "¿Cuál será el volumen de "+n2+" mol de dicho gas a la misma temperatura y presión?<br>";
        QUESTION += "<br>";

        V2 = round2( V1*n2/n1 );

		ANSWER += V2+" L.<br>";
        ANSWER += "<br>";

	}

	if(rnd === 2) //
	{
        
        gramos = rand(10,50);
        n1 = gramos/32.0;

        while(1)
        {
            V1 = rand(15,60);
            V2 = rand(15,60);
            if( Math.abs(V1 - V2) > 20.0 ) break;
        }   

        QUESTION += "Si "+gramos+" g de O<sub>2</sub> [M=32 g/mol] ocupan un volumen de "+V1+" L a cierta temperatura y presión.<br>";
        QUESTION += "¿Cuántas moléculas de O<sub>2</sub> habrá en "+round2(V2)+" L a la misma temperatura y presión?<br>";
        QUESTION += "<br>";

        n2 = V2*n1/V1;
        particulas = n2*6.022e23;

		ANSWER += particulas+" moléculas de O<sub>2</sub>.<br>";
        ANSWER += "<br>";

	}

	if(rnd === 3) //
	{
        
        gramos = rand(10,50);
        n1 = gramos/40.0;

        while(1)
        {
            V1 = rand(15,60);
            V2 = rand(15,60);
            if( Math.abs(V1 - V2) > 20.0 ) break;
        }   

        QUESTION += "Si "+gramos+" g de Ar [M=40 g/mol] ocupan un volumen de "+V1+" L a cierta temperatura y presión.<br>";
        QUESTION += "¿Cuántos átomos de Ar habrá en "+round2(V2)+" L a la misma temperatura y presión?<br>";
        QUESTION += "<br>";

        n2 = V2*n1/V1;
        particulas = n2*6.022e23;

		ANSWER += particulas+" átomos de Ar.<br>";
        ANSWER += "<br>";

	}

}

//----------------------------------------------------- PRESION
function prob_ex1_presion()
{

    var rnd = irand(1,2);
    
    //rnd = 1;
    
    var rho = 13.604;   // g/L
    var g = 9.81;       // m/s**2
    var h = 1;
    var Pabs = 1;
    var Pmano = 1;
    var Patm = 1;

	if(rnd === 1) //
	{
        
        Pmano = rand(100,1000);   // mmHg

        QUESTION += "La medición en un manómetro de tubo U abierto es de "+Pmano+" mmHg. "
        QUESTION += "Calcular la presión absoluta en Pascales.<br>";
        QUESTION += "<br>";
        
        Pmano = Pmano;             // mmHg
        Pmano = Pmano*(1.0/760.0); // atm
        Pmano = Pmano*(101325);    // Pa
        
        Patm = 101325;             // Pa
        
        Pabs = round2( Pmano + Patm );
        
		ANSWER += Pabs+" Pa.<br>";
        ANSWER += "<br>";

    }        

	if(rnd === 2) //
	{
        
        Pmano = rand(100,700);   // mmHg

        QUESTION += "La medición en un manómetro de tubo U cerrado es de "+Pmano+" mmHg. "
        QUESTION += "Calcular la presión absoluta en Pascales.<br>";
        QUESTION += "<br>";
        
        Pmano = Pmano;             // mmHg
        Pmano = Pmano*(1.0/760.0); // atm
        Pmano = Pmano*(101325);    // Pa
        
        Patm = 101325;             // Pa
        
        Pabs = round2( Patm - Pmano );
        
		ANSWER += Pabs+" Pa.<br>";
        ANSWER += "<br>";

    }       
    
}



//------------------------------------------------------------------------------
function flash_card_remove()
{

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


