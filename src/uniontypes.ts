let teste: string | number;//union types permitem que uma mesma variavel receba valores de tipos diferentes, mas nao é recomendavel usar sempre, apenas quando necessario
teste = "gustavo";
teste = 12;

let cursos=["javascript","typescript","c++", true, 100];
let valores=[1,2,3];

cursos.push("python");
valores.push(4);

console.log(cursos);
console.log(valores);
console.log(teste);