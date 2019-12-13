var nome = "Priscila";
var sobrenome = "Lima";

var pessoa2 = new Pessoa("Anderson", "Lima");

function Pessoa(nome = "---", sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataNascimento = new Date("05/24/1988");

    this.getIdade = function(){
        var today = new Date();
        return today.getFullYear() - this.dataNascimento.getFullYear();
    }
}

var cteste = new Calculator();

pessoa = {
    nome: "Anderson",
    sobrenome: "Lima",
    //idade: 31,
    dataNascimento: new Date("05/24/1988"),
    "nome casado": "Anderson C",
    "endereço": "Rua ahahsahiahi",

    get idade(){
        var today = new Date();
        return today.getFullYear() - this.dataNascimento.getFullYear();
    },

    set nomeCompleto(nome){
        var nomes = nome.split(" ");
        this.nome = nomes[0];
        this.sobrenome = nomes[1];
    },

    get nomeCompleto(){
        return this.nome + " " + this.sobrenome;
    },

    getFullName: function(){
        return this.nome + " " + this.sobrenome;
    }

}

var numero = 23;
var textoOriginal;

function alertar(){
    alert("Clicou botão");
}

function mudarTexto() {
    var texto = document.getElementById("texto1");

    textoOriginal = texto.innerHTML;

    texto.innerHTML = "CLIQUE DO BOTÃO";
}

$("#buttonAlert")[0].on('click', alertar);

/*
function divideUntilZero(number, callback, count = 0){

    if(number / 2 >= 1){
        console.info(number / 2);
        return setTimeout(
            () => divideUntilZero(number/2, callback, count+1),
            1000
        );
    }else{

        try{
            callback();
        }catch(err){
            console.info("Nenhum callback");
        }
        
        return count;
    }
    
}

console.info("teste1");

divideUntilZero(32, function(){
    console.info("teste2");
});

*/