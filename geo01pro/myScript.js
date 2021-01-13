
var QTN;
var ANS;

var usrans;
var trueans;
var fkans = [];

var score;
var oks;
var fails;
var uni;


var symbols = [];
var names = [];
var PM = [];
//var is_molar_mass;
var z=0;
var zmin=1;
var zmax=15;
var zold=0;
//var z1,z2,z3,z4; //fakes


var act=1;
var uname;
var ii=1; //contador
var iimax=25; //num de preguntas
var maxtleft=iimax*60; //60s por pregunta
var pnts=4;
var tleft=maxtleft;
var isgameover=false;

//------------------------------------------------------------------------------
var downloadTimer = setInterval(function(){
  if(tleft <= 0 && !isgameover){
    //clearInterval(downloadTimer);
    document.getElementById("info2").innerHTML = "Tiempo: 0";
	gameover();
  } else {
    document.getElementById("info2").innerHTML = "Tiempo: " + tleft;
  }
  tleft -= 1;
}, 1000);

//------------------------------------------------------------------------------
function start(){
	
	ii = 1;
	oks = 0;
	tleft = maxtleft;
	isgameover = false;

	uname = document.getElementById("student_name").value;

	document.getElementById("user_name").style.display = "none";
	document.getElementById("buttons").style.display = "block";
	document.getElementById("answer_").style.display = "none";
	document.getElementById("start_").style.display = "none";
	document.getElementById("next_").style.display = "none";
	document.getElementById("score").style.display = "block";
	
	resetScore();
    
    loadData();
		
	play();

}

//------------------------------------------------------------------------------
function play(){

	var rnd;
	
	updateScore();
	
	test();
		
	document.getElementById("question").innerHTML = QTN;
	document.getElementById("answer").innerHTML = ANS;

	showAns();

}


//------------------------------------------------------------------------------
function test(){

    let op = rndi(1,4);

    if(op===1) conv_P();
    if(op===2) conv_T();
    if(op===3) conv_V();
    if(op===4) conv_n();    
    
	// let op = rndi(1,13);
    
    // gas ideal
    // if(op===1) eq_gas_ideal_1(rndi(1,7));
    // if(op===2) eq_gas_ideal_2(rndi(1,2));
    // if(op===3) eq_gas_ideal_3(rndi(1,9));
    // if(op===4) eq_dalton(rndi(1,7));
    
    // 1a Ley
    // if(op===5) eq_dU_w_q(rndi(1,4));
    
    // 1a Ley, proceso isobarico
	// if(op===6) eq_w_isobarico(1);
	// if(op===7) eq_q_isobarico(rndi(1,2));
    
    // 1a Ley, proceso isocórico
	// if(op===8) eq_q_isocorico(rndi(1,2)); 

    // 1a Ley, proceso isotérmico
	// if(op===9) eq_w_isotermico(rndi(1,3));
    // if(op===10) eq_q_isotermico(rndi(1,2));
    
    // 1a Ley, proceso adiabatico
    // if(op===11) eq_w_adiabatico(rndi(1,2));
    // if(op===12) eq_PV_adiabatico(rndi(1,3));
    // if(op===13) eq_R_Cp_Cv(rndi(1,2)); 


}

//------------------------------------------------------------------------------
function conv_T(){
    
    let opt = rndi(1,2);
    let T;

    // °C -> K
	if(opt===1){
		T = rndi(-200,300);
		QTN = "Convierte "+T+" °C en K.<br><br>";
		ANS = T + 273.15; uni = "K";
	}

	// K -> °C
	if(opt===2){
		T = rndi(10, 500);
		QTN = "Convierte "+T+" K en °C.<br><br>";
		ANS = T - 273.15; uni = "°C";
	} 
    
}

//------------------------------------------------------------------------------
function conv_P(){
    
    let opt = rndi(1,6);
    let P;
    
    /*
    1 atm = 760 mmHg
    1 atm = 101325 Pa
    760 mmHg = 101325 Pa
    */
    
	// atm -> mmHg
	if(opt===1){
		P = rndi(1,10);
		QTN = "Convierte "+P+" atm en mmHg.<br><br>";
		ANS = 760*P; uni = "mmHg";
	}

	// mmHg -> atm
	if(opt===2){
		P = rndi(200,760*3);
		QTN = "Convierte "+P+" mmHg en atm.<br><br>";
		ANS = (1.0/760.0)*P; uni = "atm";
	}

	// atm -> Pa
	if(opt===3){
		P = rndi(1,10);
		QTN = "Convierte "+P+" atm en Pa.<br><br>";
		ANS = 101325*P; uni = "Pa";
	}

	// Pa -> atm
	if(opt===4){
		P = rndi(100,999)*1000;
		QTN = "Convierte "+P+" Pa en atm.<br><br>";
		ANS = (1.0/101325.0)*P; uni = "atm";
	}

	// mmHg -> Pa
	if(opt===5){
		P = rndi(200,760*3);
		QTN = "Convierte "+P+" mmHg en Pa.<br><br>";
		ANS = (101325.0/760.0)*P; uni = "Pa";
	}

	// Pa -> mmHg
	if(opt===6){
		P = rndi(100,999)*1000;
		QTN = "Convierte "+P+" Pa en mmHg.<br><br>";
		ANS = (760.0/101325.0)*P; uni = "mmHg";
	}    
    
}

//------------------------------------------------------------------------------
function conv_V(){

    let opt = rndi(1,3);
    let V;

    /*
    1 cm3 = 1 mL
    1 dm3 = 1 L
    1 m3 = 1000 L
    */

	// m3 -> L
	if(opt===1){
		V = rndi(1,10);
		QTN = "Convierte "+V+" m<sup>3</sup> en L.<br><br>";
		ANS = 1000*V; uni = "L";
	}

	// L -> m3
	if(opt===2){
		V = rndi(1000,10000);
		QTN = "Convierte "+V+" L en m<sup>3</sup>.<br><br>";
		ANS = (1.0/1000.0)*V; uni = "m<sup>3</sup>";
	}

	// cm3 -> mL
	if(opt===3){
		V = rndi(10,90)*10;
		QTN = "Convierte "+V+" cm<sup>3</sup> en mL.<br><br>";
		ANS = V; uni = "mL";
	}
    
}


//------------------------------------------------------------------------------
function conv_n(){

    let opt = rndi(1,2);
    
	zold = z;
	zmin = 1;
	zmax = 15;
    
    // gramos -> mol
    
    if(opt===1){

        while(1)
        {
            z = rndi(zmin,zmax);
            if(z !== zold) break;
        }
        
        let molesrnd = rndi(1,10)*10;

        QTN  = "¿ Cuántos gramos de " +symbols[z]+"<br>";
        QTN += "hay en  "+molesrnd+" mol de "+symbols[z]+" ?<br>";;
        ANS = mol_a_gramos(PM[z], molesrnd);
        uni = " g";
        
    }

    // mol -> gramos
    
    if(opt===2){

        while(1)
        {
            z = rndi(zmin,zmax);
            if(z !== zold) break;
        }
        
        let gramosrnd = rndi(1,10)*100;

        QTN  = "¿ Cuántos mol de " +symbols[z]+"<br>";
        QTN += "hay en  "+gramosrnd+" g de "+symbols[z]+" ?<br>";;
        ANS = gramos_a_mol(PM[z], gramosrnd);
        uni = " mol";

    }
}

function mol_a_gramos(_M_, _mol_){return _mol_ * _M_; }
function gramos_a_mol(_M_, _gramos_){return _gramos_ / _M_; }

//------------------------------------------------------------------------------
function eq_dalton(op){

	//Ley de Dalton y de Amagat

	//let op = rndi(1,7);
	
	let P_He, P_Ar, P_Ne, P_total;
	let n_He, n_Ar, n_Ne, n_total;
	let X_He, X_Ar, X_Ne;
	let m_He, m_Ar, m_Ne;
	let M_He, M_Ar, M_Ne;
	
	M_He = 4.0;
	M_Ne = 20.180;
	M_Ar = 39.948;
	
	//op = 7;

	if(op===1){
		
		while(1){
			m_He = rndi(1,10)*10; // gramos
			m_Ne = rndi(2,10)*10; // gramos
			
			n_Ne = m_Ne/M_Ne;
			n_He = m_He/M_He;
			
			n_total = n_Ne + n_He;
			
			X_He = n_He/n_total;
			X_Ne = n_Ne/n_total;
			
			if(X_He > 0.2 && X_Ne > 0.2) break;
		}
		
		//console.log(X_He, X_Ne);
		
		if(coin()===1){
			QTN = "Se mezclan "+m_He+" g de He y "+m_Ne+" g de Ne. <br>Calcular la fracción molar del He.<br><br>";
			ANS = X_He;
		}else{
			QTN = "Se mezclan "+m_He+" g de He y "+m_Ne+" g de Ne. <br>Calcular la fracción molar del Ne.<br><br>";		
			ANS = X_Ne;
		}
		
		uni = "";
	}
	
	if(op===2){
		
		while(1){
			X_He = rndi(20,85)/100;
			X_Ne = rndi(20,85)/100;
			if((X_He+X_Ne)<0.8) break;
		}
		
		X_Ar = 1 - X_Ne - X_He;
				
		X_He = round2(X_He);
		X_Ne = round2(X_Ne);
		X_Ar = round2(X_Ar);

		//console.log("X: ", X_He, X_Ne, X_Ar);
		//console.log("SUMA: ",X_He+X_Ne+X_Ar);
		
		let opt2=rndi(1,3);
		
		if(opt2===1){
			QTN = "Una mezcla de gases se compone de He, Ne y Ar.<br>";		
			QTN += "La fracción molar del He y Ne es de "+X_He+" y "+X_Ne+", respectivamente.<br>"
			QTN += "Calcula la fracción molar del Ar.<br><br>"
			ANS = X_Ar;
		}

		if(opt2===2){
			QTN = "Una mezcla de gases se compone de He, Ne y Ar.<br>";		
			QTN += "La fracción molar del He y Ar es de "+X_He+" y "+X_Ar+", respectivamente.<br>"
			QTN += "Calcula la fracción molar del Ne.<br><br>"
			ANS = X_Ne;
		}		

		if(opt2===3){
			QTN = "Una mezcla de gases se compone de He, Ne y Ar.<br>";		
			QTN += "La fracción molar del Ne y Ar es de "+X_Ne+" y "+X_Ar+", respectivamente.<br>"
			QTN += "Calcula la fracción molar del He.<br><br>"
			ANS = X_He;
		}
		
		uni = "";

	}
	
	if(op===3){

		P_He = rndi(10,150)*10; //mmHg
		P_Ar = rndi(10,150)*10; //mmHg
		P_Ne = rndi(10,150)*10; //mmHg
		
		let opt2 = rndi(1,2);
		
		if(opt2===1){
			QTN = "En una mezcla de gases (a temperatura y volumen constantes) se mezclan Ar y He. La presión parcial del Ar es de "+P_Ar+" mmHg y la del He es de "+P_He+" mmHg. Calcular la presión total de la mezcla. <br><br>";
			P_total = P_Ar + P_He;			
		}

		if(opt2===2){
			QTN = "En una mezcla de gases (a temperatura y volumen constantes) se mezclan Ar y Ne. La presión parcial del Ar es de "+P_Ar+" mmHg y la del Ne es de "+P_Ne+" mmHg. Calcular la presión total de la mezcla. <br><br>";
			P_total = P_Ar + P_Ne;			
		}
		
		P_total = P_total/760.0; // atm
		
		ANS = P_total; uni = " atm";
		
	}
	
	if(op===4){

		n_He = rndi(2,10);
		n_Ne = rndi(2,10);
		n_Ar = rndi(2,10);
				
		P_total = rndi(100,500); //kPa
		
		let opt2 = rndi(1,2);
		
		if(opt2===1){
			QTN = "Una mezcla de gases (a temperatura y volumen constantes) contiene "+n_He+" mol de He y "+n_Ne+" mol de Ne. La presión total de la mezcla es de "+P_total+" kPa. Calcular la presión parcial del Ne. <br><br>";
			
			n_total = n_He + n_Ne;
			
			X_He = n_He/n_total;
			X_Ne = n_Ne/n_total;
			
			P_Ne = X_Ne*P_total;
			P_He = X_He*P_total;
			
			//console.log("Ptotal: ", P_total);
			//console.log("Suma: ", P_Ne+P_He);
			//console.log("Suma: ", X_Ne+X_He);
			
			ANS = P_Ne; uni = " kPa";
		}
		
		if(opt2===2){
			QTN = "Una mezcla de gases (a temperatura y volumen constantes) contiene "+n_Ar+" mol de Ar y "+n_He+" mol de He. La presión total de la mezcla es de "+P_total+" kPa. Calcular la presión parcial del Ar. <br><br>";
			
			n_total = n_Ar + n_He;
			
			X_Ar = n_Ar/n_total;
			X_He = n_He/n_total;
			
			P_Ar = X_Ar*P_total;
			P_He = X_He*P_total;
			
			//console.log("Ptotal: ", P_total);
			//console.log("Suma: ", P_Ar+P_He);
			//console.log("Suma: ", X_Ar+X_He);
			
			ANS = P_Ar; uni = " kPa";
		}		
		
	}
	
	if(op===5){
		
		let T = rndi(15,30); //°C
		let V = rndi(20,80); //L
		let R = 0.08206;
		
		n_He = rndi(1,5);
		n_Ar = rndi(1,5);
		
		QTN = "Se mezclan (a "+T+" °C) "+n_He+" mol de He y "+n_Ar+" mol de Ar en un recipiente rígido de "+V+" L. Calcular la presión total de la mezcla de gases.<br><br>";
		
		T = T+273.15;
		
		P_He = n_He*R*T/V; //atm
		P_Ar = n_Ar*R*T/V; //atm
		
		//console.log(P_He, P_Ar);
		
		P_total = P_He + P_Ar;
		
		ANS = P_total; uni = " atm";
		
	}

	if(op===6){
		
		let T = rndi(15,30); //°C
		let V = rndi(20,80); //L
		let R = 0.08206;
		
		n_He = rndi(1,5);
		n_Ar = rndi(1,5);
		n_Ne = rndi(1,5);
		
		if(coin()===1){
			QTN = "Se mezclan (a "+T+" °C) "+n_He+" mol de He y "+n_Ar+" mol de Ar en un recipiente rígido de "+V+" L. Calcular la presión parcial del Ar.<br><br>";
			
			T = T+273.15;
			
			P_He = n_He*R*T/V; //atm
			P_Ar = n_Ar*R*T/V; //atm
			
			//console.log(P_He, P_Ar);
			
			ANS = P_Ar; uni = " atm";
		}else{
			QTN = "Se mezclan (a "+T+" °C) "+n_He+" mol de He y "+n_Ar+" mol de Ar en un recipiente rígido de "+V+" L. Calcular la presión parcial del He.<br><br>";
			
			T = T+273.15;
			
			P_He = n_He*R*T/V; //atm
			P_Ar = n_Ar*R*T/V; //atm
			
			//console.log(P_He, P_Ar);
			
			ANS = P_He; uni = " atm";
		}
		
	}

	if(op===7){
		
		let T = rndi(15,30); //°C
		let V = rndi(20,80); //L
		let R = 0.08206;
		
		m_He = rndi(10,100); //gramos
		m_Ne = rndi(10,100); //gramos
		
		QTN = "Se mezclan (a "+T+" °C) "+m_He+" g de He y "+m_Ne+" g de Ne en un recipiente rígido de "+V+" L. Calcular la presión total de la mezcla de gases.<br><br>";
		
		T = T+273.15;
		
		n_He = m_He/M_He;
		n_Ne = m_Ne/M_Ne;
		
		P_He = n_He*R*T/V; //atm
		P_Ne = n_Ne*R*T/V; //atm
		
		//console.log(P_He, P_Ne);
		
		P_total = P_He + P_Ne;
		
		ANS = P_total; uni = " atm";
		
	}

}



//------------------------------------------------------------------------------
function eq_gas_ideal_1(op){

	//let op = rndi(1,9);
	let T,P,V,n,R,d,M;
	
	// opt = 9;

	// V = nRT/P 
	if(op===1){
		n = rndi(1,4);
		T = rndi(20,150);
		P = rndi(1,4);
		R = 0.08206;
		
		QTN = "Calcular el volumen de "+n+" mol de gas ideal a "+T+" °C y "+P+" atm.<br><br>";
		
		T = T + 273.15;
		V = n*R*T/P;
		
		ANS = V;
		uni = "L";
	}

	// V = nRT/P 
	if(op===2){
		n = rndi(4,8);
		T = rndi(20,150);
		P = rndi(100,999)*100;
		R = 8.314;
		
		QTN = "Calcular el volumen de "+n+" mol de gas ideal a "+T+" °C y "+P+" Pa.<br><br>";
		
		T = T + 273.15;
		V = n*R*T/P;
		
		ANS = V;
		uni = "m<sup>3</sup>";
	}


	// P = nRT/V
	if(op===3){
		n = rndi(2,6);
		T = rndi(20,150);
		V = rndi(10,50);
		R = 0.08206;
		
		QTN = "Calcular la presión que ejercen "+n+" mol de gas ideal (a "+T+" °C) en un recipiente de "+V+" L.<br><br>";
		
		T = T + 273.15;
		P = n*R*T/V;
		
		ANS = P;
		uni = "atm";
	}

	// P = nRT/V
	if(op===4){
		n = rndi(2,6);
		T = rndi(20,150);
		V = rndi(1,4);
		R = 8.314;
		
		QTN = "Calcular la presión que ejercen "+n+" mol de gas ideal (a "+T+" °C) en un recipiente de "+V+" m<sup>3</sup>.<br><br>";
		
		T = T + 273.15;
		P = n*R*T/V;
		
		ANS = P;
		uni = "Pa";
	}

	// T = PV/nR 
	if(op===5){
		n = rndi(2,10);
		V = rndi(10,100);
		P = rndi(1,5);
		R = 0.08206;
		
		QTN = "En un recipiente de "+V+" L, "+n+" mol de gas ideal ejercen una presión de "+P+" atm. Calcular la temperatura del gas.<br><br>";
		
		T = P*V/(R*n);
		T = T - 273.15;
		
		ANS = T;
		uni = " °C";
	}

	// T = PV/nR 
	if(op===6){
		n = rndi(2,5);
		V = rndi(20,100);
		P = rndi(50,150)*10; //mmHg
		R = 0.08206;
		
		QTN = n+" mol de gas ideal ejercen una presión de "+P+" mmHg en un recipiente de "+V+" L. Calcular la temperatura del gas.<br><br>";
		
		P = P/760.0;
		
		T = P*V/(R*n);
		
		ANS = T;
		uni = " K";
	}

	// n = PV/RT 
	if(op===7){
		V = rndi(20,100);
		T = rndi(20,50);
		P = rndi(50,150)*10; //mmHg
		R = 0.08206;
		
		QTN = "A "+T+" °C un gas ideal ejerce una presión de "+P+" mmHg en un recipiente de "+V+" L. Calcular la cantidad de sustancia del gas.<br><br>";
		
		T = T + 273.15;
		P = P/760.0;
		
		n = P*V/(R*T);
		
		ANS = n;
		uni = " mol";
	}
    
}


//------------------------------------------------------------------------------
function eq_gas_ideal_2(op){

	// d = PM / RT
	if(op===1){
		
		let NAME;
		
		if(coin()===1){
			NAME = "CO<sub>2</sub>";
			M = 12 + 16 + 16;		
		}else{
			NAME = "O<sub>2</sub>";
			M = 16 + 16;
		}
		
		P = rndi(50,150)*10; //mmHg
		T = rndi(200,400); //K
		R = 0.08206;
		
		QTN = "Suponiendo que el "+NAME+" se comporta como un gas ideal, calcular su densidad a "+P+" mmHg y "+T+" K.<br><br>";
		
		P = P/760.0;
		
		d = P*M/(R*T);		
		
		ANS = d;
		uni = " g/L";
	}


	// M = dRT/P
	if(op===2){
		
		d = rndi(1,10);
		P = rndi(50,150)*10; //mmHg
		T = rndi(10,100); //°C
		R = 0.08206;
		
		QTN = "La densidad de una sustancia gaseosa desconocida es de "+d+" g/L a "+T+" °C y "+P+" mmHg. Calcular la masa molar si dicha sustancia fuera un gas ideal.<br><br>";
		
		P = P/760.0;
		T = T + 273.15;
		
		M = d*R*T/P;	
		
		ANS = M;
		uni = " g/mol";
	}

}

//------------------------------------------------------------------------------
function eq_gas_ideal_3(op){

	//P1V1/T1 = P2V2/T2

	//let opt = rndi(1,9);
	let P1,P2,T1,T2,V1,V2;
	
	//opt = 9;

	// T = cte
	if(op===1){
		
		V1 = rndi(1,50); //L
		P1 = rndi(1,8); //atm
		while(1){
			P2 = rndi(1,8);
			if(P1!==P2) break;
		}
		
		QTN = V1 +" L de gas ideal se somete a un proceso isotérmico. La presión del gas cambia de "+P1+ " atm a "+P2+" atm. Calcular el volumen final del gas.<br><br>";
		
		V2 = P1*V1/P2;
		
		ANS = V2;
		uni = "L";
	}

	// T = cte
	if(op===2){
		
		P1 = rndi(100,500); // kPa
		V1 = rndi(1,50); //L
		while(1){
			V2 = rndi(1,50);
			if(V1!==V2) break;
		}
		
		QTN = "El volumen de una cantidad fija de gas ideal cambia de "+V1+ " L a "+V2+" L durante un proceso isotérmico. Calcular la presión final del gas si su presión inicial fue de "+P1+" kPa.<br><br>";
		
		P2 = P1*V1/V2;
		
		ANS = P2;
		uni = "kPa";
	}

	// P = cte
	if(op===3){
		
		T1 = rndi(5,150); // °C
		V1 = rndi(1,50); // L
		while(1){
			V2 = rndi(1,50);
			if(V1!==V2) break;
		}
		
		QTN = "El volumen de una cantidad fija de gas ideal cambia de "+V1+ " L a "+V2+" L durante un proceso isobárico. Calcular la temperatura final del gas si su temperatura inicial fue de "+T1+" °C.<br><br>";
		
		T1 = T1+273.15;
		
		T2 = V2*T1/V1;
		
		T2 = T2 - 273.15;
		
		ANS = T2;
		uni = "°C";
	}

	// P = cte
	if(op===4){
		
		V1 = rndi(2,10); // m3
		T1 = rndi(5,150); // °C
		while(1){
			T2 = rndi(5,150);
			if(Math.abs(T1-T2)>5) break;
		}
		
		//QTN = "La temperatura de un gas ideal cambia de "+T1+ " °C a "+T2+" °C durante un proceso isobárico. Calcular el volumen final del gas si su volumen inicial fue de "+V1+" L.<br><br>";
		QTN = V1 +" m<sup>3</sup> de gas ideal se somete a un proceso isobárico. La temperatura del gas cambia de "+T1+ " °C a "+T2+" °C. Calcular el volumen final del gas.<br><br>";
		
		T1 = T1+273.15;
		
		T2 = T2+273.15;
		
		V2 = V1*T2/T1;
		
		ANS = V2;
		uni = "m<sup>3</sup>";
	}

	if(op===5){
		
		P1 = rndi(1,10); // atm
		T1 = rndi(-100,300); // °C
		while(1){
			T2 = rndi(-100,300);
			if(Math.abs(T1-T2)>5) break;
		}
		
		QTN = "Cierta cantidad fija de gas ideal se somete a un proceso isocórico. La temperatura del gas cambia desde "+T1+" °C hasta "+T2+" °C. ¿Si la presión inicial del gas fue de "+P1+" atm, cuál será su presión final?<br><br>";
		
		T1 = T1+273.15;
		
		T2 = T2+273.15;
		
		P2 = P1*T2/T1;
		
		ANS = P2;
		uni = "atm";
	}

	if(op===6){
		
		T1 = rndi(-100,300); // °C
		P1 = rndi(50,500)*10; // mmHg
		while(1){
			P2 = rndi(50,500)*10; // mmHg
			if(Math.abs(P1-P2)>50) break;
		}
		
		QTN = "Cierta cantidad fija de gas ideal se somete a un proceso isocórico. La presión del gas cambia desde "+P1+" mmHg hasta "+P2+" mmHg. ¿Si la temperatura inicial del gas fue de "+T1+" °C, cuál será su temperatura final?<br><br>";
		
		T1 = T1+273.15;
		
		T2 = P2*T1/P1;
		
		T2 = T2-273.15;
		
		ANS = T2;
		uni = " °C";
	}

	// T = cte
	if(op===7){
		
		let op2 = rndi(1,3);		
		
		P2 = rndi(1,8);

		if(op2===1){
			QTN = "Durante un proceso isotérmico cierta cantidad fija de gas ideal disminuye su volumen a la mitad. La presión del gas al final del proceso es de "+P2+" atm. Calular la presión inicial del gas.<br><br>";		
			P1 = 0.5*P2;			
		}
		
		if(op2===2){
			QTN = "Durante un proceso isotérmico cierta cantidad fija de gas  ideal duplica su volumen. La presión del gas al final del proceso es de "+P2+" atm. Calular la presión inicial del gas.<br><br>";		
			P1 = 2*P2;			
		}

		if(op2===3){
			QTN = "Durante un proceso isotérmico cierta cantidad fija de gas ideal triplica su volumen. La presión del gas al final del proceso es de "+P2+" atm. Calular la presión inicial del gas.<br><br>";		
			P1 = 3*P2;			
		}
		
		ANS = P1;
		uni = " atm";
	}

	// P = cte
	if(op===8){
		
		let op2 = rndi(1,3);		
		
		T2 = rndi(200,800);

		if(op2===1){
			QTN = "Durante un proceso isobárico cierta cantidad fija de gas ideal disminuye su volumen a la mitad. La temperatura del gas al final del proceso es de "+T2+" K. Calular la temperatura inicial del gas.<br><br>";		
			T1 = 2*T2;			
		}
		
		if(op2===2){
			QTN = "Durante un proceso isobárico cierta cantidad fija de gas ideal duplica su volumen. La temperatura del gas al final del proceso es de "+T2+" K. Calular la temperatura inicial del gas.<br><br>";		
			T1 = T2/2;			
		}

		if(op2===3){
			QTN = "Durante un proceso isobárico cierta cantidad fija de gas ideal triplica su volumen. La temperatura del gas al final del proceso es de "+T2+" K. Calular la temperatura inicial del gas.<br><br>";		
			T1 = T2/3;		
		}
		
		T1 = T1 - 273.15;
		
		ANS = T1;
		uni = " °C";
	}



	//V = cte

	if(op===9){
		
		let op2 = rndi(1,3);		
		
		P2 = rndi(100,700); //kPa

		if(op2===1){
			QTN = "Durante un proceso isocórico cierta cantidad fija de gas ideal disminuye su temperatura a la mitad. La presión del gas al final del proceso es de "+P2+" kPa. Calular la presión inicial del gas.<br><br>";		
			P1 = 2*P2;			
		}
		
		if(op2===2){
			QTN = "Durante un proceso isocórico cierta cantidad fija de gas ideal duplica su temperatura. La presión del gas al final del proceso es de "+P2+" kPa. Calular la presión inicial del gas.<br><br>";		
			P1 = P2/2;			
		}

		if(op2===3){
			QTN = "Durante un proceso isocórico cierta cantidad fija de gas ideal triplica su temperatura. La presión del gas al final del proceso es de "+P2+" kPa. Calular la presión inicial del gas.<br><br>";		
			P1 = P2/3;		
		}
		
		ANS = P1;
		uni = " kPa";
	}	
    
}


//------------------------------------------------------------------------------
function eq_dU_w_q(op){

    if(op===1) // expansion
    {
        
        var w = -rndi(10,90); //kJ
        var q = -rndi(2,5)*w; //kJ
        var deltaU = q + w;
        
        QTN  = "Un gas ideal absorbe "+q+" kJ en forma de calor. ";
        QTN += "Debido a esto, el gas se expande y realiza "+-w+" kJ de trabajo. ";
        QTN += "Calcular el cambio en la energía interna del gas.<br>";
        QTN += "<br>";      
        
        ANS = deltaU; uni=" kJ";

    }

    if(op===2) // expansion
    {
        
        var w = -rndi(10,90); //kJ
        var q = -w; //kJ
        
        QTN  = "Un mol de gas ideal se expande y realiza "+-w+" kJ de trabajo. ";
        QTN += "Si la energía del gas permanece constante, ";
        QTN += "calcular cuánto calor absorbe el gas.<br>";
        QTN += "<br>";      
        
        ANS = q; uni=" kJ";
        
    }
    
    if(op===3) // compresion
    {
        
        var w = rndi(10,90); //kJ
        var q = -rndi(2,5)*w; //kJ
        var deltaU = w + q;
        
        QTN  = "Los alrededores realizan "+w+" kJ de trabajo sobre un gas ideal. ";
        QTN += "Debido a esto, el gas se comprime y libera "+-q+" kJ en forma de calor. ";
        QTN += "Calcular el cambio en la energía interna del gas.<br>";
        QTN += "<br>";      
        
        ANS = deltaU; uni=" kJ";
        
    }

    if(op===4) // compresion
    {
        
        var w = rndi(10,90); //kJ
        var q = -rndi(2,5)*w; //kJ
        var deltaU = w + q;        
        
        QTN  = "Un gas ideal se comprime liberando "+-q+" kJ en forma de calor. ";
        QTN += "Calcular (en kJ) la cantidad trabajo que debe ingresar al gas ";
        QTN += "para que el cambio en su energía interna sea de "+deltaU+" kJ.<br>";
        QTN += "<br>";      
        
		ANS = w; uni=" kJ";
        
    }

}


//----------------------------------------------------- PROCESO ADIABATICO
function eq_w_adiabatico(op){
	
	let T1, T2;
	let P1, P2;
	let Cp, Cv, c, g;
	let deltaU, w;
	let V1, V2;
	let R = 8.314;

    if(op===1)
    {
        while(1)
        {
            T1 = rndi(10,500); //°C
            T2 = rndi(10,500); //°C
            if(Math.abs(T1-T2) >= 50.0) break;
        }

        Cv = rndi(15,50); //J/K

        QTN  = "Un mol de gas (C<sub>v</sub> = "+Cv+" J/K) se somete a un proceso adiabático y su temperatura cambia desde "+T1+" °C hasta "+T2+" °C. ";
        QTN += "Calcular el cambio en la energía interna del gas.<br>";
        QTN += "<br>";        
                
        T1 = T1 + 273.15;//K
        T2 = T2 + 273.15;//K
        
        deltaU = Cv*(T2-T1); //J
		deltaU = deltaU/1000.0; // J-> kJ
        
		ANS = round2(deltaU); uni=" kJ";
	}
	

    if(op===2)
    {
        while(1)
        {
            T1 = rndi(10,500); //°C
            T2 = rndi(10,500); //°C
            if(Math.abs(T1-T2) >= 50.0) break;
        }

        Cv = rndi(15,50); //J/K

        QTN  = "Un mol de gas (C<sub>v</sub> = "+Cv+" J/K) se somete a un proceso adiabático y su temperatura cambia desde "+T1+" °C hasta "+T2+" °C. ";
        QTN += "Calcular el trabajo asociado al proceso.<br>";
        QTN += "<br>";        
                
        T1 = T1 + 273.15;//K
        T2 = T2 + 273.15;//K
        
        w = Cv*(T2-T1); //J
		w = w/1000.0; // J-> kJ
        
		ANS = round2(w); uni=" kJ";
	}


}

//
function eq_PV_adiabatico(op){

	let T1, T2;
	let P1, P2;
	let Cp, Cv, c, g;
	let deltaU, w;
	let V1, V2;
	let R = 8.314;

    if(op===1)
    {
        while(1)
        {
            V1 = rndi(10,150); //dm**3, L
            V2 = rndi(10,150); //dm**3, L
            if(Math.abs(V1-V2) >= 50.0) break;
        }

        Cv = rndi(15,50); //J/K
        T1 = rndi(200,900); //K

        c = Cv/R;
        
        QTN  = "Un mol de gas (C<sub>v</sub> = "+Cv+" J/K) ocupa "+V1+" L a "+T1+" K. ";
        QTN += "El gas se somete a un proceso adiabático y su volumen cambia a "+V2+" L. ";
        QTN += "Calcular la temperatura final del gas.<br>";
        QTN += "<br>";        
                
        // T2 = V1/V2 * Math.pow(T1,c); // T2**c
		
        T2 = T1 * Math.pow(V1/V2,1.0/c); //K
        
        ANS = round2(T2); uni=" K";
		
		// console.log("c:", c);
		
	}

    if(op===2)
    {
        
        while(1)
        {
            V1 = rndi(10,150); //dm**3, L
            V2 = rndi(10,150); //dm**3, L
            if(Math.abs(V1-V2) >= 50.0) break;
        }

        R = 8.314; //J/mol/K
        Cp = rndi(15,50); //J/K
		P1 = rndi(10,90)*10.0; //kPa
		Cv = Cp - R;
		
		// Cp - Cv = R
		// Cp = R + Cv
		// Cv = Cp - R
        
        g = Cp/Cv;
        
        QTN  = "Un mol de gas (C<sub>p</sub> = "+Cp+" J/K) ocupa "+V1+" L a "+P1+" kPa. ";
        QTN += "El gas se somete a un proceso adiabático y su volumen cambia a "+V2+" L. ";
        QTN += "Calcular la presión final del gas.<br>";
        QTN += "<br>";        
                
        // V2 = P1*Math.pow(V1,gamma)/P2; // V2**gamma
		
		P2 = P1 * Math.pow(V1/V2, g); //K
		
		ANS = round2(P2); uni=" kPa";
		
		// console.log("Cv:", Cv);
		// console.log("gamma:", g);
		// console.log("P2:", P2);

	}	
	
    if(op===3)
    {
        
        while(1)
        {
            P1 = rndi(10,90)*10.0; //kPa
            P2 = rndi(10,90)*10.0; //kPa
            if(Math.abs(P1-P2) >= 50.0) break;
        }

        R = 8.314; //J/mol/K
        Cp = rndi(15,50); //J/K
        V1 = rndi(10,90); //dm**3, L
		Cv = Cp - R;
        
        g = Cp/Cv;
        
        QTN  = "Un mol de gas (C<sub>p</sub> = "+Cp+" J/K) ocupa "+V1+" L a "+P1+" kPa. ";
        QTN += "El gas se somete a un proceso adiabático y su presión cambia a "+P2+" kPa. ";
        QTN += "<br>Calcular el volumen final del gas.<br>";
        QTN += "<br>";        
                
        // V2 = P1*Math.pow(V1,gamma)/P2; // V2**gamma
		
		V2 = V1 * Math.pow(P1/P2,1.0/g); 
		
		ANS = round2(V2); uni=" L";

	}		

}


//----------------------------------------------------- PROCESO ISOTERMICO
function eq_w_isotermico(op){
	
	let P1, P2;
	let V1, V2;
	let q, w;
	let T;

    if(op===1)
    {
        while(1)
        {
            V1 = rndi(1,20)*100.0; //L
            V2 = rndi(1,20)*100.0; //L
            if(Math.abs(V2-V1)>=300) break;
        }

        T = rndi(25,400); //°C

        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "El volumen del gas cambia desde "+V1+" L hasta "+V2+" L. ";
        QTN += "Calcular el trabajo asociado al proceso.<br>";
        QTN += "<br>";

        T = T + 273.15;
        R = 8.314; 
        w = -1*R*T*Math.log(V2/V1); //J
		w = w/1000.0; //J -> kJ

		ANS = round4(w); uni=" kJ";
    }

    if(op===2)
    {
        while(1)
        {
            P1 = rndi(1,10)*10.0; //kPa
            P2 = rndi(1,10)*10.0; //kPa
            if(Math.abs(P1-P2)>=20) break;
        }

        T = rndi(25,400); //°C

        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "La presión del gas cambia desde "+P1+" kPa hasta "+P2+" kPa. ";
        QTN += "Calcular el trabajo asociado al proceso.<br>";
        QTN += "<br>";

        T = T + 273.15;
        R = 8.314; 
        w = -1*R*T*Math.log(P1/P2); //J
		w = w/1000.0; //J -> kJ
		
		ANS = round4(w); uni=" kJ";
		
    }

    if(op===3)
    {
        while(1)
        {
            V1 = rndi(1,20)*100.0; //L
            V2 = rndi(1,20)*100.0; //L
            if(Math.abs(V2-V1)>=300) break;
        }

        T = rndi(25,400); //°C
		
		if(coin()===1){

			QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
			QTN += "El volumen se duplica durante el proceso.";
			QTN += "Calcular el trabajo asociado al proceso.<br>";
			QTN += "<br>";

			T = T + 273.15;
			R = 8.314; 
			w = -1*R*T*Math.log(2); //J
			w = w/1000.0; //J -> kJ

			ANS = round4(w); uni=" kJ";
			
		}else{
			
			QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
			QTN += "El volumen se triplica durante el proceso. ";
			QTN += "Calcular el trabajo asociado al proceso.<br>";
			QTN += "<br>";

			T = T + 273.15;
			R = 8.314; 
			w = -1*R*T*Math.log(3); //J
			w = w/1000.0; //J -> kJ

			ANS = round4(w); uni=" kJ";

			
		}
    }


	
}

//------------------------------------------------------------------------------
function eq_q_isotermico(op){

	let P1, P2;
	let V1, V2;
	let q, w;
	let T;

    if(op===1)
    {
        while(1)
        {
            P1 = rndi(1,10)*10.0; //kPa
            P2 = rndi(1,10)*10.0; //kPa
            if(Math.abs(P1-P2)>=20) break;
        }

        T = rndi(25,400); //°C

        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "La presión del gas cambia desde "+P1+" kPa hasta "+P2+" kPa. ";
        QTN += "Calcular el calor asociado al proceso.<br>";
        QTN += "<br>";

        T = T + 273.15;
        R = 8.314; 
        w = -1*R*T*Math.log(P1/P2); //J
		w = w/1000.0; //J -> kJ
		q = -w;
		
		ANS = round4(q); uni=" kJ";
		
    }

    if(op===2)
    {
        while(1)
        {
            V1 = rndi(1,20)*100.0; //L
            V2 = rndi(1,20)*100.0; //L
            if(Math.abs(V2-V1)>=300) break;
        }

        T = rndi(25,400); //°C

        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "El volumen del gas cambia desde "+V1+" L hasta "+V2+" L. ";
        QTN += "Calcular el calor asociado al proceso.<br>";
        QTN += "<br>";

        T = T + 273.15;
        R = 8.314; 
        w = -1*R*T*Math.log(V2/V1); //J
		w = w/1000.0; //J -> kJ
		q = -w;

		ANS = round4(q); uni=" kJ";
    }	
	
}

//----------------------------------------------------- PROCESO ISOBARICO
function eq_w_isobarico(op){
    
	if(op===1)
	{
		
		let V1;
		let V2;
			
		let P = rndi(1,9)*100.0; //kPa
		while(1)
		{
			V1 = rndi(1,50); //L
			V2 = rndi(1,50); //L
			if( Math.abs(V2 - V1) > 20 ) break;
		}
		
        QTN  = "Un mol de gas se somete a un proceso isobárico ("+P+" kPa). ";
        QTN += "El volumen del gas cambia desde "+V1+" L hasta "+V2+" L. ";
        QTN += "Calcular (en kJ) el trabajo asociado al proceso.<br>";
        QTN += "<br>";
		
		V1 = V1*(1/1000); //L -> m3
		V2 = V2*(1/1000);

        let w = -1000*P * (V2 - V1) //kJ.
		
		w = w*(1/1000);
        		
		ANS = round4(w); uni=" kJ";
			
	}
    
}

//------------------------------------------------------------------------------
function eq_q_isobarico(op){

	if(op===1)
	{
		let T1;
        let T2;
        let q = rndi(1,9)*10.0; //kJ
		let Cp = rndi(15,50); //J/K

		while(1)
		{
			T1 = rndi(1,100); //°C
			T2 = rndi(1,100); //°C
			if( Math.abs(T2 - T1) > 20 ) break;
		}

        QTN  = "Un mol de gas (C<sub>p</sub> = "+Cp+" J/K) se somete a un proceso isobárico. ";
        QTN += "La temperatura del gas cambia desde "+T1+" °C hasta "+T2+" °C. "
        QTN += "Calcular el calor asociado al proceso.<br>";
        QTN += "<br>";

		T1 = T1 + 273.15;//K
        T2 = T2 + 273.15;//K
		
		q = Cp * (T2 - T1);
		
        // q = q*1000.0;//J
		
		ANS = round2(q); uni=" J";
		
	}


	
	if(op===2)
	{
		let P = rndi(1,9)*100.0; //kPa
		let T1;
		let T2;
		let deltaH;
		
		while(1)
		{
			T1 = rndi(1,600); //°C
			T2 = rndi(1,600); //°C
			if( Math.abs(T1 - T2) > 30) break;
		}
        
        if(T2 > T1) 
            {deltaH = rndi(1,9)*10.0;} //kJ
        else
            {deltaH = -rndi(1,9)*10.0;} //kJ
		
        QTN  = "Un mol de gas, a "+T1+" °C, se somete a un proceso isobárico, ";
        QTN += "cuando sus alrededores se encuentran a "+T2+" °C. ";
        QTN += "Calcular la capacidad calorífica a presión constante del gas ";
        QTN += "si el cambio de entalpía asociado al proceso fue de "+deltaH+" kJ. <br>";
        QTN += "<br>";
        
        let q = deltaH*1000.0; //kJ -> J
        let R = 8.314; //J/molK
        
        T1 = T1 + 273.15;
        T2 = T2 + 273.15;
        
        let Cp = q/(T2 - T1);                
		
		ANS = round2(Cp); uni=" J/K";
		
	}
	

		
}


//----------------------------------------------------- PROCESO ISOCORICO
function eq_q_isocorico(op){
    

	if(op===1)
	{
		let T1;
        let T2;
        let q = rndi(1,9)*10.0; //kJ
		let Cv = rndi(15,50); //J/K

		while(1)
		{
			T1 = rndi(1,100); //°C
			T2 = rndi(1,100); //°C
			if( Math.abs(T2 - T1) > 20 ) break;
		}

        QTN  = "Un mol de gas (C<sub>v</sub> = "+Cv+" J/K) se somete a un proceso isocórico. ";
        QTN += "La temperatura del gas cambia desde "+T1+" °C hasta "+T2+" °C. "
        QTN += "Calcular el calor asociado al proceso.<br>";
        QTN += "<br>";

		T1 = T1 + 273.15;//K
        T2 = T2 + 273.15;//K
		
		q = Cv * (T2 - T1);
		
        // q = q*1000.0;//J
		
		ANS = round2(q); uni=" J";
		
	}


	
	if(op===2)
	{
		let P = rndi(1,9)*100.0; //kPa
		let T1;
		let T2;
		let deltaU;
		
		while(1)
		{
			T1 = rndi(1,600); //°C
			T2 = rndi(1,600); //°C
			if( Math.abs(T1 - T2) > 30) break;
		}
        
        if(T2 > T1) 
            {deltaU = rndi(1,9)*10.0;} //kJ
        else
            {deltaU = -rndi(1,9)*10.0;} //kJ
		
        QTN  = "Un mol de gas, a "+T1+" °C, se somete a un proceso isocórico, ";
        QTN += "cuando sus alrededores se encuentran a "+T2+" °C. ";
        QTN += "Calcular la capacidad calorífica a volumen constante del gas ";
        QTN += "si el cambio de la energía interna asociada al proceso fue de "+deltaU+" kJ. <br>";
        QTN += "<br>";
        
        let q = deltaU*1000.0; //kJ -> J
        let R = 8.314; //J/molK
        
        T1 = T1 + 273.15;
        T2 = T2 + 273.15;
        
        let Cp = q/(T2 - T1);                
		
		ANS = round2(Cp); uni=" J/K";
		
	}
	

		
}

//------------------------------------------------------------------------------
function eq_R_Cp_Cv(op){
    
    let Cp;
    let Cv;
    let R = 8.314; //J/molK
    
    Cp = rndi(15,50); //J/K
    Cv = Cp - R;		
    
    // console.log(R, Cp, Cv);
    
    if(op===1){
        QTN  = "La capacidad calorífica molar a presión constante de un gas es "+Cp+" J/mol K. ";
        QTN += "Estimar la capacidad calorífica molar a volumen constante. <br>";
        QTN += "<br>";
        ANS = round2(Cv); uni=" J/mol K";
    }
    if(op===2){
        QTN  = "La capacidad calorífica molar a volumen constante de un gas es de "+Cv+" J/mol K. ";
        QTN += "Estimar la capacidad calorífica molar a presión constante. <br>";
        QTN += "<br>";
        ANS = round2(Cp); uni=" J/mol K";
    }

}


//------------------------------------------------------------------------------
function bR()  { start(); start();}
function b1()  { if(tleft>0) { usrans = 1; checkAns();} }
function b2()  { if(tleft>0) { usrans = 2; checkAns();} }
function b3()  { if(tleft>0) { usrans = 3; checkAns();} }
function b4()  { if(tleft>0) { usrans = 4; checkAns();} }
function b0()  { if(tleft>0) { usrans = 5; checkAns();} }

//------------------------------------------------------------------------------
function checkAns(){
	
	ii +=1 ;

	if(ii <= (iimax+1) )
	{
		if(usrans === trueans)
		{
			score+=pnts;
			oks++;
			updateScore();
			play();
		}else{
			fails += 1;
			updateScore();
		}
	}
	else
	{
		updateScore();
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";
		document.getElementById("b3").innerHTML = "...";
		document.getElementById("b4").innerHTML = "...";
		document.getElementById("info1").innerHTML = iimax + " de " + iimax;
	}

	if(ii >= iimax)
	{
		document.getElementById("info1").innerHTML = iimax + " de " + iimax;
	}

	if(ii > iimax)
	{
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";
		document.getElementById("b3").innerHTML = "...";
		document.getElementById("b4").innerHTML = "...";	

		gameover();
	}

}



//------------------------------------------------------------------------------
function resetScore(){
	score = 0;
	fails = 0;
	updateScore();
}

//------------------------------------------------------------------------------
function updateScore(){

	document.getElementById("info1").innerHTML = ii + " de " + iimax;
	document.getElementById("info3").innerHTML = "Calif: "+ score;
	
	if(ii >= iimax)
	{
		document.getElementById("info1").innerHTML = iimax + " de " + iimax;
	}
	
}

function round2(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function round4(num) {
    return +(Math.round(num + "e+4")  + "e-4");
}

//------------------------------------------------------------------------------
function showAns(){
	
	// console.log("ANS: ", ANS);

	var trueANS = "";

	fkans[0] = round2(ANS * 0.5) +" " + uni;		
	fkans[1] = round2(-ANS * 0.5)+" " + uni;
	fkans[2] = round2(-ANS) +" " + uni;
	fkans[3] = round2(ANS*2.0) +" " + uni;
	trueANS = round2(ANS) +" " + uni  ; 

	// fkans[0] = round2(ANS * 0.5) +" " + uni;		
	// fkans[1] = round2(ANS * 0.75)+" " + uni;
	// fkans[2] = round2(ANS * 1.5) +" " + uni;
	// fkans[3] = round2(ANS * 2.0) +" " + uni;
	// trueANS = round2(ANS) +" " + uni  ; 
	
	// fkans[0] = round2(ANS * 0.5);		
	// fkans[1] = round2(ANS * 0.75);
	// fkans[2] = round2(ANS * 1.5);
	// fkans[3] = round2(ANS * 2.0);
	// trueANS = round2(ANS); 

	trueans = rndi(1,5);

	if(trueans === 1){
		if(coin()===1){
			document.getElementById("b1").innerHTML = trueANS;
			document.getElementById("b2").innerHTML = fkans[2];
			document.getElementById("b3").innerHTML = fkans[1];
			document.getElementById("b4").innerHTML = fkans[0];
		}else{
			document.getElementById("b1").innerHTML = trueANS;
			document.getElementById("b2").innerHTML = fkans[0];
			document.getElementById("b3").innerHTML = fkans[1];
			document.getElementById("b4").innerHTML = fkans[2];
		}		
	}
	if(trueans === 2){
		if(coin()===1){
			document.getElementById("b1").innerHTML = fkans[3];
			document.getElementById("b2").innerHTML = trueANS;
			document.getElementById("b3").innerHTML = fkans[0];
			document.getElementById("b4").innerHTML = fkans[1];
		}else{
			document.getElementById("b1").innerHTML = fkans[0];
			document.getElementById("b2").innerHTML = trueANS;
			document.getElementById("b3").innerHTML = fkans[1];
			document.getElementById("b4").innerHTML = fkans[2];
		}
	}
	if(trueans === 3){
		if(coin()===1){
			document.getElementById("b1").innerHTML = fkans[3];
			document.getElementById("b2").innerHTML = fkans[2];
			document.getElementById("b3").innerHTML = trueANS;
			document.getElementById("b4").innerHTML = fkans[0];
		}else{
			document.getElementById("b1").innerHTML = fkans[0];
			document.getElementById("b2").innerHTML = fkans[1];
			document.getElementById("b3").innerHTML = trueANS;
			document.getElementById("b4").innerHTML = fkans[2];
		}
	}
	if(trueans === 4){
		if(coin()===1){
			document.getElementById("b1").innerHTML = fkans[2];
			document.getElementById("b2").innerHTML = fkans[1];
			document.getElementById("b3").innerHTML = fkans[3];
			document.getElementById("b4").innerHTML = trueANS;

		}else{
			document.getElementById("b1").innerHTML = fkans[0];
			document.getElementById("b2").innerHTML = fkans[1];
			document.getElementById("b3").innerHTML = fkans[2];
			document.getElementById("b4").innerHTML = trueANS;
		}
	}
    
	if(trueans === 5){
        // console.log("ANS: NINGUNO");
		if(coin()===1){
			document.getElementById("b1").innerHTML = fkans[3];
			document.getElementById("b2").innerHTML = fkans[2];
			document.getElementById("b3").innerHTML = fkans[1];
			document.getElementById("b4").innerHTML = fkans[0];
		}else{
			document.getElementById("b1").innerHTML = fkans[0];
			document.getElementById("b2").innerHTML = fkans[1];
			document.getElementById("b3").innerHTML = fkans[2];
			document.getElementById("b4").innerHTML = fkans[3];
		}
	}
	
	if(ii > iimax){
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";
		document.getElementById("b3").innerHTML = "...";
		document.getElementById("b4").innerHTML = "...";
	}

	if(tleft <= 0){
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";
		document.getElementById("b3").innerHTML = "...";
		document.getElementById("b4").innerHTML = "...";
	}
	
}





/*
function makeFakeZ(){

	while(1)
	{
		z1 = rndi(zmin,zmax);
		
		if(z1!==z)break;
	}
	
	while(1)
	{
		z2 = rndi(zmin, zmax);
	
		if(z2 !== z1 &&
		   z2 !== z) 
			break;
	}

	while(1)
	{
		z3 = rndi(zmin, zmax);
		
		if(z3 !== z1 &&
		   z3 !== z2 &&
		   z3 !== z)
			break;
	}

	while(1)
	{
		
		z4 = rndi(zmin, zmax);
		
		if(z4 !== z1 &&
		   z4 !== z2 &&
		   z4 !== z3 &&
		   z4 !== z)
			break;
	}

}
*/


//------------------------------------------------------------------------------
function rndi0(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;;
}



//------------------------------------------------------------------------------
function rndi(min, max) { //sin lantanidos
	var R;
	while(1){
		R = Math.floor(Math.random() * (max - min + 1) ) + min;
		if(R <= 57) break;
		if(R >= 72) break;
	}
    return R;
}


//------------------------------------------------------------------------------
function coin(){ return rndi(1,2);}

//------------------------------------------------------------------------------
function gameover(){
	
	isgameover = true;
	
	let dddd = new Date();
	// let yy = dddd.getFullYear();
	// let mh = dddd.getMonth();
	// let dd = dddd.getDate();
	// let hh = dddd.getHours() - 1;
	// let mm = dddd.getMinutes();
	let yy = dddd.getFullYear();
	let mh = dddd.getMonth();
	let dd = dddd.getDate();
	let hhutc = dddd.getUTCHours();
	let hh = 1;
	let mm = dddd.getUTCMinutes();
	
	let resumen = "";
	let _tleft_ = tleft;
	let _counter_ = ii -1;
	let firma = [];
	let R = [];

	if(hhutc===0)hh=17;
	if(hhutc===1)hh=18;
	if(hhutc===2)hh=19;
	if(hhutc===3)hh=20;
	if(hhutc===4)hh=21;
	if(hhutc===5)hh=22;
	if(hhutc===6)hh=23;
	if(hhutc===7)hh=0;
	if(hhutc===8)hh=1;
	if(hhutc===9)hh=2;
	if(hhutc===10)hh=3;
	if(hhutc===11)hh=4;
	if(hhutc===12)hh=5;
	if(hhutc===13)hh=6;
	if(hhutc===14)hh=7;
	if(hhutc===15)hh=8;
	if(hhutc===16)hh=9;
	if(hhutc===17)hh=10;
	if(hhutc===18)hh=11;
	if(hhutc===19)hh=12;
	if(hhutc===20)hh=13;
	if(hhutc===21)hh=14;
	if(hhutc===22)hh=15;
	if(hhutc===23)hh=16;
	
	if(_counter_>1){R[0] = rndi(1,_tleft_);R[1] = _tleft_-R[0];}
	if(_counter_===1){R[0] = 1;R[1] = 0;}
	if(_counter_===0){_counter_ = 0;R[2] = rndi(10,20);;R[3] = R[0];}
	if(mm>1){R[2] = rndi(1,mm);R[3] = mm-R[2];}
	if(mm===1){R[2] = 1;R[3] = 0;}
	if(mm===0){_counter_ = 0;R[2] = rndi(10,20);;R[3] = R[0];}
	
	firma[0] = uname.length;firma[1] = R[1];firma[2] = R[0];
	firma[3] = R[2];firma[4] = R[3];firma[5]=hh+mm;firma[6]=act+dd;;firma[7]=act+oks;
	
	document.getElementById("buttons").style.display = "none";
	document.getElementById("score").style.display = "none";
	document.getElementById("question").style.display = "none";
	document.getElementById("resumen").style.display = "block";
	
	resumen +="Estudiante: "+uname+"<br>";
	resumen +="Calificación: "+score+"<br>";
	resumen +="Contestó "+_counter_+" de "+iimax+" preguntas.<br>";
	resumen +="Aciertos: "+oks+"<br>";
	resumen +="Fecha: "+dd+"/"+mh+"/"+yy+"<br>";
	resumen +="Hora: "+hh+":"+mm+"<br>";
	resumen +="Tiempo restante: "+tleft+" segundos.<br>";
	resumen +="Firma: "+firma[6]+","+firma[0]+","+firma[5]+","+firma[3]+","+firma[1]+","+firma[4]+","+firma[2]+","+firma[7]+".<br>";
	
	document.getElementById("resumen").innerHTML = resumen;

}




/*
function loadData()
{

	symbols[1]="H"
	symbols[2]="He"
	symbols[3]="Li"
	symbols[4]="Be"
	symbols[5]="B"
	symbols[6]="C"
	symbols[7]="N"
	symbols[8]="O"
	symbols[9]="F"
	symbols[10]="Ne"
	symbols[11]="Na"
	symbols[12]="Mg"
	symbols[13]="Al"
	symbols[14]="Si"
	symbols[15]="P"
	symbols[16]="S"
	symbols[17]="Cl"
	symbols[18]="Ar"
	symbols[19]="K"
	symbols[20]="Ca"
	symbols[21]="Sc"
	symbols[22]="Ti"
	symbols[23]="V"
	symbols[24]="Cr"
	symbols[25]="Mn"
	symbols[26]="Fe"
	symbols[27]="Co"
	symbols[28]="Ni"
	symbols[29]="Cu"
	symbols[30]="Zn"
	symbols[31]="Ga"
	symbols[32]="Ge"
	symbols[33]="As"
	symbols[34]="Se"
	symbols[35]="Br"
	symbols[36]="Kr"
	symbols[37]="Rb"
	symbols[38]="Sr"
	symbols[39]="Y"
	symbols[40]="Zr"
	symbols[41]="Nb"
	symbols[42]="Mo"
	symbols[43]="Tc"
	symbols[44]="Ru"
	symbols[45]="Rh"
	symbols[46]="Pd"
	symbols[47]="Ag"
	symbols[48]="Cd"
	symbols[49]="In"
	symbols[50]="Sn"
	symbols[51]="Sb"
	symbols[52]="Te"
	symbols[53]="I"
	symbols[54]="Xe"
	symbols[55]="Cs"
	symbols[56]="Ba"
	symbols[57]="La"
	symbols[58]="Ce"
	symbols[59]="Pr"
	symbols[60]="Nd"
	symbols[61]="Pm"
	symbols[62]="Sm"
	symbols[63]="Eu"
	symbols[64]="Gd"
	symbols[65]="Tb"
	symbols[66]="Dy"
	symbols[67]="Ho"
	symbols[68]="Er"
	symbols[69]="Tm"
	symbols[70]="Yb"
	symbols[71]="Lu"
	symbols[72]="Hf"
	symbols[73]="Ta"
	symbols[74]="W"
	symbols[75]="Re"
	symbols[76]="Os"
	symbols[77]="Ir"
	symbols[78]="Pt"
	symbols[79]="Au"
	symbols[80]="Hg"
	symbols[81]="Tl"
	symbols[82]="Pb"
	symbols[83]="Bi"
	symbols[84]="Po"
	symbols[85]="At"
	symbols[86]="Rn"
	symbols[87]="Fr"
	symbols[88]="Ra"
	symbols[89]="Ac"
	symbols[90]="Th"
	symbols[91]="Pa"
	symbols[92]="U"
	symbols[93]="Np"
	symbols[94]="Pu"
	symbols[95]="Am"
	symbols[96]="Cm"
	symbols[97]="Bk"
	symbols[98]="Cf"
	symbols[99]="Es"
	symbols[100]="Fm"
	symbols[101]="Md"
	symbols[102]="No"
	symbols[103]="Lr"
	symbols[104]="Rf"
	symbols[105]="Db"
	symbols[106]="Sg"
	symbols[107]="Bh"
	symbols[108]="Hs"
	symbols[109]="Mt"
	symbols[110]="Ds"
	symbols[111]="Rg"
	symbols[112]="Cn"
	symbols[113]="Nh"
	symbols[114]="Fl"
	symbols[115]="Mc"
	symbols[116]="Lv"
	symbols[117]="Ts"
	symbols[118]="Og"

	names[1]="Hidrógeno"
	names[2]="Helio"
	names[3]="Litio"
	names[4]="Berilio"
	names[5]="Boro"
	names[6]="Carbono"
	names[7]="Nitrógeno"
	names[8]="Oxígeno"
	names[9]="Flúor"
	names[10]="Neón"
	names[11]="Sodio"
	names[12]="Magnesio"
	names[13]="Aluminio"
	names[14]="Silicio"
	names[15]="Fósforo"
	names[16]="Azufre"
	names[17]="Cloro"
	names[18]="Argón"
	names[19]="Potasio"
	names[20]="Calcio"
	names[21]="Escandio"
	names[22]="Titanio"
	names[23]="Vanadio"
	names[24]="Cromo"
	names[25]="Manganeso"
	names[26]="Hierro"
	names[27]="Cobalto"
	names[28]="Niquel"
	names[29]="Cobre"
	names[30]="Zinc"
	names[31]="Galio"
	names[32]="Germanio"
	names[33]="Arsénico"
	names[34]="Selenio"
	names[35]="Bromo"
	names[36]="Kriptón"
	names[37]="Rubidio"
	names[38]="Estroncio"
	names[39]="Itrio"
	names[40]="Circonio"
	names[41]="Niobio"
	names[42]="Molibdeno"
	names[43]="Tecnecio"
	names[44]="Rutenio"
	names[45]="Rodio"
	names[46]="Paladio"
	names[47]="Plata"
	names[48]="Cadmio"
	names[49]="Indio"
	names[50]="Estaño"
	names[51]="Antimonio"
	names[52]="Telurio"
	names[53]="Yodo"
	names[54]="Xenón"
	names[55]="Cesio"
	names[56]="Bario"
	names[57]="Lantano"
	names[58]="Cerio"
	names[59]="Praseodimio"
	names[60]="Neodimio"
	names[61]="Prometio"
	names[62]="Samario"
	names[63]="Europio"
	names[64]="Gadolinio"
	names[65]="Terbio"
	names[66]="Disprosio"
	names[67]="Holmio"
	names[68]="Erbio"
	names[69]="Tulio"
	names[70]="Iterbio"
	names[71]="Lutecio"
	names[72]="Hafnio"
	names[73]="Tántalo"
	names[74]="Wolframio"
	names[75]="Renio"
	names[76]="Osmio"
	names[77]="Iridio"
	names[78]="Platino"
	names[79]="Oro"
	names[80]="Mercurio"
	names[81]="Talio"
	names[82]="Plomo"
	names[83]="Bismuto"
	names[84]="Polonio"
	names[85]="Astato"
	names[86]="Radón"
	names[87]="Francio"
	names[88]="Radio"
	names[89]="Actinio"
	names[90]="Torio"
	names[91]="Protactinio"
	names[92]="Uranio"
	names[93]="Neptunio"
	names[94]="Plutonio"
	names[95]="Americio"
	names[96]="Curio"
	names[97]="Berkelio"
	names[98]="Californio"
	names[99]="Einstenio"
	names[100]="Fermio"
	names[101]="Mendelevio"
	names[102]="Nobelio"
	names[103]="Lawrencio"
	names[104]="Rutherfordio"
	names[105]="Dubnio"
	names[106]="Seaborgio"
	names[107]="Bohrio"
	names[108]="Hasio"
	names[109]="Meitnerio"
	names[110]="Darmstatio"
	names[111]="Roentgenio"
	names[112]="Copernicio"
	names[113]="Nihonio"
	names[114]="Flerovio"
	names[115]="Moscovio"
	names[116]="Livermorio"
	names[117]="Teneso"
	names[118]="Oganessón"

	PM[1]=1.01;
	PM[2]=4.00;
	PM[3]=6.94;
	PM[4]=9.01;
	PM[5]=10.81;
	PM[6]=12.01;
	PM[7]=14.01;
	PM[8]=16.00;
	PM[9]=19.00;
	PM[10]=20.18;
	PM[11]=22.99;
	PM[12]=24.31;
	PM[13]=26.98;
	PM[14]=28.09;
	PM[15]=30.97;
	PM[16]=32.07;
	PM[17]=35.45;
	PM[18]=39.10;
	PM[19]=39.95;
	PM[20]=40.08;
	PM[21]=44.96;
	PM[22]=47.87;
	PM[23]=50.94;
	PM[24]=52.00;
	PM[25]=54.94;
	PM[26]=55.85;
	PM[27]=58.69;
	PM[28]=58.93;
	PM[29]=63.55;
	PM[30]=65.39;
	PM[31]=69.72;
	PM[32]=72.64;
	PM[33]=74.92;
	PM[34]=78.96;
	PM[35]=79.90;
	PM[36]=83.80;
	PM[37]=85.47;
	PM[38]=87.62;
	PM[39]=88.91;
	PM[40]=91.22;
	PM[41]=92.91;
	PM[42]=95.94;
	PM[43]=98.00;
	PM[44]=101.07;
	PM[45]=102.91;
	PM[46]=106.42;
	PM[47]=107.87;
	PM[48]=112.41;
	PM[49]=114.82;
	PM[50]=118.71;
	PM[51]=121.76;
	PM[52]=126.90;
	PM[53]=127.60;
	PM[54]=131.29;
	PM[55]=132.91;
	PM[56]=137.33;
	PM[57]=138.91;
	PM[58]=140.12;
	PM[59]=140.91;
	PM[60]=144.24;
	PM[61]=145.00;
	PM[62]=150.36;
	PM[63]=151.96;
	PM[64]=157.25;
	PM[65]=158.93;
	PM[66]=162.50;
	PM[67]=164.93;
	PM[68]=167.26;
	PM[69]=168.93;
	PM[70]=173.04;
	PM[71]=174.97;
	PM[72]=178.49;
	PM[73]=180.95;
	PM[74]=183.84;
	PM[75]=186.21;
	PM[76]=190.23;
	PM[77]=192.22;
	PM[78]=195.08;
	PM[79]=196.97;
	PM[80]=200.59;
	PM[81]=204.38;
	PM[82]=207.20;
	PM[83]=208.98;
	PM[84]=209.00;
	PM[85]=210.00;
	PM[86]=222.00;
	PM[87]=223.00;
	PM[88]=226.00;
	PM[89]=227.00;
	PM[90]=231.04;
	PM[91]=232.04;
	PM[92]=237.00;
	PM[93]=238.03;
	PM[94]=243.00;
	PM[95]=244.00;
	PM[96]=247.00;
	PM[97]=247.00;
	PM[98]=251.00;
	PM[99]=252.00;
	PM[100]=257.00;
	PM[101]=258.00;
	PM[102]=259.00;
	PM[103]=261.00;
	PM[104]=262.00;
	PM[105]=262.00;
	PM[106]=264.00;
	PM[107]=266.00;
	PM[108]=268.00;
	PM[109]=277.00;

	names[1]="Hydrogen"
	names[2]="Helium"
	names[3]="Lithium"
	names[4]="Beryllium"
	names[5]="Boron"
	names[6]="Carbon"
	names[7]="Nitrogen"
	names[8]="Oxygen"
	names[9]="Fluorine"
	names[10]="Neon"
	names[11]="Sodium"
	names[12]="Magnesium"
	names[13]="Aluminium"
	names[14]="Silicon"
	names[15]="Phosphorus"
	names[16]="Sulfur"
	names[17]="Chlorine"
	names[18]="Argon"
	names[19]="Potassium"
	names[20]="Calcium"
	names[21]="Scandium"
	names[22]="Titanium"
	names[23]="Vanadium"
	names[24]="Chromium"
	names[25]="Manganese"
	names[26]="Iron"
	names[27]="Cobalt"
	names[28]="Nickel"
	names[29]="Copper"
	names[30]="Zinc"
	names[31]="Gallium"
	names[32]="Germanium"
	names[33]="Arsenic"
	names[34]="Selenium"
	names[35]="Bromine"
	names[36]="Krypton"
	names[37]="Rubidium"
	names[38]="Strontium"
	names[39]="Yttrium"
	names[40]="Zirconium"
	names[41]="Niobium"
	names[42]="Molybdenum"
	names[43]="Technetium"
	names[44]="Ruthenium"
	names[45]="Rhodium"
	names[46]="Palladium"
	names[47]="Silver"
	names[48]="Cadmium"
	names[49]="Indium"
	names[50]="Tin"
	names[51]="Antimony"
	names[52]="Tellurium"
	names[53]="Iodine"
	names[54]="Xenon"
	names[55]="Caesium"
	names[56]="Barium"
	names[57]="Lanthanum"
	names[58]="Cerium"
	names[59]="Praseodymium"
	names[60]="Neodymium"
	names[61]="Promethium"
	names[62]="Samarium"
	names[63]="Europium"
	names[64]="Gadolinium"
	names[65]="Terbium"
	names[66]="Dysprosium"
	names[67]="Holmium"
	names[68]="Erbium"
	names[69]="Thulium"
	names[70]="Ytterbium"
	names[71]="Lutetium"
	names[72]="Hafnium"
	names[73]="Tantalum"
	names[74]="Tungsten"
	names[75]="Rhenium"
	names[76]="Osmium"
	names[77]="Iridium"
	names[78]="Platinum"
	names[79]="Gold"
	names[80]="Mercury"
	names[81]="Thallium"
	names[82]="Lead"
	names[83]="Bismuth"
	names[84]="Polonium"
	names[85]="Astatine"
	names[86]="Radon"
	names[87]="Francium"
	names[88]="Radium"
	names[89]="Actinium"
	names[90]="Thorium"
	names[91]="Protactinium"
	names[92]="Uranium"
	names[93]="Neptunium"
	names[94]="Plutonium"
	names[95]="Americium"
	names[96]="Curium"
	names[97]="Berkelium"
	names[98]="Californium"
	names[99]="Einsteinium"
	names[100]="Fermium"
	names[101]="Mendelevium"
	names[102]="Nobelium"
	names[103]="Lawrencium"
	names[104]="Rutherfordium"
	names[105]="Dubnium"
	names[106]="Seaborgium"
	names[107]="Bohrium"
	names[108]="Hassium"
	names[109]="Meitnerium"
	names[110]="Darmstadtium"
	names[111]="Roentgenium"
	names[112]="Copernicium"
	names[113]="Nihonium"
	names[114]="Flerovium"
	names[115]="Moscovium"
	names[116]="Livermorium"
	names[117]="Tennessine"
	names[118]="Oganesson"
*/

//------------------------------------------------------------------------------
function loadData(){


	symbols[1]="H<sub>2</sub>";PM[1]=2.02;
	symbols[2]="H<sub>2</sub>O";PM[2]=18.02;
	symbols[3]="O<sub>2</sub>";PM[3]=32;
	symbols[4]="CO";PM[4]=28.01;
	symbols[5]="CO<sub>2</sub>";PM[5]=44.01;
	
	symbols[6]="CH<sub>4</sub>";PM[6]=16.05;
	symbols[7]="C<sub>3</sub>H<sub>6</sub>";PM[7]=42.09;
	symbols[8]="C<sub>2</sub>H<sub>6</sub>";PM[8]=30.08;
	symbols[9]="C<sub>3</sub>H<sub>8</sub>";PM[9]=44.11;
	symbols[10]="HCl";PM[10]=36.46;
	
	symbols[11]="NaCl";PM[11]=58.44;
	symbols[12]="NaOH";PM[12]=40.01;
	symbols[13]="Cl<sub>2</sub>";PM[13]=70.9;
	symbols[14]="F<sub>2</sub>";PM[14]=38;
	symbols[15]="NH<sub>3</sub>";PM[15]=17.04;
	
}

