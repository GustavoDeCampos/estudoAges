class Teste{
    canal = null;
    curso = null;
    constructor(canal:any, curso:any){
        this.canal = canal;
        this.curso = curso;
    }   
}
let c1 = new Teste('Canal 1', 'Curso 1');
console.log(c1.canal);
console.log(c1.curso);

