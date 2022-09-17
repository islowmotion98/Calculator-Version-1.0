let display = document.getElementById('display');
let simboloVisto = "";
let resultado1 = "";
let resultado2 = "";
let totalantes = "";
let resultadoFinal = "";
let tentar = ""

function myTeste(n){
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display + n;
}

function colocarSimbolo(sim){
    if (document.getElementById('simbolo').innerHTML != "" && sim == "-"){
        document.getElementById('display').innerHTML = sim;
        return;
    }
    document.getElementById('simbolo').innerHTML = sim;
}

function reset(){
    document.getElementById('simbolo').innerHTML = "";
    document.getElementById('display').innerHTML = "";
    resultado1 = "";
    resultado2 = "";
    totalantes = "";
}

function apagar(){
    if (document.getElementById('display').innerHTML != ""){
        let linhas = document.getElementById('display').innerHTML;
        linhasApagar = linhas.length;
        linhas = linhas.substring(0, linhasApagar - 1);
        document.getElementById('display').innerHTML = linhas;
    }
}
function calcular(simboloVisto){
    display = document.getElementById('display');
    if (simboloVisto == "-" && display.innerHTML == ""){
        return;
    }
    simboloVisto = document.getElementById('simbolo').innerHTML;
    if (resultado1 == ""){
        resultado1 = display.innerHTML;
        resultado1 = parseFloat(resultado1);
        document.getElementById('display').innerHTML = "";
    }else if (resultado1 != ""){
        resultado2 = display.innerHTML;
        resultado2 = parseInt(resultado2);
        document.getElementById('display').innerHTML = ""
        switch (simboloVisto){
            case simboloVisto = "+":
                resultado1 = resultado1 + resultado2;
                break;
            case simboloVisto = "-":
                resultado1 = resultado1 - resultado2;
                break;
            case simboloVisto = "/":
                resultado1 = resultado1 / resultado2;
                break;
            case simboloVisto = "*":
                resultado1 = resultado1 * resultado2;
                break;
        }
        resultado2 = "";
    }
}
function resultado(){
    simboloVisto = document.getElementById('simbolo').innerHTML;
    if (simboloVisto == "" && resultado1 == ""){
        return
    }
    resultado2 = display.innerHTML;
    if (resultado2 == ""){
        document.getElementById('display').innerHTML = resultado1;
        document.getElementById('simbolo').innerHTML = "";
        return;
    }
    resultado2 = parseFloat(resultado2);
    simbolo = document.getElementById('simbolo').innerHTML;
    console.log(simboloVisto);
    switch (simboloVisto){
        case simboloVisto = "+":
            resultado1 = resultado1 + resultado2;
            break;
        case simboloVisto = "-":
            resultado1 = resultado1 - resultado2;
            break;
        case simboloVisto = "*":
            resultado1 = resultado1 * resultado2;
            break;
        case simboloVisto = "/":
            resultado1 = resultado1 / resultado2;
            break; 
    }
    var teste1 = parseFloat(resultado1);
    var teste2 = parseInt(resultado1);
    if (teste1 == teste2){
        document.getElementById('display').innerHTML = resultado1;
        document.getElementById('simbolo').innerHTML = "";
        return;
    }
    var a = resultado1.toString().split('.');
    a = a[1].length;
    if (a >= 3 ){
        resultado1 = resultado1.toFixed(3);
    }
    document.getElementById('display').innerHTML = resultado1;
    document.getElementById('simbolo').innerHTML = "";
}


