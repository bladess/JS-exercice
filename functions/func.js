var vrai = function(){
	return true;
}
var memeStr = function(str){
	return str;
}
var concatDeuxStr = function(strA, strB){
	return strA + strB;
}
var compareNmb = function(a,b){
	if(a>b){
		return "Le premier nombre est le plus grand";
	}
	if(a<b){
		return "Le premier nombre est le plus petit";
	}
	return "Les deux nombres sont indentiques";
}
var concatNbStr =  function(nb, str){
	return nb.toString() +" "+ str;
}
var bonjourNomPrenom = function(nom, prenom, age){
	return "bonjour "+ nom + " " + prenom + " tu as " + concatNbStr(age,"ans.");
}
var ageGenre = function (age, genre){
	if (typeof age !== "number"){
		return "not a number";
	}
	var endStr = "et vous êtes majeur";
	var startStr;  
	if(age <18){
		endStr = "et vous êtes mineur";
	}
	switch(genre){
		case 'Homme':
				startStr = "Vous êtes un homme ";
				break;
		case 'Femme' :
				startStr = "Vous êtes une femme ";
				break;
		default:
			return("Mauvais genre");
		}
	return startStr + endStr; 
}
var sumTroisNb =  function(nba, nbb, nbc){
	return nba + nbb + nbc;
}
console.log(vrai());
console.log(memeStr("test"));
console.log(concatDeuxStr("je ", "suis"));
console.log(compareNmb(1, 2));
console.log(concatNbStr(2, " ans"));
console.log(bonjourNomPrenom("Nass", "bladess",12));
console.log(ageGenre(12,"Homme"));
console.log(ageGenre(19,"Femme"));
console.log(sumTroisNb(1, 2, 3));