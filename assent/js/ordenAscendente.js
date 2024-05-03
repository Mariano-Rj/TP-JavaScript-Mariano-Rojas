let numero1 = parseFloat(prompt("Ingrese el primer numero:"));
let numero2 = parseFloat(prompt("Ingrese el primer numero:"));
let numero3 = parseFloat(prompt("Ingrese el primer numero:"));

let minimo = Math.min(numero1, numero2, numero3)

let maximo;
switch (minimo) {
    case numero1:
        maximo = Match.max(numero2, numero3);
        break;
    case numero2:
        maximo = Math.max(numero1, numero3)
        break;
    case numero3:
        maximo = Math.max(numero1, numero2)
        break;
}

let medio = numero1 + numero2 + numero3 - minimo - maximo;

console.log("Numero ordenados en forma ascendente:");
console.log(minimo + ", " + medio + ", " + maximo)