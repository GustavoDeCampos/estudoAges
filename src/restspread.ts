//rest é um espalhador, sempre que tiver um conjunto de objetos, e quiser espalhar pra transformar em um array, é com rest

function fsoma(v1: number, v2: number){ //se eu quiser somar um terceiro valor, eu preciso adicionar ele nos parametros de entrada
    return v1 + v2;
}

console.log(fsoma(1,2));

function restsoma(...n: number[]){//os tres pontos antes do n, significa que ele vai receber um conjunto de valores, entao se eu quiser somar 100 valores por exemplo, nao preciso receber 100 parametros de entrada
    let soma = 0;
    for(let elemento of n){
        soma += elemento;
    }
    //n.forEach((valor) =>{
      //  soma += valor;
    //})
    return soma;
}

console.log(restsoma(1,2,3,4,5,6,7,8,9,10));