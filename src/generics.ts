function fTeste(valor: number): number { //como o parametro recebido é do tipo number, a função não aceitará outro tipo de parametro
  return valor; 
}

//função generica
function fTeste1<T,U>(valor: T, valor1: U): T{ //o tipo T é um tipo genérico, que pode ser qualquer tipo, pode ter mais de um tipo genérico
  return valor;
}

//não é necessario usar os 2 tipos, mas é preciso especificar os 2 tipos, ou n tipos no caso de mais de 2 tipos
console.log(fTeste1<number, boolean>(10, true)); 
console.log(fTeste1<string, any>("10", 10));
console.log(fTeste1<boolean, undefined>(true, undefined));

class Cteste<T>{
    valor: T;

    constructor(valor: T){
        this.valor = valor;
    }
}

const co = new Cteste<number>(10);
const co1 = new Cteste<string>("10");
const co2 = new Cteste<boolean>(true);
const co3 = new Cteste<any>(undefined);

console.log(co.valor);
console.log(co1.valor);
console.log(co2.valor);
console.log(co3.valor);