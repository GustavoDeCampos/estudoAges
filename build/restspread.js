"use strict";
function fsoma(v1, v2) {
    return v1 + v2;
}
console.log(fsoma(1, 2));
function restsoma(...n) {
    let soma = 0;
    for (let elemento of n) {
        soma += elemento;
    }
    return soma;
}
console.log(restsoma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
