// tipagem forte => explicitamente definir cada dado em nosso sistema

// tipagem dinamica: é possivel trocar o tipo de uma variavel mesmo depois definida, é possivel definir uma variavel como string e depois
// mudar para number, e isso é feito em tempo de execução, porem isso pode acabar causando varios tipos de erro

// tipagem em runtime: a verificação é feita durante a execução do código, o uso de codigo é feito para garantir que tudo esta como
// deveria estar, pode ser com loops, com condicionais, o uso de estruturas de codigo é feito para fazer a checagem de tipos

// tipagem estatica: a verificação é feita antes da execução do código, sem necessidade de condicionais para saber o que esta 
// acontecendo, o proprio compilador ja faz a verificação de tipos

//intellisense: é a capacidade de um editor de código de sugerir o que pode ser feito, o que pode ser escrito, o que pode ser chamado
// deixar o editor de codigo mais inteligente

//inferencia: quando o typescript consegue determinar o tipo de forma automatica 

type User = {
    anoQueNasceu: number;
    nome: string;
}


function calculaIdade(usuario: User) {
    if(usuario.anoQueNasceu >= 2024) {
        return "Ano de nascimento invalido"

    }
    return 2024 - usuario.anoQueNasceu;
}

const idade = calculaIdade({nome: "Gustavo", anoQueNasceu: 1993 });
//o tipo da variavel idade nao foi definido, no entano, a função que ela recebe retorna number, entao por inferencia, a variavel idade é do tipo number
//a variavel nao obrigatoriamente tem um unico formato, ela pode ter mais de um, no caso, a variavel idade pode ser number ou string
//dependendo do ano de nascimento que a função recebe como parametro
