/**function es una palabra reservada, que indica que es una funcion.
sumaTres es el nombre de la función
Los parentesis recibe los parametros que va a tener la función.
El código dentro de las llaves es el cuerpo de la función, lo que se debe ejecutar.
**/
function sumaTres(x) {
    console.log(x+3);
}
sumaTres(5);

//primero
function sumaTresOtra(y) {
    return  y + 3;
}

//segundo
var sumaTres = function (z) {
    return z + 3;
};

//tercero función de flecha
var sumaTresOtro = (w) => {
    return w + 3;
};

//Console log  muestra en consola el resultado de la operacion.
//return devuelve un valor al llamarlo.