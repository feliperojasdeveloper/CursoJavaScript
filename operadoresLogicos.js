//Condicional AND debe cumplirse todas las condiciones.
function mayorMenor(num) {
    if (num > 5 & num < 10) console.log(true);
    else console.log(false);
}

mayorMenor(2);
mayorMenor(7);

function mayorMenorPar(numero) {
    if (numero > 5 & numero < 10 & numero % 2 === 0) console.log(true);
    else console.log(false);
}

mayorMenorPar(8);

//Condicional OR debe cumplirse alguna de las condiciones.
console.log("-------------------");
function operadorOr(str) {
    if(str === "Henry" || str.length < 2) console.log(true);
    else console.log(false);
}
operadorOr("B");
//Condicional NOT inversa la negación lógica 
console.log("-------------------");
function permiso(valor){
    if (!valor) console.log("Tiene permiso");
}
permiso(false);

console.log("--------EJEMPLO-----------");
function condicionCompleja(num){
    if( num > 9 & num % 2 == 0 || num === 3) console.log(true);
    else console.log(false);
}

condicionCompleja(4);