class Calculator{

    constructor(){
        this.result = 0;
    }

    sum(value){
        this.result += parseFloat(value);
        return this.result;
    }

    mul(value){
        this.result *= parseFloat(value);
        return this.result;
    }
    
    div(value){
        this.result /= parseFloat(value);
        return this.result;
    }
    
    sub(value){
        this.result -= parseFloat(value);
        return this.result;
    }
    
    clear(){
        this.result = 0;
        return "Limpo";
    }
    
}

/*
function Calculator(){
    this.result = 0;
    
    this.init = function(){
        this.result = parseFloat( prompt("Informe o valor inicial") );
        return this.result;
    };
    this.sum = function(value){
        this.result += parseFloat(value);
        return this.result;
    };
    this.mul = function(value){
        this.result *= parseFloat(value);
        return this.result;
    };
    this.div = function(value){
        this.result /= parseFloat(value);
        return this.result;
    };
    this.sub = function(value){
        this.result -= parseFloat(value);
        return this.result;
    };
    this.clear = function(){
        this.result = 0;
        return "Limpo";
    };
}
*/