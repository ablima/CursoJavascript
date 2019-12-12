var calc = new Calculator();

var input;
var result;

window.onload = function(){
    input = document.getElementById("input");
    result = document.getElementById("result");
}

function soma(){
    calc.sum(input.value);
    result.innerHTML = calc.result;
}

function sub(){
    calc.sub(input.value);
    result.innerHTML = calc.result;
}

function mul(){
    calc.mul(input.value);
    result.innerHTML = calc.result;
}

function div(){
    calc.div(input.value);
    result.innerHTML = calc.result;
}