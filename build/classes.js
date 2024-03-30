"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = exports.Coisas = exports.Objeto = void 0;
class Pessoa {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
exports.Pessoa = Pessoa;
class Objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto = Objeto;
const Coisas = ["corda", "pau", "pedra", "lampada", "garfo"];
exports.Coisas = Coisas;
