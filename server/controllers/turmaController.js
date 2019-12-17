var Turma = require('./../models/turmaModel');

exports.listarTurmas = function(request, response){

    console.info(request.body); //DADOS ENVIADOS NO CORPO DA REQUISIÇÃO
    console.info(request.params); // PARAMETRO NA URL
    console.info(request.query); // PARAMETROS APÓS O SÍMBOLO DE ? NA URL

    var conditions = {};

    if(request.query.hasOwnProperty("nome")){
        conditions["nome"] = {
            $eq: request.query.nome
        };
    }

    console.info(conditions);

    Turma.find(conditions, function(error, result){
        if(error){
            response.send("Erro ao lista turma");
        }
        response.json(result);
    });
}

exports.inserirTurma = function(request, response){
    console.info("POST body");
    console.info(request.body);

    var novaTurma = new Turma(request.body);
    novaTurma.save(function(error, result){
        if(error){
            response.send("Erro ao salvar turma");
        }
        response.send(result._id);
    });
}

exports.atualizarTurma = function(request, response){
    console.info("UPDATE TURMA");
    console.info(request.params.id);
    console.info(request.body);
    
    Turma.findOneAndUpdate({_id: request.params.id}, request.body, function(error, result){
        if(error){
            response.send("Erro ao atualizar turma");
        }
        response.send("Turma atualizada com sucesso");
    });
}

exports.deletarTurma = function(request, response){
    Turma.remove({_id: request.params.id}, function(error, result){
        if(error){
            response.send("Erro ao deletar turma");
        }
        response.send("Turma removida com sucesso");
    });
}