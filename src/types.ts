//type assertion: quando é preciso fazer afirmação de tipo, o type assertion so pode ser usado em variaveis do tipo unknown
//nao é possivel usar afirmação de tipo pra transformar uma string em number, por exemplo
//typecast: é a conversão de um tipo de dado para outro, como por exemplo, de string para number

let n: number;
let s: string;
let u: unknown;

n = 10;
s = "20";

s = n.toString(); //aqui é feito um typecast de number para string, ou seja, o numero 10 é um numero inteiro, mas passa a ser uma string graças ao casting
n =Number.parseInt(s); //nao é possivel fazer uma associação direta de um string para um number, somente com casting
//aqui é feito um typecast de string para number, ou seja, o numero 20 é uma string, mas passa a ser um numero inteiro graças ao casting

u = 10; // nao é possivel fazer uma associação direta de um unknown para um number, somente uma afirmação de tipo
n = u as number; //afirmação de tipo
n = <number>u; //afirmação de tipo

console.log(typeof u);
console.log(u);

console.log(typeof n);
console.log(n);

console.log(typeof s);
console.log(s);