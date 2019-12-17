var nomeTurma = prompt("Informe o nome da turma");

var turma;

$.ajax({
    url: "http://localhost:3002/turma?nome=" + nomeTurma,
    success: function(response){
        console.info(response);
        if(response.length == 0){
            turma = new Turma(nomeTurma);
            salvarTurma();
        }else{
            turma = new Turma(response[0].nome);
            turma._id = response[0]._id;

            response[0].alunos.map(aluno => {
                turma.adicionarAluno(new Aluno(aluno.nome + " " + aluno.sobrenome, aluno.dataNascimento));
            });
            listaAlunos();

            console.info(turma);
        }
    }
});

function salvarTurma(){
    var data = JSON.stringify(turma);

    $.ajax({
        url: "http://localhost:3002/turma",
        method: "POST",
        data: data,
        contentType: "application/json; charset=utf-8",
        success(response){
            turma._id = response._id;
            console.info("Turma salva com sucesso");
        },
        error(){
            console.error("Falha ao inserir turma");
        }
    });
}

function atualizarTurma(){
    var data = JSON.stringify(turma);
    console.info(turma);

    $.ajax({
        url: "http://localhost:3002/turma/" + turma._id,
        method: "PUT",
        data: data,
        contentType: "application/json; charset=utf-8",
        success(){
            console.info("Turma atualizada com sucesso");
        },
        error(){
            console.error("Falha ao atualizar turma");
        }
    });
}

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
    atualizarTurma();

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

    $('#numeroAlunos').html(turma.numeroAlunos);

    turma.alunos.map(aluno => {
        $("#listaAlunos").append("<h1>" + aluno.nomeCompleto + "</h1>");
    });

}