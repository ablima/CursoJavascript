var calc = new Calculator();

function soma(){
    var input = document.getElementById("input");
    calc.sum(input.value);
    document.getElementById("result").innerHTML = calc.result;
}

function sub(){
    var input = document.getElementById("input");
    calc.sub(input.value);
    document.getElementById("result").innerHTML = calc.result;
}

function mul(){
    var input = document.getElementById("input");
    calc.mul(input.value);
    document.getElementById("result").innerHTML = calc.result;
}

function div(){
    var input = document.getElementById("input");
    calc.div(input.value);
    document.getElementById("result").innerHTML = calc.result;
}