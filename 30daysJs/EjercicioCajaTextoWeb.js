const codigoPostal = function (){

let regex = /^(?:0?[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
let valorEscrito =document.getElementById('textBox').value;

let respuesta = `El número ${valorEscrito} es un código de postal`;
let textoMostrar="";

 document.getElementById('confirmacion').innerHTML =  regex.test(valorEscrito) ? respuesta : 'No es válido';

textoMostrar+= '<p>' + valorEscrito + '&nbsp' + valorEscrito + '&nbsp' + valorEscrito +  '</p>';
 document.getElementById('confirmacion2').innerHTML = textoMostrar;
}

const checkeo =function (){
 let regex02 = /^Sa.*do$/i;
 let textoEscrito = document.getElementById('textBox02').value;

 document.getElementById('confirmacion03').innerHTML = regex02.test(textoEscrito) ? 'Correcto' : 'Incorrecto';
}

