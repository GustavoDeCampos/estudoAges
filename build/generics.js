"use strict";
function fTeste(valor) {
    return valor;
}
function fTeste1(valor, valor1) {
    return valor;
}
console.log(fTeste1(10, true));
console.log(fTeste1("10", 10));
console.log(fTeste1(true, undefined));
class Cteste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const co = new Cteste(10);
const co1 = new Cteste("10");
const co2 = new Cteste(true);
const co3 = new Cteste(undefined);
console.log(co.valor);
console.log(co1.valor);
console.log(co2.valor);
console.log(co3.valor);
