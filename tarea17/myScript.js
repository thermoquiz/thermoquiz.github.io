
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
//var PM = [];
//var is_molar_mass;
var z=0;
var zmin=1;
var zmax=40;
var zold=0;
var z1,z2,z3,z4; //fakes
var test_option;


var act=17;
var uname;
var ii=1; //contador
var iimax=50; //num de preguntas
var maxtleft=iimax*2;
var pnts=2;
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


	let opt = rndi(1,3);
	
	//opt = 1;
	
	if(opt === 1) {test_guess_atomic_number(); test_option="AtomicNumbers";}
	if(opt === 2) {test_guess_atomic_symbol(); test_option="AtomicSymbols";}
	if(opt === 3) {test_guess_atomic_names();  test_option="AtomicNames";}

	
	// if(ii>iimax)
		// QTN="...";

	// if(tleft <= 0)
		// QTN="...";
	
}

//------------------------------------------------------------------------------
function test_guess_atomic_number(){

	zold = z;

	while(1)
	{
		z = rndi(zmin,zmax);
		if(z !== zold) break;
	}

	makeFakeZ();
	
	QTN = names[z] + ", " + symbols[z];
	ANS = z;

	// if(ii>iimax){QTN="...";}
	// if(tleft <= 0){QTN="...";}
	
}

//------------------------------------------------------------------------------
function test_guess_atomic_symbol(){

	zold = z;

	while(1)
	{
		z = rndi(zmin,zmax);
		if(z !== zold) break;
	}
	
	makeFakeZ();
	
	QTN = z;
	ANS = symbols[z];
	
	// if(ii>iimax){QTN="...";}
	// if(tleft<=0){QTN="...";}

}

//------------------------------------------------------------------------------
function test_guess_atomic_names(){

	zold = z;

	while(1)
	{
		z = rndi(zmin,zmax);
		if(z !== zold) break;
	}
	
	makeFakeZ();
	
	QTN = symbols[z];
	ANS = names[z];
	
	// if(ii>iimax){QTN="...";}
	// if(tleft <= 0){QTN="...";}

}

//------------------------------------------------------------------------------
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
		// document.getElementById("b1").innerHTML = "...";
		// document.getElementById("b2").innerHTML = "...";
		// document.getElementById("b3").innerHTML = "...";
		// document.getElementById("b4").innerHTML = "...";
		document.getElementById("info1").innerHTML = iimax + " de " + iimax;
	}

	if(ii >= iimax)
	{
		document.getElementById("info1").innerHTML = iimax + " de " + iimax;
	}

	if(ii > iimax)
	{
		// document.getElementById("b1").innerHTML = "...";
		// document.getElementById("b2").innerHTML = "...";
		// document.getElementById("b3").innerHTML = "...";
		// document.getElementById("b4").innerHTML = "...";	

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

//------------------------------------------------------------------------------
function showAns(){
	
	trueans = rndi(1,5); 

	if(test_option==="AtomicNumbers")
	{
		fkans[0] = z1;
		fkans[1] = z2;
		fkans[2] = z3;
		fkans[3] = z4;		
	}

	if(test_option==="AtomicSymbols")
	{
		fkans[0] = symbols[z1];
		fkans[1] = symbols[z2];
		fkans[2] = symbols[z3];
		fkans[3] = symbols[z4];		
	}

	if(test_option==="AtomicNames")
	{
		fkans[0] = names[z1];
		fkans[1] = names[z2];
		fkans[2] = names[z3];
		fkans[3] = names[z4];		
	}

	//console.log(ii, ANS);
	

	if(trueans === 1){
		if(coin()===1){
			document.getElementById("b1").innerHTML = ANS;
			document.getElementById("b2").innerHTML = fkans[2];
			document.getElementById("b3").innerHTML = fkans[1];
			document.getElementById("b4").innerHTML = fkans[0];
		}else{
			document.getElementById("b1").innerHTML = ANS;
			document.getElementById("b2").innerHTML = fkans[0];
			document.getElementById("b3").innerHTML = fkans[1];
			document.getElementById("b4").innerHTML = fkans[2];
		}		
	}
	if(trueans === 2){
		if(coin()===1){
			document.getElementById("b1").innerHTML = fkans[3];
			document.getElementById("b2").innerHTML = ANS;
			document.getElementById("b3").innerHTML = fkans[0];
			document.getElementById("b4").innerHTML = fkans[1];
		}else{
			document.getElementById("b1").innerHTML = fkans[0];
			document.getElementById("b2").innerHTML = ANS;
			document.getElementById("b3").innerHTML = fkans[1];
			document.getElementById("b4").innerHTML = fkans[2];
		}
	}
	if(trueans === 3){
		if(coin()===1){
			document.getElementById("b1").innerHTML = fkans[3];
			document.getElementById("b2").innerHTML = fkans[2];
			document.getElementById("b3").innerHTML = ANS;
			document.getElementById("b4").innerHTML = fkans[0];
		}else{
			document.getElementById("b1").innerHTML = fkans[0];
			document.getElementById("b2").innerHTML = fkans[1];
			document.getElementById("b3").innerHTML = ANS;
			document.getElementById("b4").innerHTML = fkans[2];
		}
	}
	if(trueans === 4){
		if(coin()===1){
			document.getElementById("b1").innerHTML = fkans[2];
			document.getElementById("b2").innerHTML = fkans[1];
			document.getElementById("b3").innerHTML = fkans[3];
			document.getElementById("b4").innerHTML = ANS;

		}else{
			document.getElementById("b1").innerHTML = fkans[0];
			document.getElementById("b2").innerHTML = fkans[1];
			document.getElementById("b3").innerHTML = fkans[2];
			document.getElementById("b4").innerHTML = ANS;
		}
	}
	if(trueans === 5){
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
	
	// if(ii > iimax){
		// document.getElementById("b1").innerHTML = "...";
		// document.getElementById("b2").innerHTML = "...";
		// document.getElementById("b3").innerHTML = "...";
		// document.getElementById("b4").innerHTML = "...";
	// }

	// if(tleft <= 0){
		// document.getElementById("b1").innerHTML = "...";
		// document.getElementById("b2").innerHTML = "...";
		// document.getElementById("b3").innerHTML = "...";
		// document.getElementById("b4").innerHTML = "...";
	// }
	
}







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
	firma[3] = R[2];firma[4] = R[3];firma[5]=hh+mm;firma[6]=act+dd;
	
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
	resumen +="Firma: "+firma[6]+","+firma[0]+","+firma[5]+","+firma[3]+","+firma[1]+","+firma[4]+","+firma[2]+".<br>";
	
	document.getElementById("resumen").innerHTML = resumen;

}





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
}

/*
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

