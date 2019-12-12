class Aluno{

    constructor(nomeCompleto = "", dataNascimento){
        this.nome = "";
        this.sobrenome = "";
        this.nomeCompleto = nomeCompleto;

        if(dataNascimento){
            this.dataNascimento = new Date(dataNascimento);
        }else{
            this.dataNascimento = new Date();
        }

        //this.dataNascimento = dataNascimento ? new Date(dataNascimento) : new Date();
    }

    get nomeCompleto(){
        return this.nome + " " + this.sobrenome;
    }

    set nomeCompleto(valor){
        var nomes = valor.split(" ");
        this.nome = nomes[0];
        this.sobrenome = nomes[1];
    }

    get idade(){
        var today = new Date();
        return today.getFullYear() - this.dataNascimento.getFullYear();
    }

}