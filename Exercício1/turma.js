class Turma{

    constructor(nome){
        this.nome = nome;
        this.alunos = [];
        this.teste = "TESTE";
    }

    adicionarAluno(novoAluno){
        novoAluno.id = parseInt( Math.random() * 100 );
        this.alunos.push(novoAluno);
    }

    procurarAluno(nome){
        var resultado = null;

        this.alunos.forEach(aluno => {
            nome = nome.toLowerCase();
            if(aluno.nomeCompleto.toLowerCase().includes(nome)){
                resultado = aluno;
            }
        });

        return resultado;
    }

    get numeroAlunos(){
        return this.alunos.length;
    }

}

class TurmaEspecial{

    constructor(){
        Object.setPrototypeOf(this, Turma);
        this.extra = "EXTRA";
    }

}