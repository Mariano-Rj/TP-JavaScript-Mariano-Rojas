let primerTrimestre = parseInt(prompt("Ingrese la nota del primer trimestre (1-10)."));

let segundoTrimestre = parseInt(prompt("Ingrese la nota del segundo trimestre (1-10.)"));

let tercerTrimestre = parseInt(prompt("Ingrese la nota del tercer trimestre (1-10.)"));


promedio = (primerTrimestre + segundoTrimestre + tercerTrimestre)/ 3

if (promedio > 0 && promedio < 4) {
    console.log("Nota Insuficiente");
} else if (promedio > 3 && promedio < 6) {
    console.log("Nota Regular");
} else if (promedio > 5 && promedio < 8) {
    console.log("Nota Buena");
} else if (promedio > 7 && promedio < 10) {
    console.log("Nota Muy Buena");
} else if (promedio === 10) {
    console.log("Nota Sobresaliente");
} else {console.log("Nota Invalida, ingrese entre 1 al 10.")}
