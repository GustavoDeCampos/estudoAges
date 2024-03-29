"use strict";
const teste1 = (txt = "caça rato") => {
    console.log(txt);
};
const somatorio = (arr) => {
    let soma = 0;
    arr.forEach((n) => {
        soma += n;
    });
    return soma;
};
teste1('joel');
teste1('ellie');
teste1('tess');
teste1();
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(somatorio(arr));
