pessoa = {
    nome: "Anderson Lima",
    idade: 31,
    "endereço": ""
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