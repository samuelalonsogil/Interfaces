/*Ejercicio B-1:
Crea una página web, que permita determinar si un password es fuerte o débil.
    El usuario podrá indicar si (en la web):
    -Es obligatorio el uso de mayúsculas
    -Es obligatorio el uso de números
    -Es obligatorio el uso de símbolos raros
    -El número mínimo de caracteres
*/



const password = function(){

    let obligMayus = document.getElementById('mayus').checked();
    let obligNums = document.getElementById('nums').checked();
    let obligRaros = document.getElementById('raros').checked();
    let obligCantidad = document.getElementById('carac').checked();

    let passwordWritten = document.getElementById('textBox').value;

    let strong = true;

    if (obligMayus){
        let regexMayus = /[A-Z]/;
        if(! regexMayus.test(passwordWritten) === true) strong = false;
    }

    if (obligNums){
        let regexNums = /([0-9])/;
        if(! regexNums.test(passwordWritten) === true) strong = false;
    }

    if (obligRaros){
        let regexSpecialCharacters = /(?=.*?[#?!@$%^&*-])/;
        if(! regexSpecialCharacters.test(passwordWritten) === true) strong = false;
    }

    if (obligCantidad){
        let regexLenght = /({.8,})/*/;
        if(! regexLenght.test(passwordWritten) === true) strong = false;
    }

    /*all together*/
    let regexSecurePassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/


    let finePswd = 'La contraseña es segura';

    document.getElementById('confirmacion').innerHTML =
    regexSecurePassword.test(passwordWritten) ? finePswd : 'Contraseña poco segura';




}

/*<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        Uso obligatorio de mayúsculas <input type="checkbox" id="mayus"> <br />
        Uso obligatorio de mumeros <input type="checkbox" id="num"> <br />
        Uso obligatorio de caracteres raros <input type="checkbox" id="raros"> <br />
        Cantidad de caracteres <input id="cantidad"> <br />
        <input id="password">
        <div id="fortaleza"></div>
    </div>
    <script>
        document.getElementById('password').addEventListener('keypress', operar)
        function operar() {
            let obligaMayus = document.getElementById('mayus').checked
            let obligaNum = document.getElementById('num').checked
            let obligaRaros = document.getElementById('raros').checked
            let cantidad = parseInt(document.getElementById('cantidad').value)
            let password = document.getElementById('password').value
            let fuerte = true
            if (obligaMayus) {
                let regex = /[A-Z]/
                if (!regex.test(password) == true) fuerte = false
            }

            if (obligaNum) {
                let regex = /[0-9]/
                if (!regex.test(password) == true) fuerte = false
            }

            if (obligaRaros) {
                let regex = /[&$_#;]/
                if (!regex.test(password) == true) fuerte = false
            }

            if (password.length < cantidad) fuerte = false

            document.getElementById('fortaleza').innerHTML = fuerte
        }
    </script>
</body>

</html>*/
