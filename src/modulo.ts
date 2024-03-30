import {Pessoa, Objeto, Coisas } from "./classes";
//import { Objeto } from "./classes";

const p1 = new Pessoa("Lucas", 1.8);
console.log(p1.nome);
console.log(p1.altura);

const o1 = new Objeto("Objeto");
console.log(o1.nome);

console.log(Coisas);