//Prueba de diferencia entre un console log y un return
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre); //muestra en pantalla el valor del argumento enviado por el parametro.
    return nombre; //muestra el valor entre comillas que fue enviado por el parametro.
    //Se debe colocar el return para evitar errores.
}

function otraFuncion(){
    return ("El nombre que retorna la función anterior es " + 
    cuidadoConElConsoleLog("Nellyreth"));
}

//Cuidado con el orden del return y el console log
//Si se coloca primero el return la ejecución termina, dejando atrás el console
function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}

cuidadoConElReturn("Felipe");