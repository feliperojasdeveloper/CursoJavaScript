//Bucle for se utiliza cuando conocemos la cantidad de veces que se debe repetir.
var suma = 0;
for (var i = 1; i <= 10; i++) {
    suma = suma + 1;
    console.log(suma);
}

var sum2 = 0;
for (var j = 0; j < 5; j++) {
    sum2 = sum2 + j;
    console.log("Iteracion # " + j + " El valor de la variable es: " + sum2);
}
console.log("La sumatoria de las iteraciones es: " + sum2);

//bucle while se utiliza cuando no conocemos cuantas iteracciones necesitamos
var suma2 = 0;
while (suma2 < 3) {
    suma2 = suma2 + 1;
    console.log(suma2);
}

