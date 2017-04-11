// JavaScript Document

/*1. Definišite funkciju max() koja ima dva argumenta i koja vraća vrednost većeg od njih. 
   Koristite if-then-else konstrukciju koja postoji u JvaScript-u.*/
   
   function max(a,b){
	if(a>b){
		return a;
		}
		else {
			return b;
		}
	}
	
var r = max (45,207)
console.log(r)

/*2. Definišite funkciju  maxOfThree() koja ima tri argumenta i vraća najveći od njih.*/

function maxofThree(a,b,c){
	return max(max(a,b),c)
	}

var three = maxofThree(45,207,209)
console.log(three)

/*3. Napišite funkciju koja uzima jedan karakter ( string dužine 1) i vraća true ako je taj karakter samoglasnik, a false ako je suglasnik.*/

function samoglasnik(slovo) {
	var samoglasnici = ["a", "e", "i", "o", "u"];
	var resenje = samoglasnici.some(function(s) {
		return s == slovo;
	})
	return resenje
}
console.log(samoglasnik("a"));
console.log(samoglasnik("k"));


/*4. Napišite funkciju translate() koja prevodi tekst tako što duplira svaki suglasnik u tekstu, a između njih umetne slovo “o”. 
   Na primer tekst “ovo je tesko” prevodi u tekst “ovovo joje totesoskoko”.*/
   
function suglasnik(slovo) {
	var razlika = slovo.charCodeAt(0) - "a".charCodeAt();
	if((razlika < 26 && razlika >= 0) && !samoglasnik(slovo))
		return true;
	return false;
}
function translate(tekst) {
	var noviTekst = "";
	for(var i=0; i<tekst.length; i++) {
		noviTekst += tekst.charAt(i);
		if( suglasnik(tekst.charAt(i)) ) {
			noviTekst += "o" + tekst.charAt(i);
		}
	}
	return noviTekst;
}
console.log(translate("ovo je tesko"));
  
   
/*5. Definisite funkciju suma() i funkciju proizvod() kojim se sumiraju i množe svi brojevi u nizu brojeva. 
   Na primer, suma([1,2,3,4]) treba da vrati 10, a proizvod([1,2,3,4]) vraća 24.*/
   
function suma(niz) {
	var suma = 0;
	for(var i = 0; i<niz.length; i++) {
		suma += niz[i];
	}
	return suma;
}
function proizvod(niz) {
	var proizvod = 1;
	for(var i = 0; i<niz.length; i++) {
		proizvod *= niz[i];
	}
	return proizvod;
}
console.log(suma([1,2,3,4]));   
console.log(proizvod([1,2,3,4]));
   
/*6. Definišite funkciju reverse() koja vraća string u obrnutom redosledu karaktera. 
   Na primer, reverse(“moj primer”) treba da vrati string “remirp jom”.*/
   
function reverse(tekst) {
	var obrnutiTekst = "";
	for(var i = tekst.length - 1; i >= 0; i--)
		obrnutiTekst += tekst.charAt(i);
	return obrnutiTekst;
}
console.log(reverse("moj primer"));
   
   
/*7. Predstavite jedan mali rečnik kao JavaScript objekat na sledeći način: {“happy”: “srećna”, “new”: “nova”, “year”: “godina”}. 
   Iskoristite ovaj rečnik za prevod novogodišnje čestitke sa engleskog na srpski jezik.*/

function prevedi(tekst) {
	var obj = {
		"happy":"srecna",
		"new":"nova",
		"year":"godina"
	};
	var prevod = "";
	var reci = tekst.split(" ");
	for(var i = 0; i < reci.length; i++) {
		prevod += obj[reci[i]] + " ";
	}
	return prevod;
}
console.log(prevedi("happy new year"));
   
   
/*8. Napišite funkciju najduzaRec() koja uzima niz reči i vraća najdužu među njima.*/

function najduzaRec(niz) {
	var najduza = 0;
	for(var i = 0; i<niz.length; i++) {
		if(niz[i].length > niz[najduza].length)
			najduza = i;
	}
	return niz[najduza];
}
console.log(najduzaRec(["najduza", "druga", "ovajenajduza", "kraca"]));


/*9. Napišite funkciju filtrirajReci() koja uzima niz reči i jedan ceo broj i, pa vraća niz reči koje su duže od i.*/

function filtrirajReci(niz, i) {
	var duze = [];
	for(var j = 0; j<niz.length; j++) {
		if(niz[j].length > i)
			duze.push(niz[j]);
	}
	return duze;
}
console.log(filtrirajReci(["ja", "tvoje", "ovaj", "interesantno"], 3))

/*10.Napišite funkciju frekSlova() koja uzima string i pravi listu frekvencija slova koja se pojavljuju u stringu. 
   Listu frekvencija predstavite kao JavaScript objekat. Testirajte program sa frekSlova(“abbabcbdbabdbdbabababcbcbab”).*/
   
function frekSlova(string) {
	var lista = {};
	for(var i = 0; i < string.length; i++) {
		if(typeof lista[string.charAt(i)] != 'undefined')
			lista[string.charAt(i)]++;
		else
			lista[string.charAt(i)] = 1;
	}
	return lista;
}
console.log(frekSlova("abbabcbdbabdbdbabababcbcbab"));