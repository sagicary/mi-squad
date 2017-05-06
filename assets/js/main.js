function Squad(id,nombre, apellido, edad, hobby1, hobby2, hobby3, imagen){
	this.id = id;
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobby1 = hobby1;
	this.hobby2 = hobby2;
	this.hobby3 = hobby3;
	this.imagen = imagen;
	this.mostrar = function(){
		return ("<img src='"+this.imagen+"' width='100' heigth='100'><br><b>Nombre: </b>"+this.nombre+" "+this.apellido+"<br><b>Edad: </b>"+this.edad+" años"+
			"<br><b>Hobbies: </b><ul><li>"+this.hobby1+"</li><li>"+this.hobby2+"</li><li>"+this.hobby3+"</li>");
	};
}

var maca = new Squad(1,"Maca","Baltra",20, "Encuadernar","Hacer galletas","Codear","http://matherea.com/wp-content/uploads/2014/04/artesanal.jpg");
var nico = new Squad(2,"Nico","Aliste",20,"Alicia", "Criminalistica","Codear","http://www.conejos.wiki/Imagenes/conejo-mini-lop.jpg");
var dani = new Squad(3,"Dani","Medina",20, "Bailar","Gatos", "Codear","https://image.freepik.com/vector-gratis/silueta-abstracta-de-una-mujer-bailando_23-2147510433.jpg");
var andrea = new Squad(4,"Andrea","Rata",20, "Ratas", "Animales", "Codear","http://photos-a.netjoven.pe/_files/noticias/1390575806-407.jpg");
var fran = new Squad(5,"Fran","Ruiz-Tagle",20,"Dibujar","Perros","Codear","https://pbs.twimg.com/media/COevIcCWgAUE2RP.jpg");
var su = new Squad(6,"Su","Arce",20,"Marketing","Codear","Pegarle a la gente","http://img04.deviantart.net/d4f2/i/2016/166/2/8/sakura_kickboxing_by_vashperado-da6cpie.jpg");
var bere = new Squad(7,"Bere","Nice",20,"Cocinar","Ser vegetariana", "Codear","https://esenios.files.wordpress.com/2016/04/corazon_alimentos.jpg");
var clau = new Squad(8,"Clau","Rivera", 20, "Bailar","Leer","Codear","https://mividaencamaraoculta.files.wordpress.com/2014/10/perrito.jpg");

var arr = [maca, nico, dani, andrea, fran, su, bere, clau];
//console.log (arr);

var num=1;
arr.forEach(function(ele){
	var aux = document.getElementById("muestra"); 
	//console.log(aux);
	//console.log(arr.length+1);
	//console.log ("Pasó por aquí");
	aux.innerHTML += "<div id='"+num+"'>"+ele.mostrar()+"</div>";
	num++;
	//console.log("Pasó por el segundo lugar");
	//console.log (ele.mostrar());
});
