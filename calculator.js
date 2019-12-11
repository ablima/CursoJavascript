function Calculator(){
    this.result = 0;
    
    this.init = function(){
        this.result = parseFloat( prompt("Informe o valor inicial") );
        return this.result;
    };
    this.sum = function(value){
//        var value = parseFloat( prompt("Informe o valor da soma") );
        this.result += parseFloat(value);
        return this.result;
    };
    this.mul = function(value){
//        var value = parseFloat( prompt("Informe o valor da multiplicação") );
        this.result *= parseFloat(value);
        return this.result;
    };
    this.div = function(value){
//        var value = parseFloat( prompt("Informe o valor da divisão") );
        this.result /= parseFloat(value);
        return this.result;
    };
    this.sub = function(value){
//        var value = parseFloat( prompt("Informe o valor da subtração") );
        this.result -= parseFloat(value);
        return this.result;
    };
    this.clear = function(){
        this.result = 0;
        return "Limpo";
    };
}