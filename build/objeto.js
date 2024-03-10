"use strict";
let dados = {
    nome1: "Gustavo",
    idade: 20,
    stats: "Ativo",
    info: (p) => { console.log(p); }
};
console.log(dados);
console.log("Tipo: " + typeof (dados));
console.log("Nome: " + dados.nome1);
dados.idade = 21;
console.log("Nova Idade: " + dados.idade);
dados.nome1 = "junior";
dados.info(dados.nome1 + " é um programador");
