var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
var mois = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
console.log(mois[2]);
console.log(mois[5]);
console.log(mois[10]);
mois[8] = 'Août';
for(var i=0;i < 12;i++){
	console.log(mois[i]);
}