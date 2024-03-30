interface curso{
    titulo: string;
    descricao: string;
    iniciarCurso?(teste: string): void;
}

interface cursoProg extends curso{
    aulas: number;
    maxAlunos: number;
}

let curso1: cursoProg;
let curso2: cursoProg;


curso1 = {titulo: 'Typescript', descricao: 'Curso de Typescript', aulas: 5, maxAlunos: 10,};
curso2 = {titulo: 'React', descricao: 'Curso de React', aulas: 5, maxAlunos: 10}

console.log(curso1);
console.log(curso2);

