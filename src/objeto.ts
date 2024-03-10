let dados={ //em javascript um object pode receber propriedades e metodos, sao variaveis que podem receber qualquer tipo de dado
    nome1: "Gustavo", //em typescrypt o sinal "=" serve para atribuir um valor a uma variavel, enquanto o sinal ":" serve para definir o tipo de uma variavel
    idade: 20,
    stats: "Ativo",
    info:(p:string)=>{console.log(p)} //podemos tambem criar funções dentro de um object
}//a vantagem de trabalhar com object é que podemos acessar suas propriedades e metodos de forma mais facil, podemos operar com os elementos do object

//para trabalharmos com o object nao precismos especificar que algo é um object, o proprio typescript ja reconhece atraves da estrutura do object "{}"

console.log(dados) 
console.log("Tipo: " + typeof (dados)) //typeof é um operador que retorna o tipo de uma variavel
console.log("Nome: " + dados.nome1) //para acessar uma propriedade de um object usamos o ponto
dados.idade = 21 //para alterar o valor de uma propriedade de um object usamos o sinal de atribuição
console.log("Nova Idade: " + dados.idade)
dados.nome1 = "junior" //caso mudemos o nome depois, ainda sim a função vai retornar o nome do object, no caso o novo nome que foi atribuido
dados.info(dados.nome1 + " é um programador")//aqui estamos chamando a função, como ela recebe um parametro do tipo string, ela so pode ser acessada atraves de strings, como nome1 é uma string ela vai retornar o nome do object
