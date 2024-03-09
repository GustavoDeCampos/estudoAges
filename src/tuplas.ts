let coisas:[string, number, boolean] = ["teste", 10, true];//em um array normal é possivel ter qualquer tipo de variavel em qualquer posição 
//em tuplas, cada posição tem um tipo especifico e fixo
//caso a primeira posição seja string, ela so pode receber variaveis do tipo string, mesmo que o array receba number e boolean, porque a posição 0 é string

coisas.push("teste2", 20, false);//é possivel adicionar mais valores mas como só tem 3 indices, é impossivel manipular os valores adicionados posteriormente
coisas.push(12, false, "string")//também nao importa a ordem que eles serao adicionados, pois só existem os indices de 0 a 2

//também é possivel transformar uma tuplas em readonly, fazendo com que nao seja possivel usar push nem pop, nem alterar o valor das posições

coisas[1] = 20;

console.log(coisas);
console.log(coisas[0]);
console.log(coisas[1]);