var numeroSecreto = parseInt(Math.random() * 11)
var tentativa = 3
function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    var resultado = document.querySelector("#resultado")
    var resultadoMaiorMenor = document.querySelector("#resultadoMaiorMenor")


    if(chute < numeroSecreto){
        console.log("Você errou o número é menor")
        resultadoMaiorMenor.innerHTML = "Você errou o número secreto é menor"
    }else if (chute > numeroSecreto) {
        console.log("Você errou o número é maior");
        resultadoMaiorMenor.innerHTML = "Você errou o número secreto é maior";
    }
    if (chute == numeroSecreto) {
        console.log("Acertou o número");
        resultado.innerHTML = "Acertou o número";
    } else if (chute > 10 || chute < 0) {
        console.log("Tente digitar um número de 0 a 10");
        resultado.innerHTML = "Tente digitar um número de 0 a 10";
    } else {
        console.log("Errou o número");
        resultado.innerHTML = verificarTentativas()
    }
}
function verificarTentativas() {
    if(tentativa ==0){
        tentativa = 4
        return "Suas tentativas foram esgotadas, vou te dar mais 3 tentativas."

    }
    else{
        tentativa --;
        return "Você tem " + tentativa + " tentativas."
    }
}