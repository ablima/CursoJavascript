var nomeTurma = prompt("Informe o nome da turma");

$.ajax({
    url: "http://localhost:3002/turma?nome=" + nomeTurma,
    success: function(response){
        console.info(response);
    }
});

var turma = new Turma(nomeTurma);

var inputNome;
var inputData;
var inputProcurar;
var numeroAlunos;

window.onload = function(){
    document.getElementById("nomeTurma").innerHTML = turma.nome;

    inputNome = document.getElementById("nomeAluno");
    inputData = document.getElementById("nascimentoAluno");
    inputProcurar = document.getElementById("procurarAluno");
    numeroAlunos = document.getElementById("numeroAlunos");
}

function inserirAluno(){
    var novoAluno = new Aluno( inputNome.value, inputData.value );

    turma.adicionarAluno(novoAluno);
    numeroAlunos.innerHTML = turma.numeroAlunos;

    console.info(turma);

    listaAlunos();

    //$("#listaAlunos").append("<h1>" + novoAluno.nomeCompleto + "</h1>");
}

function procurarAluno(){
    var resultado = turma.procurarAluno( inputProcurar.value );
    if(resultado){
        console.info("ACHOU - " + resultado.nomeCompleto);
    }else{
        console.error("Nenhum aluno encontrado");
    }
}

function listaAlunos(){

    $("#listaAlunos").children().remove();

    turma.alunos.map(aluno => {
        $("#listaAlunos").append("<h1>" + aluno.nomeCompleto + "</h1>");
    });

}