/*Dado un array de números…*/
let arr = [0,1,2,3,4,5,6,7,8,9,10];

/*Indica si el número 5 está entre ellos*/
let encuentraCincos = () =>  arr.includes(5);
console.log(encuentraCincos());

/*Muestra el número situado en mitad del array (si el número de elementos del array es impar);
  Muestra los 2 números situados en mitad del array (si el número de elementos del array es par)*/
let longitudMitadPar = parseInt(arr.length * 0.5);
let numeroMitad = () => arr.length % 2 === 0 ? arr[longitudMitadPar] : arr[longitudMitadPar] + ' ' + arr[longitudMitadPar + 1] ;
console.log(numeroMitad());


