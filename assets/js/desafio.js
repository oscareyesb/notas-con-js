var nombre = document.getElementById("nombre");
var carrera = document.getElementById("carrera");
var html1 = document.getElementById("html1");
var html2 = document.getElementById("html2");
var html3 = document.getElementById("html3");

var htmlpromedio = document.getElementById("htmlpromedio");



nombre.innerHTML = prompt("Ingrese un nombre");
carrera.innerHTML = prompt("Ingrese un carrera");

//Total html
var notahtml1 = +prompt("Ingrese la nota 1 de HTML");
var notahtml2 = +prompt("Ingrese la nota 2 de HTML");
var notahtml3 = +prompt("Ingrese la nota 3 de HTML");

html1.innerHTML = notahtml1;
html2.innerHTML = notahtml2;
html3.innerHTML = notahtml3;

htmlpromedio.innerHTML = ((notahtml1 + notahtml2 + notahtml3) / 3).toFixed(2);

//Total CSS
var css1 = document.getElementById("css1");
var css2 = document.getElementById("css2");
var css3 = document.getElementById("css3");

var csspromedio = document.getElementById("csspromedio");


var notacss1 = +prompt("Ingrese la nota 1 de CSS");
var notacss2 = +prompt("Ingrese la nota 2 de CSS");
var notacss3 = +prompt("Ingrese la nota 3 de CSS");

css1.innerHTML = notacss1;
css2.innerHTML = notacss2;
css3.innerHTML = notacss3;

csspromedio.innerHTML = ((notacss1 + notacss2 + notacss3) / 3).toFixed(2);

//Total JS
var js1 = document.getElementById("js1");
var js2 = document.getElementById("js2");
var js3 = document.getElementById("js3");

var jspromedio = document.getElementById("jspromedio");


var notajs1 = +prompt("Ingrese la nota 1 de JS");
var notajs2 = +prompt("Ingrese la nota 2 de JS");
var notajs3 = +prompt("Ingrese la nota 3 de JS");

js1.innerHTML = notajs1;
js2.innerHTML = notajs2;
js3.innerHTML = notajs3;

jspromedio.innerHTML = ((notajs1 + notajs2 + notajs3) / 3).toFixed(2);