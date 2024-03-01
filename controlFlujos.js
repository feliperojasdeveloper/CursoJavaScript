function viajar(destino) {
    if (destino === "Brasil") {
        console.log("Gire a la izquierda");
    } else if (destino === "Argentina") {
        console.log("Gire a la derecha");
    } else {
        console.log("Nos perdimos");
    }
}
//La palabra else, nos permite anidar if, no es muy funcional hacer uso de tantos if, ya que el código se vuelve dificil de mantener y escalar.

viajar("Ecuador");

//Operadores de comparación.
function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);