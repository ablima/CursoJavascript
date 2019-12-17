var turmaController = require("./../controllers/turmaController");

module.exports = function (app){
    app.route('/')
        .get(function(request, response){
            response.
        })
        .post(function(request, response){
            console.log(request.body);
            response.send("POST CHAMADO");
        })
        .put(function(request, response){
            response.send("PUT CHAMADO");
        })
        .delete(function(request, response){
            response.send("DELETE CHAMADO");
        })

    app.route('/teste/:id')
        .get(function(req, res){
            console.log(req.params);
            res.send("CHAMOU ROTA TESTE!");
        })

    app.route('/turma')
        .get(turmaController.listarTurmas)
        .post(turmaController.inserirTurma)

    app.route('/turma/:id')
        .put(turmaController.atualizarTurma)
        .delete(turmaController.deletarTurma)
}