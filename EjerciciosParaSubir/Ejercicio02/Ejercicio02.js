/*crea aplicacion web que permita escribir escribir en una caja de texto (números separados por comas)
* Al pulsar mostrará por pantalla la suma de los números positivos*/


const suma = function() {

                        /*accedes a los lementos escritos en el cuadro de texto*/
    let arraySuma = (document.getElementById('textBox').value).split(',');
                                                                        /*los separas con el split*/

    let sumaArray = 0; /*variable donde se suman los elementos*/

    /*se recorre el array*/
    for(let i=0 ; i < arraySuma.length; i++) {
        let stringToNumber = Number(arraySuma[i]); /*se hace una variable en la que se guardan
                                                    los elementos pasados de String a int*/

        if(stringToNumber > 0) sumaArray += stringToNumber; /*si mayores que 0 se suman*/
    }

    /*se muestra en el split el resultado*/
     document.getElementById('resultado').innerHTML = sumaArray;
}




