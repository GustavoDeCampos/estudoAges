//usada quando nao precisar ou nao quiser declarar uma função
//com um function normal, mesmo que tu chame ela antes de criar, ela ainda vai ser valida, pois o typescript eleva ela para
//o topo do arquivo, isso nao acontece com uma função anonima
//quando a função é declarada com arrow function, ela nao é elevada para o topo do arquivo

const teste1 =(txt: string="caça rato"):void => {
    console.log(txt);
}

//somatorio dos numeros de um array usando arrow
const somatorio = (arr: number[]):number => {
    let soma = 0; //variavel soma inicia com 0
    arr.forEach((n) => { //para cada elemento no array, ele vai ser adicionado no parenteses como n
        soma += n; //para cada elemento de n, ele vai somar com a variavel soma
    });
    return soma; //depois de somar todos os valores, retorna a soma
}
teste1('joel');
teste1('ellie');
teste1('tess');
teste1();

let arr:number[] = [1,2,3,4,5,6,7,8,9,10];

console.log(somatorio(arr)); //soma todos os valores do array