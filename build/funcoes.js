"use strict";
function Logar(user, pass) {
    console.log(`user: ${user}, pass: ${pass}`);
}
Logar("Gustavo", "123");
function Soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
const r = Soma2(10, 20);
let s_res = Soma2(22, 34).toString();
console.log(r);
console.log(s_res);
function soma(n1 = 0, n2 = 9) {
    let r = n1 + n2;
    return r;
}
console.log(soma(10));
function novoUser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
}
novoUser("br", "123", "Bruno");
