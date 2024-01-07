function Aluno (nome, nota) {
    this.nome = nome;
    this.nota = nota;
}

const aluno1 = new Aluno("Pedro", 10);
const aluno2 = new Aluno("Ana", 8);
const aluno3 = new Aluno("Gabriel", 6);
const aluno4 = new Aluno("Mercia", 4);
const aluno5 = new Aluno("Weder", 2);

const alunos = [];

alunos.push(aluno1);
alunos.push(aluno2);
alunos.push(aluno3);
alunos.push(aluno4);
alunos.push(aluno5);

const alunosAprovados = alunos.filter((aluno) => (
    aluno.nota >= 6
));

console.log(alunosAprovados);


