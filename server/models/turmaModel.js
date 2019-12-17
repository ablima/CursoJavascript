var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TurmaSchema = new Schema({
    nome: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    alunos: [
        {
            nome: {
                type: String
            },
            sobrenome: {
                type: String
            },
            dataNascimento: {
                type: Date
            }
        }
    ]
});

module.exports = mongoose.model('Turma', TurmaSchema);