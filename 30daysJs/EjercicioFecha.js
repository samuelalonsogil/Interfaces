const felizNavidad = function(){



    let day = String (actualDate.getDate()).padStart(2, '0');
    let month = String(actualDate.getMonth() + 1).padStart(2, '0');
    let year = actualDate.getFullYear();



    actualDate = day + '/' + month + '/' + year;

    document.getElementById('fecha').innerHTML = actualDate.toString();

}



