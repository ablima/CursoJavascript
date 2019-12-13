$(document).ready(function(){
    $("#subtitulo").html("de atualização via jQuery");

    $("#confirmar").on("click", function(){
        var value = $("#nome").val();
        $("#lista").append("<h1>" + value + "</h1>");
    });
});

$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    data: {

    },
    success: function(response){
        console.info(response);
        listarUsuarios(response);
    },
    error: function(error){
        console.info("ERRO: " + error);
    }
});

function listarUsuarios(users){
    $("#lista").children().remove();

    users.map(user => {
        var html = `
            <div class=\"usuario\">
                <h1>Nome: ${user.name}</h1>
                <h2>Email: ${user.email}</h2>
            </div>
        `;
        $("#lista").append(html);
    });
}

function maximoDivisaoPor2(numero, callback, contador = 0){

    var resto = numero % 2;

    console.info(numero);

    if(resto != 0){

        try {
            callback();
        }catch(err){
            console.info("Nenhum callback registrado");
            console.info("RESULTADO: " + contador);
        }
        
        return "RESULTADO: " + contador;
    }else{
        return setTimeout( () => maximoDivisaoPor2(numero / 2, callback, contador + 1) , 1000 );
    }

}

/*
console.log("teste1");

maximoDivisaoPor2(2012, function(){
    console.log("ACABOU!");
});

console.log("teste2");
*/

//setInterval(() => maximoDivisaoPor2(12), 5000);