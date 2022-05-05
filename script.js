function encriptar() {
	var texto = document.getElementById("inputText").value.toLowerCase();
	var textoCifrado = texto.replace(/e/igm,"enter");
	var textoCifrado = textoCifrado.replace(/o/igm,"ober");
	var textoCifrado = textoCifrado.replace(/i/igm,"imes");
	var textoCifrado = textoCifrado.replace(/a/igm,"ai");
	var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

	document.getElementById("munheco").style.display = "none";
	document.getElementById("text-right").style.display = "none";
	document.getElementById("text2-right").innerHTML = textoCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";

	console.log(textoCifrado)
}

function desencriptar() {
	var texto = document.getElementById("inputText").value.toLowerCase();
	var textoCifrado = texto.replace(/enter/igm,"e");
	var textoCifrado = textoCifrado.replace(/ober/igm,"o");
	var textoCifrado = textoCifrado.replace(/imes/igm,"i");
	var textoCifrado = textoCifrado.replace(/ai/igm,"a");
	var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

	document.getElementById("munheco").style.display = "none";
	document.getElementById("text-right").style.display = "none";
	document.getElementById("text2-right").innerHTML = textoCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";

	console.log(textoCifrado)
}

function copy(){
	var contenido = document.querySelector("#text2-right");
	contenido.select();
	document.execCommand("copy");
	alert("se copio")
}