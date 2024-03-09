let nome = "gustavo"; //a variavel nome recebe o tipo String na atribuição, logo se eu tentar atribuir um numero nela, nao vai funcionar;
                     //isso acontece pois o typescript é altamente tipado, se eu tentar atribuir um numero a uma variavel que recebeu uma string no javascript, ele aceitaria, mas no typescript nao;
let valor = 0; //int, float, double, bin, hex, octal, em typescript é tudo number;
valor = 0.1; //double
valor = 0x10; //hex
valor = 0b10; //bin
valor = 0o10; //octal
valor = 10; //int   
valor = 10.0; //float
console.log(valor);
console.log(nome);
let nome2; // é possivel declarar uma variavel e atribuir um valor depois, porem ela sera do tipo any, ou seja, aceita qualquer tipo de valor;
nome2 = "gustavo"; //aqui estou atribuindo um valor do tipo string a variavel nome2;
console.log(nome2);