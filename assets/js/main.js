function Squad(nombre, apellido, edad, hobby1, hobby2, hobby3){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobby1 = hobby1;
	this.hobby2 = hobby2;
	this.hobby3 = hobby3;
	this.mostrar = function(){
		return ("<b>Nombre: </b>"+this.nombre+" "+this.apellido+"<br><b>Edad: </b>"+this.edad+" años"+
			"<br><b>Hobbies: </b><ul><li>"+this.hobby1+"</li><li>"+this.hobby2+"</li><li>"+this.hobby3+"</li>");
	};
}

var maca = new Squad("Maca","Baltra",20, "Encuadernar","Hacer galletas","Codear");
var nico = new Squad("Nico","Aliste",20,"Alicia", "Criminalistica","Codear");
var dani = new Squad("Dani","Medina",20, "Bailar","Gatos", "Codear");
var andrea = new Squad("Andrea","Rata",20, "Ratas", "Animales", "Codear");
var fran = new Squad("Fran","Ruiz-Tagle",20,"Dibujar","Gatos","Codear");
var su = new Squad("Su","Arce",20,"Marketing","Codear","Pegarle a la gente");
var bere = new Squad("Bere","Nice",20,"Cocinar","Ser vegetariana", "Codear");
var clau = new Squad("Clau","Rivera", 20, "Bailar","Leer","Codear");

var arr = [maca, nico, dani, andrea, fran, su, bere, clau];
//console.log (arr);

var num=1;
arr.forEach(function(ele){
	var aux = document.getElementById(num); 
	//console.log(aux);
	num++;
	//console.log(arr.length+1);
	//console.log ("Pasó por aquí");
	aux.innerHTML = ele.mostrar();
	//console.log("Pasó por el segundo lugar");
	//console.log (ele.mostrar());
});
