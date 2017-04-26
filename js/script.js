var listaZimski = [
	{
		"predmet" : "Matematika za Informaticare 1",
		"profesor": "doc. dr Ljubica Diković",
		"profemail": "dikoviclj@gmail.com",
		"asistent":"/",
		"asemail":"/",
		"nastava":"Predavanja : Svaki drugi Petak 11-14h,počev od 05.04.2017.<br />Vežbe: <br />Konsultacije: ",
	},
	{
		"predmet" : "Matematika za Informaticare 2",
		"profesor": "doc. dr Ljubica Diković",
		"profemail": "dikoviclj@gmail.com",
		"asistent":"/",
		"asemail":"/",
		"nastava":"Predavanja : Svaki drugi Petak 11-14h,počev od 05.04.2017.<br />Vežbe: <br />Konsultacije: ",
	}
];
var listaLetnji = [
	{
		"predmet" : "Teorija sistema",
		"profesor": "doc. dr Ljubica Diković",
		"profemail": "dikoviclj@gmail.com",
		"asistent":"/",
		"asemail":"/",
		"nastava":"Predavanja : Svaki drugi Petak 11-14h,počev od 05.04.2017.<br />Vežbe: <br />Konsultacije: ",
	},
	{
		"predmet" : "Matematika za Informaticare 2",
		"profesor": "doc. dr Ljubica Diković",
		"profemail": "dikoviclj@gmail.com",
		"asistent":"/",
		"asemail":"/",
		"nastava":"Predavanja : Svaki drugi Petak 11-14h,počev od 05.04.2017.<br />Vežbe: <br />Konsultacije: ",
	}
];
function predmet(lista, semestar) 
{
	var letnji_semestar = document.getElementById(semestar);
	document.getElementById("favorite").innerHTML = letnji_semestar.options[letnji_semestar.selectedIndex].text;

	for(var i = 0; i < lista.length; i++)
	 	if (letnji_semestar.options[letnji_semestar.selectedIndex].text == lista[i].predmet){
			document.getElementById("profesor").innerHTML  = lista[i].profesor;
			document.getElementById("profemail").innerHTML  = lista[i].profemail;
			document.getElementById("asistent").innerHTML  = lista[i].asistent;
			document.getElementById("asemail").innerHTML  = lista[i].asemail;
			document.getElementById("nastava").innerHTML = lista[i].nastava;
			return;
		}
	document.getElementById("profesor").innerHTML  = "";
	document.getElementById("profemail").innerHTML  = "";
	document.getElementById("asistent").innerHTML  = ""
	document.getElementById("asemail").innerHTML  = ""
	document.getElementById("nastava").innerHTML = ""
}

function loginFunction(e){
	e.preventDefault();
	var user = document.getElementById('User');
	var pass = document.getElementById('password');

	var	userTest = /^[a-zA-Z0-9_]{4,}$/;
	var passTest = /^I00\d-\d\d\/20(0|1)\d$/; 

	var u = userTest.test(user.value);
	var p = passTest.test(pass.value);
	var divLogin = document.getElementById('login_forma');
	if(u && p) {
		divLogin.classList.add('login_forma_hide');
		var jsonObj = {
			'user':user.value,
			'pass':pass.value
		};
		console.log(jsonObj);
		return true;
	}
	var poruka = document.getElementById('poruka');
	poruka.innerHTML = 'Pogrešno korisničko ime/broj indeksa!';
	return false;
}
window.onload = function() {
	var z = document.getElementById('zimski_semestar');
	var l = document.getElementById('letnji_semestar');

	z.addEventListener('change', function() {
		predmet(listaZimski, 'zimski_semestar');
	});
	l.addEventListener('change', function() {
		predmet(listaLetnji, 'letnji_semestar');
	});

	var login = document.getElementById('login');
	login.addEventListener('submit', loginFunction); 
};
