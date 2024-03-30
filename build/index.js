"use strict";
function calculaIdade(usuario) {
    if (usuario.anoQueNasceu >= 2024) {
        return "Ano de nascimento invalido";
    }
    return 2024 - usuario.anoQueNasceu;
}
const idade = calculaIdade({ nome: "Gustavo", anoQueNasceu: 1993 });
