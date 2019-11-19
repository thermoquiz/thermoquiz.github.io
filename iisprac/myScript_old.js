
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
function HacerPreguntas_ex2()
{
    
    var P = [];
    var R = [];
    var rnd = 1;

    //-------------------------------------------- PV = nRT ; PM = dRT
    
    P[1] = "El volumen de un gas ideal aumenta cuando su temperatura aumenta.";
    R[1] = "V"

    P[2] = "El volumen de un gas ideal aumenta cuando su temperatura disminuye.";
    R[2] = "F"

    P[3] = "El volumen de un gas ideal aumenta cuando su presión disminuye.";
    R[3] = "V";

    P[4] = "El volumen de un gas ideal aumenta cuando su presión aumenta.";
    R[4] = "F";

    P[5] = "La presión de un gas ideal aumenta cuando su temperatura aumenta.";
    R[5] = "V";

    P[6] = "La presión de un gas ideal aumenta cuando su temperatura disminuye.";
    R[6] = "F";

    P[7] = "La presión de un gas ideal aumenta cuando su volumen disminuye.";
    R[7] = "V";

    P[8] = "La presión de un gas ideal aumenta cuando su volumen aumenta.";
    R[8] = "F";

    P[9] = "La temperatura de un gas ideal aumenta cuando su presión aumenta.";
    R[9] = "V";

    P[10] = "La temperatura de un gas ideal aumenta cuando su presión disminuye.";
    R[10] = "F";

    P[11] = "La temperatura de un gas ideal aumenta cuando su volumen aumenta.";
    R[11] = "V";

    P[12] = "La temperatura de un gas ideal aumenta cuando su volumen disminuye.";
    R[12] = "F";

    P[13] = "La densidad de un gas ideal aumenta cuando su presión aumenta.";
    R[13] = "V";

    P[14] = "La densidad de un gas ideal aumenta cuando su presión disminuye.";
    R[14] = "F";

    P[15] = "La densidad de un gas ideal aumenta cuando su temperatura disminuye.";
    R[15] = "V";

    P[16] = "La densidad de un gas ideal aumenta cuando su temperatura aumenta.";
    R[16] = "F";

    //-------------------------------------------- Gas ideal, teoría cinética

    P[17] = "Un gas ideal está compuesto por partículas de volumen insignificante.";
    R[17] = "V";

    P[18] = "Un gas ideal no está compuesto por partículas de volumen insignificante.";
    R[18] = "F";

    P[19] = "Las colisiones entre las particulas de un gas ideal son elásticas.";
    R[19] = "V";

    P[20] = "Las colisiones entre las particulas de un gas ideal son inelásticas.";
    R[20] = "F";

    P[21] = "Las partículas de un gas ideal no ejercen entre sí fuerzas de atracción o de repulsión.";
    R[21] = "V";

    P[22] = "Las partículas de un gas ideal ejercen entre sí fuerzas de atracción o de repulsión.";
    R[22] = "F";

    P[23] = "La temperatura de un gas ideal es directamente proporcional a la energía cinética promedio de sus partículas.";
    R[23] = "V";

    P[24] = "La temperatura de un gas ideal es inversamente proporcional a la energía cinética promedio de sus partículas.";
    R[24] = "F";

//-------------------------------------------- Ley de Dalton

    P[25] = "La presión total de una mezcla de gases es igual a la suma de sus presión parciales.";
    R[25] = "V";

    P[26] = "La presión total de una mezcla de gases es igual al producto de sus presión parciales.";
    R[26] = "F";

//-------------------------------------------- Factor Z, compresibilidad

    P[27] = "Las fuerzas de repulsión entre las partículas de un gas predominan cuando el factor de compresibilidad del gas es mayor a uno.";
    R[27] = "V";

    P[28] = "Las fuerzas de repulsión entre las partículas de un gas predominan cuando el factor de compresibilidad del gas es menor a uno.";
    R[28] = "F";

    P[29] = "Las fuerzas de atracción entre las partículas de un gas predominan cuando el factor de compresibilidad del gas es menor a uno.";
    R[29] = "V";

    P[30] = "Las fuerzas de atracción entre las partículas de un gas predominan cuando el factor de compresibilidad del gas es mayor a uno.";
    R[30] = "F";

    P[31] = "Bajo las mismas condiciones de temperatura y presión, el volumen de un gas real es mayor que el ideal si su factor de compresibilidad es mayor a uno.";
    R[31] = "V";

    P[32] = "Bajo las mismas condiciones de temperatura y presión, el volumen de un gas real es mayor que el ideal si su factor de compresibilidad es menor a uno.";
    R[32] = "F";

    P[33] = "Bajo las mismas condiciones de temperatura y presión, el volumen de un gas real es menor que el ideal si su factor de compresibilidad es menor a uno.";
    R[33] = "V";

    P[34] = "Bajo las mismas condiciones de temperatura y presión, el volumen de un gas real es menor que el ideal si su factor de compresibilidad es mayor a uno.";
    R[34] = "F";

//-------------------------------------------------- Principio de los estados correspondientes

    P[35] = "En el punto crítico, un líquido y su vapor tienen la misma densidad.";
    R[35] = "V";

    P[36] = "En el punto crítico, un líquido y su vapor tienen diferente densidad.";
    R[36] = "F";

    //----------------------------------------------------
    
    var MAX = 36;
       
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

    QUESTION  = "<center><b>Primer Examen Parcial de Termodinámica: Conceptos.</b></center><br>";
    QUESTION += "<center>Prof. Octavio Juárez.</center><br>";
    QUESTION += "<b>Instrucciones:</b> Contesta ¿Falso o Verdadero?<br>"
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

    QUESTION  = "<center><b>Primer Examen Parcial de Termodinámica: Problemas.</b></center><br>";
    QUESTION += "<center>Prof. Octavio Juárez.</center><br>";

    var rnd = irand(1,3);
    
    //rnd = 1;
       
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

    contador = 0;
    registro = [];

    QUESTION  = "<center><b>Segundo Examen Parcial de Termodinámica: Conceptos.</b></center><br>";
    QUESTION += "<center>Prof. Octavio Juárez.</center><br>";
    QUESTION += "<b>Instrucciones:</b> Contesta ¿Falso o Verdadero?<br>"
    ANSWER = "<center><b>Respuestas</b></center><br>"
    
    QUESTION +="<ol>";
    ANSWER +="<ol>";
    
    for(var i=0;i<20;i++)
    {
        HacerPreguntas_ex2()
        QUESTION +="<li>" + LaPregunta + "<br><br>";
        ANSWER   +="<li>" + LaRespuesta + "<br><br>";  
    }
    
    QUESTION +="</ol>";
    ANSWER += "</ol>";
    
}

//----------------------------------------------------- EX_2_PROBLEMAS
function ex_2_problemas()
{

    QUESTION = ""
    ANSWER = ""

    QUESTION  = "<center><b>Segundo Examen Parcial de Termodinámica: Problemas.</b></center><br>";
    QUESTION += "<center>Prof. Octavio Juárez.</center><br>";

    QUESTION += "<b>Problema 1:</b><br><br>"
    ANSWER += "<b>Respuesta 1:</b><br><br>"
    prob_ex2_gasideal();

    QUESTION += "<b>Problema 2:</b><br><br>"
    ANSWER += "<b>Respuesta 2:</b><br><br>"
    prob_ex2_gasideal2();

    QUESTION += "<b>Problema 3:</b><br><br>"
    ANSWER += "<b>Respuesta 3:</b><br><br>"
    if(irand(1,2)===1)
        prob_ex2_Z();
    else
        prob_ex2_dalton();


    QUESTION += "<b>Problema 4:</b><br><br>"
    ANSWER += "<b>Respuesta 4:</b><br><br>"
    prob_ex2_vanderwaals2();
    
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

    QUESTION = ""
    ANSWER = ""

    QUESTION  = "<center><b>Tercer Examen Parcial de Termodinámica: Problemas.</b></center><br>";
    QUESTION += "<center>Prof. Octavio Juárez.</center><br>";

    QUESTION += "<b>Problema 1:</b><br><br>"
    ANSWER += "<b>Respuesta 1:</b><br>"
    prob_ex3_proc_isobarico();

    QUESTION += "<b>Problema 2:</b><br><br>"
    ANSWER += "<b>Respuesta 2:</b><br>"
    prob_ex3_proc_isotermico();

    QUESTION += "<b>Problema 3:</b><br><br>"
    ANSWER += "<br><b>Respuesta 3:</b><br>"
    prob_ex3_proc_isocorico();

    QUESTION += "<b>Problema 4:</b><br><br>"
    ANSWER += "<br><b>Respuesta 4:</b><br>"
    prob_ex3_proc_adiabatico();
    
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

//----------------------------------------------------- PROCESO ADIABATICO
function prob_ex3_proc_adiabatico()
{

	var n = irand(2,5);
    var R = 8.314;
	if(irand(1,2)===1)
		{var Cv = 3.0/2.0*R;}
	else
		{var Cv = 5.0/2.0*R;}	
		
    var c = Cv/(n*R);
    var Cp = n*R + Cv;
    var gamma = Cp/Cv;
    
    while(1)
    {
        var T1 = irand(10,300);
        var T2 = irand(10,300);
        if(Math.abs(T1-T2)>10) break;
    }
    
    var V1 = irand(10,50); //L
    var P1 = n*0.08206*(T1+273.15)/V1;//atm
    var V2 = V1*Math.pow(T1+273.15,c)/Math.pow(T2+273.15,c); //L
    var P2 = P1*Math.pow(V1,gamma)/Math.pow(V2,gamma);//atm
    
    
	QUESTION += n +" mol de gas ideal (C<sub>v</sub> = "+Cv+" J/K) ocupan "+V1+" L a "+T1+" °C y "+round2(P1)+ " atm. ";   
	QUESTION += "El gas se somete a un proceso adiabático y su temperatura y volumen cambian a "+T2+" °C y "+round2(V2)+" L. ";
	QUESTION += "Calcular el trabajo, el calor, el cambio en la energía interna y el cambio de entalpía.<br>";
	QUESTION += "<br>";

	T1 = T1 + 273.15;
	T2 = T2 + 273.15;
    V1 = V1/1000.0; //m3
    V2 = V2/1000.0; //m3
    P1 = P1*101325.0; //Pa
    P2 = P2*101325.0; //Pa
    
	var q = 0;
	var w = Cv*(T2-T1);
	var deltaU = q + w;
    var deltaH = deltaU + (P2*V2- P1*V1);
			
	ANSWER += "w = "+round2(w)+" J.<br>";
	ANSWER += "q = "+round2(q)+" J.<br>";
	ANSWER += "&Delta;U = "+round2(deltaU)+" J.<br>";
    ANSWER += "&Delta;H = "+round2(deltaH)+" J.<br><br>";
    
}


//----------------------------------------------------- PROCESO ISOCORICO
function prob_ex3_proc_isocorico()
{

    var n = irand(2,5);
	var Ts = irand(10,300);
	var Ta = irand(10,300);
	var R = 8.314;
    var V = irand(20,50);
	if(irand(1,2)===1)
		{var C = 3.0/2.0*R;}
	else
		{var C = 5.0/2.0*R;}	

    var P1 = 0.08206*(Ts+273.15)/V; //atm
    var P2 = 0.08206*(Ta+273.15)/V; //atm
		
    
	QUESTION += n + " mol de gas ideal (C<sub>v</sub> = "+C+" J/K) ocupan "+V+" L a "+Ts+" °C y "+round2(P1)+" atm. ";
	QUESTION += "El gas se somete a un proceso isocórico mientras que la temperatura de los alrededores es de "+Ta+" °C. ";
	QUESTION += "Calcular el trabajo, el calor, el cambio en la energía interna y el cambio de Entalpía.<br>";
	QUESTION += "<br>";

	Ts = Ts + 273.15;
	Ta = Ta + 273.15;
    
    V = V/1000.0; //m3
    
    P1 = P1*101325.0; //Pa
    P2 = P2*101325.0; //Pa

	var q = C*(Ta - Ts);
	var w = 0;
	var deltaU = q + w;
    var deltaH = deltaU + V*(P2-P1);
			
	ANSWER += "w = "+w+" J.<br>";
	ANSWER += "q = "+round2(q)+" J.<br>";
	ANSWER += "&Delta;U = "+round2(deltaU)+" J.<br>";
    ANSWER += "&Delta;H = "+round2(deltaH)+" J.<br><br>";
    
}

//----------------------------------------------------- PROCESO ISOBARICO
function prob_ex3_proc_isobarico()
{
	
	if(irand(1,2)===1) //EXPANSION
	{
		var R = 0.08206; 
		var P = irand(1,10);
		var n = irand(1,5);		
		while(1)
		{
			var V1 = irand(1,50);
			var V2 = irand(1,50);
			if( V2 > V1) break;
		}
		var T1 = P*V1/(n*R);
		var T2 = P*V2/(n*R);
		
		var T1_C = round2(T1 - 273.15);
		var T2_C = round2(T2 - 273.15);
		var V1_m3 = V1/1000.0;
		var V2_m3 = V2/1000.0;
		var P_Pa = P*101325.0;
		
		var w = round2(-P_Pa * (V2_m3 - V1_m3));
		var q = round2(-rand(1,3)*w);
		var deltaU = round2(w + q);
        var deltaH = q;
		
		if(irand(1,2)===1)
		{			
			QUESTION += "Un gas ideal ("+n+" mol) se somete a un proceso isobárico ("+P+" atm). ";
			QUESTION += "El volumen inicial es de "+V1+" L y el final de "+V2+" L. ";
			QUESTION += "El gas absorbe "+q+" J en forma de calor durante el proceso. ";
			QUESTION += "Calcular el trabajo, el calor, el cambio en la energía interna y el cambio de entalpía.<br>";
			QUESTION += "<br>";
		}
		else
		{
			QUESTION += "Un gas ideal ("+n+" mol) se somete a un proceso isobárico ("+P+" atm). ";
			QUESTION += "La temperatura inicial es de "+T1_C+" °C y la final de "+T2_C+" °C. ";
			QUESTION += "El gas absorbe "+q+" J en forma de calor durante el proceso. ";
			QUESTION += "Calcular el trabajo, el calor, el cambio en la energía interna y el cambio de entalpía.<br>";
			QUESTION += "<br>";
		}
				
		ANSWER += "w = "+w+" J.<br>";
		ANSWER += "q = "+q+" J.<br>";
		ANSWER += "&Delta;U = "+deltaU+" J.<br>";
        ANSWER += "&Delta;H = "+deltaH+" J.<br><br>";
			
	}
	else // COMPRESION
	{
		var R = 0.08206; 
		var P = irand(1,10);
		var n = irand(1,5);		
		while(1)
		{
			var V1 = irand(1,50);
			var V2 = irand(1,50);
			if( V2 < V1) break;
		}
		var T1 = P*V1/(n*R);
		var T2 = P*V2/(n*R);
		
		var T1_C = round2(T1 - 273.15);
		var T2_C = round2(T2 - 273.15);
		var V1_m3 = V1/1000.0;
		var V2_m3 = V2/1000.0;
		var P_Pa = P*101325.0;
		
		var w = round2(-P_Pa * (V2_m3 - V1_m3));
		var q = round2(-rand(1,3)*w);
		var deltaU = round2(w + q);
        var deltaH = q;
		
		if(irand(1,2)===1)
		{			
			QUESTION += "Un gas ideal ("+n+" mol) se somete a un proceso isobárico ("+P+" atm). ";
			QUESTION += "El volumen inicial es de "+V1+" L y el final de "+V2+" L. ";
			QUESTION += "El gas pierde "+-q+" J en forma de calor durante el proceso. ";
			QUESTION += "Calcular el trabajo, el calor, el cambio en la energía interna y el cambio de entalpía.<br>";
			QUESTION += "<br>";
		}
		else
		{
			QUESTION += "Un gas ideal ("+n+" mol) se somete a un proceso isobárico ("+P+" atm). ";
			QUESTION += "La temperatura inicial es de "+T1_C+" °C y la final de "+T2_C+" °C. ";
			QUESTION += "El gas pierde "+-q+" J en forma de calor durante el proceso. ";
			QUESTION += "Calcular el trabajo, el calor, el cambio en la energía interna y el cambio de entalpía.<br>";
			QUESTION += "<br>";
		}
				
		ANSWER += "w = "+w+" J.<br>";
		ANSWER += "q = "+q+" J.<br>";
		ANSWER += "&Delta;U = "+deltaU+" J.<br>";
        ANSWER += "&Delta;H = "+deltaH+" J.<br><br>";
	}
		
		
    
}

//----------------------------------------------------- PROCESO ISOTERMICO
function prob_ex3_proc_isotermico()
{
    
    var rnd = irand(1,2);
    
    if(rnd===1)
    {
        while(1)
        {
            var P1 = irand(1,10);
            var P2 = irand(1,10);
            if(Math.abs(P1-P2)>=2) break;
        }

        var V1 = 1;
        var V2 = 1;
        var n = irand(2,5);
        var R = 8.314;
        var T = irand(25,400);
        var w = 0;
        var w_ = 0;
        var q = 0;
        var deltaU = 0;
        var deltaH = 0;

        QUESTION += "Un gas ideal ("+n+" mol) se somete a un proceso isotérmico ("+T+" °C). "
        QUESTION += "La presión inicial es de "+P1+" atm y la final de "+P2+" atm. "
        QUESTION += "Calcular el trabajo, el calor, el cambio en la energía interna y el cambio de Entalpía.<br>";
        QUESTION += "<br>";

        T = T + 273.15;
        P1 = P1*101325.0; //Pa
        P2 = P2*101325.0; //Pa
        V1 = n * R * T / P1; //m3
        V2 = n * R * T / P2; //m3
        w = -n * R * T * Math.log(P1/P2); // J
        q = -w;
        deltaU = 0;
        deltaH = 0.0; //deltaU + (P1*V1 - P2*V2);
        
            
        ANSWER += "w = "+round2(w)+" J.<br>";
        ANSWER += "q = "+round2(q)+" J.<br>";
        ANSWER += "&Delta;U = "+deltaU+" J.<br>";
        ANSWER += "&Delta;H = "+deltaH+" J.<br>";
        ANSWER += "<br>";
    }

    if(rnd===2)
    {
        while(1)
        {
            var V1 = irand(1,40);
            var V2 = irand(1,40);
            if(Math.abs(V1-V2)>=5) break;
        }

        var P1 = 1;
        var P2 = 1;
        var n = irand(2,5);
        var R = 8.314;
        var T = irand(25,400);
        var w = 0;
        var w_ = 0;
        var q = 0;
        var deltaU = 0;
        var deltaH = 0;

        QUESTION += "Un gas ideal ("+n+" mol) se somete a un proceso isotérmico ("+T+" °C). "
        QUESTION += "El volumen inicial es de "+V1+" L y el final de "+V2+" L. "
        QUESTION += "Calcular el trabajo, el calor, el cambio en la energía interna y el cambio de Entalpía.<br>";
        QUESTION += "<br>";

        T = T + 273.15;
        V1 = V1/1000.0; //m3
        V2 = V2/1000.0; //m3
        P1 = n * R * T / V1; //Pa
        P2 = n * R * T / V2; //Pa
        w = -n * R * T * Math.log(V2/V1); // J
        q = -w;
        deltaU = 0;
        deltaH = 0; //deltaU + (P1*V1 - P2*V2);
            
        ANSWER += "w = "+round2(w)+" J.<br>";
        ANSWER += "q = "+round2(q)+" J.<br>";
        ANSWER += "&Delta;U = "+deltaU+" J.<br>";
        ANSWER += "&Delta;H = "+deltaH+" J.<br>";
        ANSWER += "<br>";
    }


    
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
        QUESTION += "El gas se somete a un proceso a presión constante y la temperatura cambia a "+T2+" °C. ";
        QUESTION += "¿Cuál será el volumen final (en litros) del gas?<br>";
        QUESTION += "<br>";

        T1 = T1 + 273.15;
        T2 = T2 + 273.15;

        V2 = V1*T2/T1;

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
        QUESTION += "El gas se somete a un proceso a presión constante y el volumen cambia a "+V2+" L. ";
        QUESTION += "¿Cuál será la temperatura final (en °C) del gas?<br>";
        QUESTION += "<br>";

        T1 = T1 + 273.15;
        
        T2 = V2*T1/V1;
        
        T2 = T2 - 273.15;

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
        QUESTION += "Al final del proceso, el volumen del gas es "+factor+" del volumen inicial. ";
        QUESTION += "¿Cuál es la temperatura final (en °C) del gas?<br>";
        QUESTION += "<br>";

        T1 = T1 + 273.15;
        
        if(op===1) T2 = 2.0*T1;
        if(op===2) T2 = 3.0*T1;
        if(op===3) T2 = 1.0/2.0*T1;
        if(op===4) T2 = 1.0/3.0*T1;
        
        T2 = T2 - 273.15;

		ANSWER += T2+" °C.<br>";
        ANSWER += "<br>";

	}

}

//----------------------------------------------------- LEY DE BOYLE
function prob_ex1_boyle()
{
    var rnd = irand(1,3);

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
        QUESTION += "El gas se somete a un proceso a temperatura constante y su volumen cambia a "+V2+" L. ";
        QUESTION += "¿Cuál es la presión final (en kPa) del gas?<br>";
        QUESTION += "<br>";

        P2 = V1*P1/V2; // atm
        
        P2 = P2*101325.0; // Pa
        
        P2 = P2/1000.0; // kPa

		ANSWER += P2+" Pa.<br>";
        ANSWER += "<br>";

	}

	if(rnd === 2) //
	{
        
        V1 = irand(500,10000); // L
        
        while(1)
        {
            P1 = rand(1,15);
            P2 = rand(1,15);
            if( Math.abs(P1 - P2) > 3.0 ) break;
        }
        
        QUESTION += "A "+P1+" atm el volumen de un gas es de "+V1+" L. ";
        QUESTION += "El gas se somete a un proceso a temperatura constante y su presión cambia a "+P2+" atm. ";
        QUESTION += "¿Cuál es el volumen final (en m<sup>3</sup>) del gas?<br>";
        QUESTION += "<br>";

        V2 = V1*P1/P2; // L
        
        V2 = V2/1000.0 // m**3

		ANSWER += V2+" m<sup>3</sup>.<br>";
        ANSWER += "<br>";

	}


	if(rnd === 3) //
	{
        
        P1 = rand(1,10); // atm
        
        var op=irand(1,4);
        
        if(op===1) var factor = "el doble";
        if(op===2) var factor = "el triple";
        if(op===3) var factor = "un medio";
        if(op===4) var factor = "un tercio";

        QUESTION += "Al inicio de un proceso a temperatura constante, la presión de un gas es de "+P1+" atm. ";
        QUESTION += "Al final del proceso, el volumen del gas es "+factor+" del volumen inicial. ";
        QUESTION += "¿Cuál es la presión final (en kPa) del gas?<br>";
        QUESTION += "<br>";
        
        if(op===1) P2 = P1/2.0;
        if(op===2) P2 = P1/3.0;
        if(op===3) P2 = 2*P1;
        if(op===4) P2 = 3*P1;

        P2 = P2*101325.0;  // Pa
        
        P2 = P2/1000.0; // kPa

		ANSWER += P2+" kPa.<br>";
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
        
        V1 = rand(1,10);

        QUESTION += "A cierta temperatura y presión, el volumen de "+n1+" mol de un gas desconocido es de "+V1+" L. ";
        QUESTION += "¿Cuál será el volumen (en mL) de "+n2+" mol de dicho gas a la misma temperatura y presión?<br>";
        QUESTION += "<br>";

        V2 = V1*n2/n1; // L
        
        V2 = V2*1000.0; //mL

		ANSWER += V2+" mL.<br>";
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

        QUESTION += "Si "+gramos+" g de O<sub>2</sub> [M=32 g/mol] ocupan un volumen de "+V1+" L a cierta temperatura y presión. ";
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

        QUESTION += "Si "+gramos+" g de Ar [M=40 g/mol] ocupan un volumen de "+V1+" L a cierta temperatura y presión. ";
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

    var rnd = irand(1,4);
    
    var rho = 1;   
    var g = 9.81;       
    var h = 1;
    var Pabs = 1;
    var Pmano = 1;
    var Patm = 1;
    var P = 1;

	if(rnd === 1) //
	{
        
        Pmano = irand(100,1000)*1.0;   // mmHg

        QUESTION += "La medición en un manómetro de tubo U abierto es de "+Pmano+" mmHg. "
        QUESTION += "Calcular la presión absoluta en kPa.<br>";
        QUESTION += "<br>";
        
        Pmano = Pmano;             // mmHg
        Pmano = Pmano*(1.0/760.0); // atm
        Pmano = Pmano*(101325);    // Pa
        
        Patm = 101325.0;             // Pa
        
        Pabs = Pmano + Patm;  // Pa
        
        Pabs = Pabs/1000.0; // kPa
        
		ANSWER += Pabs+" kPa.<br>";
        ANSWER += "<br>";

    }        

	if(rnd === 2) //
	{
        
        Pmano = irand(100,700)*1.0;   // mmHg

        QUESTION += "La medición en un manómetro de tubo U cerrado es de "+Pmano+" mmHg. "
        QUESTION += "Calcular la presión absoluta en kPa.<br>";
        QUESTION += "<br>";
        
        Pmano = Pmano;             // mmHg
        Pmano = Pmano*(1.0/760.0); // atm
        Pmano = Pmano*(101325);    // Pa
        
        Patm = 101325.0;             // Pa
        
        Pabs = Patm - Pmano; // Pa
        
        Pabs = Pabs/1000.0; // kPa
        
		ANSWER += Pabs+" kPa.<br>";
        ANSWER += "<br>";

    }       
    
	if(rnd === 3) //
	{
        
        h = irand(50,1000)*1.0; // cm
        rho = 0.997; // g/mL

        QUESTION += "Calcular (en kPa) la presión que ejerce una columna de agua [&rho; = "+rho+" g/mL] de "+h+" cm de altura. "
        QUESTION += "<br><br>";
        
        rho = rho*1000.0;      // kg/m**3
        h = h/100.0;           // m
        g = 9.81;              // m/s**2        
        P = rho*g*h;           // Pa
        P = P/1000.0;          // kPa
        
		ANSWER += P+" kPa.<br>";
        ANSWER += "<br>";

    }    

	if(rnd === 4) //
	{
        
        P = rand(1,5);   // atm
        rho = 1.027;     // g/mL

        QUESTION += "Calcular la altura (en metros) de una columna de agua de mar [&rho; = "+rho+" g/mL] ";
        QUESTION += "que ejerce una presión de "+P+" atm. <br>";
        QUESTION += "<br>";
        
        rho = rho*1000.0;      // kg/m**3
        g = 9.81;              // m/s**2        
        P = P*101325.0;        // Pa
        h = P/(rho*g);         // m
        
		ANSWER += h+" m.<br>";
        ANSWER += "<br>";

    } 
    
}

//--------------------------------------------- P1*V1/T1 = cte

function prob_ex2_gasideal()
{
    var rnd = irand(1,6);

    var P1 = 1;
    var P2 = 1;
    var V1 = 1;
    var V2 = 1;
    var T1 = 1;
    var T2 = 1;
    
	if(rnd === 1) // T cte
	{
        while(1)
        {
            P1 = irand(1,10);
            P2 = irand(1,10);     
            if( Math.abs(P1 - P2) >= 1 ) break;            
        }        
        
        V1 = irand(5,50);
        V2 = P1*V1/P2;
        
        QUESTION += "A "+P1+" atm el volumen de un gas es de "+V1+" L. ";
        QUESTION += "El gas se somete a un proceso a temperatura constante y su presión cambia a "+P2+" atm. ";
        QUESTION += "¿Cuál es el volumen final del gas?<br>";
        QUESTION += "<br>";
        
		ANSWER += V2+" L<br>";
        ANSWER += "<br>";
	}

	if(rnd === 2) // T cte
	{
        while(1)
        {
            V1 = irand(10,50);
            V2 = irand(10,50);     
            if( Math.abs(V1 - V2) >= 5 ) break;            
        }        
        
        P1 = irand(1,10);
        P2 = P1*V1/V2;
        
        QUESTION += "A "+P1+" atm el volumen de un gas es de "+V1+" L. ";
        QUESTION += "El gas se somete a un proceso a temperatura constante y su volumen cambia a "+V2+" L. ";
        QUESTION += "¿Cuál es la presión final del gas?<br>";
        QUESTION += "<br>";
        
		ANSWER += P2+" atm<br>";
        ANSWER += "<br>";
	}

	if(rnd === 3) // P cte
	{
        while(1)
        {
            T1 = irand(10,100);
            T2 = irand(10,100);     
            if( Math.abs(T1 - T2) >= 20 ) break;            
        }        
        
        V1 = irand(5,50);

        
        QUESTION += "A "+T1+" °C el volumen de un gas es de "+V1+" L. ";
        QUESTION += "El gas se somete a un proceso a presión constante y su temperatura cambia a "+T2+" °C. ";
        QUESTION += "¿Cuál es el volumen final del gas?<br>";
        QUESTION += "<br>";
        
        T1 = T1 + 273.15;
        T2 = T2 + 273.15;
        V2 = V1*T2/T1;
        
		ANSWER += V2+" L<br>";
        ANSWER += "<br>";
	}

	if(rnd === 4) // P cte
	{
        while(1)
        {
            V1 = irand(10,50);
            V2 = irand(10,50);     
            if( Math.abs(V1 - V2) >= 5 ) break;            
        }        
        
        T1 = irand(10,100);
        
        QUESTION += "A "+T1+" °C el volumen de un gas es de "+V1+" L. ";
        QUESTION += "El gas se somete a un proceso a presión constante y su volumen cambia a "+V2+" L. ";
        QUESTION += "¿Cuál es la temperatura final del gas?<br>";
        QUESTION += "<br>";
        
        T1 = T1 + 273.15;
        T2 = V2*T1/V1;
        T2 = T2 - 273.15;
        
		ANSWER += T2+" °C<br>";
        ANSWER += "<br>";
	}

	if(rnd === 5) // V cte
	{
        while(1)
        {
            T1 = irand(10,100);
            T2 = irand(10,100);     
            if( Math.abs(T1 - T2) >= 20 ) break;            
        }        
        
        P1 = irand(1,10);

        QUESTION += "A "+T1+" °C la presión de un gas es de "+P1+" atm. ";
        QUESTION += "El gas se somete a un proceso a volumen constante y su temperatura cambia a "+T2+" °C. ";
        QUESTION += "¿Cuál es la presión final del gas?<br>";
        QUESTION += "<br>";
        
        T1 = T1 + 273.15;
        T2 = T2 + 273.15;
        P2 = P1*T2/T1;
        
		ANSWER += P2+" atm<br>";
        ANSWER += "<br>";
	}

	if(rnd === 6) // V cte
	{
        while(1)
        {
            P1 = irand(1,10);
            P2 = irand(1,10);     
            if( Math.abs(P1 - P2) >= 1 ) break;            
        }        
        
        T1 = irand(10,100);
        
        QUESTION += "A "+P1+" atm la temperatura de un gas es de "+T1+" °C. ";
        QUESTION += "El gas se somete a un proceso a volumen constante y su presión cambia a "+P2+" atm. ";
        QUESTION += "¿Cuál es la temperatura final del gas?<br>";
        QUESTION += "<br>";
        
        T1 = T1 + 273.15;
        T2 = P2*T1/P1;
        T2 = T2 - 273.15;
        
		ANSWER += T2+" °C<br>";
        ANSWER += "<br>";
	}

}


//--------------------------------------------- P M = d R T

function prob_ex2_gasideal2()
{
    var rnd = irand(1,2);

    var P = 1;
    var V = 1;
    var T = 1;
    var d = 1;
    var n = 1;
    var M = 1;
    var Z = 1;
    var R = 0.08206;

	if(rnd === 1)
	{
        var op=irand(1,5);
        
        if(op===1){NAME="H<sub>2</sub>"; M=2;}
        if(op===2){NAME="CO<sub>2</sub>"; M=44;}
        if(op===3){NAME="Ar"; M=40;}
        if(op===4){NAME="He"; M=4;}
        if(op===5){NAME="Cl<sub>2</sub>"; M=71;}
        if(op===6){NAME="CH<sub>4</sub>"; M=16;}
        
        P = irand(1,10);
        T = irand(10,80);
        
        QUESTION += "Suponiendo que el "+NAME+" (M = "+M+" g/mol) se comporta como un gas ideal, ";
        QUESTION += "calcular su densidad a "+P+" atm y "+T+" °C. <br>";
        QUESTION += "<br>";
        
        T = T + 273.15;
        d = P*M/(R*T)
        
		ANSWER += d+" g/L<br>";
        ANSWER += "<br>";
	}
    
	if(rnd === 2)
	{        
        P = irand(1,10);
        T = irand(10,80);
        d = irand(1,10);
        
        QUESTION += "La densidad de un gas desconocido es de "+d+" g/L a "+P+" atm y "+T+" °C. <br>";
        QUESTION += " Suponiendo que dicho gas se comporta idealmente, calcular su peso molecular.<br>";
        QUESTION += "<br>";
        
        T = T + 273.15;
        M = d*R*T/P;
        
		ANSWER += M+" g/mol<br>";
        ANSWER += "<br>";
	}
  
}

function prob_ex2_Z()
{
    
    var P = irand(1,10);
    var T = irand(10,80);
    var R = 0.08206;
    var Vreal = rand(10,30);
    var V = 1;
    
    QUESTION += "El volumen real de un mol de gas desconocido es de "+Vreal+" L (a "+P+" atm y "+T+" °C). ";
    QUESTION += " Calcular su factor de compresibilidad.<br>";
    QUESTION += "<br>";
    
    T = T + 273.15;
    V = 1*R*T/P;        
    Z = Vreal/V;
    
    ANSWER += "Z = "+Z+"<br>";
    ANSWER += "<br>";
    
}

function prob_ex2_dalton()
{
    var Ptotal = 1;
    var P1 = 1;
    var P2 = 1;
    var V = irand(10,40);
    var T = irand(10,80);
    var R = 0.08206;
    var X1 = 1;
    var X2 = 1;
    
    var rnd = irand(1,2);
    
    if(rnd === 1)
    {
        while(1)
        {
            var n1 = rand(0.5,2.0);
            var n2 = rand(0.5,2.0);
            if( Math.abs(n1-n2)>0.5) break;
        }

        QUESTION += "Una mezcla de "+V+" L de gas contiene "+n1+" mol del gas A y "+n2+" mol del gas B. ";
        QUESTION += "Suponiendo que ambos gases son ideales, calcular la presión total de la mezcla a "+T+" °C. <br>";
        QUESTION += "<br>";
        
        T = T + 273.15;
        P1 = n1*R*T/V;
        P2 = n2*R*T/V;
        Ptotal = P1 + P2;
        
        ANSWER += Ptotal+" atm<br>";
        ANSWER += "<br>";
    }
    
    if(rnd === 2)
    {
        P1 = irand(1,10);
        X1 = rand2(0.1,0.9);
        X1 = round2(X1);
        
        X1 = irand(1,9)/10.0;
        
        QUESTION += "Considere una mezcla de gases ideales de dos componentes. ";
        QUESTION += "La presión parcial del primer componente es de "+P1+" atm y su fracción molar es de "+X1+". ";
        QUESTION += "¿Cuál es la presión parcial del segundo componente?<br>";
        QUESTION += "<br>";

        Ptotal = P1/X1;
        X2 = 1 - X1;
        P2 = X2*Ptotal;

        ANSWER += P2+" atm<br>";
        ANSWER += "<br>";

        
    }

    
}

//----------------------------------------------------- LEY DE BOYLE
function prob_ex2_vanderwaals()
{
    
    var rnd = irand(1,6);
    var NAME;
    var a;
    var b;
    var T;
    var P;
    var R=0.08206;
    var n;
    var Vi;
    var V;
    
    if(rnd===1)
    {
        NAME = "O<sub>2</sub>";
        a = 1.36;
        b = 0.0318;
    }

    if(rnd===2)
    {
        NAME = "CO<sub>2</sub>";
        a = 3.61;
        b = 4.29e-2;
    }
    
    if(rnd===3)
    {
        NAME = "Cl<sub>2</sub>";
        a = 6.49;
        b = 0.0562;
    }
    
    if(rnd===4)
    {
        NAME = "CH<sub>4</sub>";
        a = 2.25;
        b = 0.0428;
    }

    if(rnd===5)
    {
        NAME = "CCl<sub>4</sub>";
        a = 20.4;
        b = 0.138;
    }

    if(rnd===6)
    {
        NAME = "NH<sub>3</sub>";
        a = 4.17;
        b = 0.0371;
    }



    P = rand(5,10)*10;
    T = rand(50,100)*10;
    n = irand(1,5);

    QUESTION += "Calcular el volumen (mediante la ecuación de van der Waals) de "+n+" mol de "+NAME+" a "+P+" atm y "+T+" K. <br>";
    QUESTION += "a = "+a+" atm L<sup>2</sup> / mol<sup>2</sup>. <br>";
    QUESTION += "b = "+b+" L / mol. ";
    QUESTION += "<br>";

    Vi = n*R*T/P;

    V = 0.5*Vi;

    while(1)
    {
        
        var EQ = (P + a*n*n/(V*V))*(V - n*b) - n*R*T;
        
        console.log(V, EQ);
        
        if(Math.abs(EQ) <= 0.01 || V >= 2.0*Vi) break;
        
        V += 0.0001;
        
    }
    
    ANSWER += "V (ideal) = "+Vi + " L.<br>";
    ANSWER += "V (real) = "+V + " L.<br>";
    ANSWER += "<br>";
    
}

//----------------------------------------------------- LEY DE BOYLE
function prob_ex2_vanderwaals2()
{
    
    var rnd = irand(1,4);
    var NAME;
    var a;
    var b;
    var T;
    var P;
    var R=0.08206;
    var n;
    var Vi;
    var V;
    

    if(rnd===1)
    {
        NAME = "CO<sub>2</sub>";
        a = 3.61;
        b = 4.29e-2;
    }
    
    if(rnd===2)
    {
        NAME = "Cl<sub>2</sub>";
        a = 6.49;
        b = 0.0562;
    }
    

    if(rnd===3)
    {
        NAME = "CCl<sub>4</sub>";
        a = 20.4;
        b = 0.138;
    }

    if(rnd===4)
    {
        NAME = "NH<sub>3</sub>";
        a = 4.17;
        b = 0.0371;
    }



    P = rand(5,10)*10;
    T = rand(50,100)*10;
    n = irand(1,5);

    QUESTION += "Calcular el volumen (mediante la ecuación de van der Waals) de "+n+" mol de "+NAME+" a "+P+" atm y "+T+" K. <br>";
    QUESTION += "a = "+a+" atm L<sup>2</sup> / mol<sup>2</sup>. <br>";
    QUESTION += "b = "+b+" L / mol. ";
    QUESTION += "<br>";

    Vi = n*R*T/P;

    var F,FP;
    var iter = 0;;
    var imax = 100;
    var tol = 0.001;
    V = Vi;

    console.log("......................");

    while(1)
    {
                
        F = P*V*V*V + (-P*n*b-n*R*T)*V*V + a*n*n*V - a*n*n*n*b;
        
        FP = 3*P*V*V + 2*(-P*n*b-n*R*T)*V + a*n*n;
        
        console.log(iter,V, F, FP);
        
        if(Math.abs(F) <= tol || iter >= imax) break;
        
        V = V - F/FP;
        iter += 1;
        
    }
    
    ANSWER += "V <sub>ideal</sub> = "+Vi + " L.<br>";
    ANSWER += "V <sub>real</sub> = "+V + " L.<br>";
    ANSWER += "<br>";
    
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


