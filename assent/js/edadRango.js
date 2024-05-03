let edad = parseInt(prompt("Por favor, ingresa tu edad"));

if (edad >= 0 && edad <= 12) {
    console.log("Eres un niño.");
} else if (edad >= 13 && edad <= 19) {
    console.log("Eres un adolecente.");
} else if (edad >= 20 && edad <= 59) {
    console.log("Eres un adulto.");
} else if (edad > 60) {
    console.log("Eres un anciano.");
} else {
    console.log("Edad invalida, por favor, ingrese una edad valida.")
}