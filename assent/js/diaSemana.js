let numero = parseInt(prompt("Ingrese un numero del 1 al 7:"));

if (numero >= 1 && numero <= 7) {
    if (numero === 1) {
        console.log("El dia de la semana correspondiente al numero 1 es: Domingo");
    } else if (numero === 2) {
        console.log("El dia de la semana correspondiente al numero 2 es: Lunes");
    } else if (numero === 3) {
        console.log("El dia de la semana correspondiente al numero 3 es: Martes");
    } else if (numero === 4) {
        console.log("El dia de la semana correspondiente al numero 4 es: miercoles");
    } else if (numero === 5) {
        console.log("El dia de la semana correspondiente al numero 5 es: jueves");
    } else if (numero === 6) {
        console.log("El dia de la semana correspondiente al numero 6 es: viernes");
    } else if (numero === 7) {
        console.log("El dia de la semana correspondiente al numero 7 es: sabado");
    }
} else {
    console.log("El numero ingresado esta fuera del rango valido.")
}