for (var i = 0; i <10; i++) {
	console.log(i);
}


var n2  = Math.floor(Math.random()*(Math.floor(100)-Math.ceil(1)+1))+1;// nombre aleatoir entre 1 et 100 compris
//console.log(n2);
for (var i = 0; i<20; i++){
	console.log (i * n2);
}

n2 = Math.floor(Math.random()*(Math.floor(100)-Math.ceil(1)+1))+1;
for (var i = 100; i >10;i--){
	console.log(i*n2);
}

for (var i = 1; i<10;i=i+(i/2)){
	console.log(i);
}


for(var i = 1; i<16; i++){
	console.log("on y arrive presque");
}
for(var i = 20; i>=0; i--){
	console.log("C'est presque bon");
}
for(var i = 1; i<101; i+=15){
	console.log("On tient le bon bout");
}
for(var i = 200; i>=0; i-=12){
	console.log("Voila!!!!!!!");
}