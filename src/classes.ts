class Pessoa{
    nome: string;
    altura: number;

    constructor(nome: string, altura: number){
        this.nome = nome;
        this.altura = altura;
    }
}

class Objeto{
    nome: string;
    constructor(nome: string){
        this.nome = nome;
    }
}

const Coisas = ["corda", "pau", "pedra", "lampada", "garfo"];

export{Objeto, Coisas, Pessoa}