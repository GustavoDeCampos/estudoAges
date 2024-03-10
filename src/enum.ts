//enumeradores sao conjuntos de dados que podem ser utilizados e classificados como valores numerais ou textuais
enum diasDaSemana {
    domingo,
    segunda,
    terca,  
    quarta,
    quinta,
    sexta,
    sabado,
}//o padrao de ordenação sempre vai começar do 0 e crescer em ordem numerica, entao só é necessario atribuir valor quando desejar um valor diferente da ordem padrao


console.log(diasDaSemana.domingo); //vai retornar 1 pois é o valor atrelado ao domingo
console.log(diasDaSemana[1]); //vai retornar domingo pois é o valor atrelado ao 1

const d = new Date(); 

console.log(d.getDay()); //vai retornar o dia da semana atual em valor numerico
console.log(diasDaSemana[d.getDay()]); //vai retornar o dia da semana atual
//na função acima eu estou usando o meu enum para mostrar o nome do dia da semana, sem o enum mostraria apenas o valor numerico do dia

enum cores {
    branco = '#fff',
    preto = '#000',
    vermelho = '#f00', 
    verde = '#0f0',
    azul = '#00f',  
}

console.log(cores.branco); //vai retornar o valor hexadecimal da cor branca
