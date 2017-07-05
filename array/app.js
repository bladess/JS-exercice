var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
var mois = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
console.log(mois[2]);
console.log(mois[5]);
console.log(mois[10]);
mois[8] = 'Août';
var leng = mois.length;
for(var i=0;i < leng;i++){
	console.log(mois[i]);
}


// 7 - 11
array.push('Courgette');
array[4].push('Citron');
array.splice(1,1);
array.splice(2,0,'Poire');
//console.log(array);
//console.log(array[4]);