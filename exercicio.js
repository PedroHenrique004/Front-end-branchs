"use strict";
let resultado = 0;
function multiplicar(x, y) {
    resultado = x * y;
    return resultado;
}
multiplicar(10, 2);
console.log(resultado);
function dizerOla(nome) {
    const ola = `Olá ${nome}`;
    console.log(ola);
}
dizerOla("Pedro");
