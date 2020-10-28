var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista Aparecida";

var paciente = document.querySelectorAll(".paciente");
var peso, altura, imc;

for(var i=0;i<paciente.length;i++){

    peso = paciente[i].querySelector(".info-peso");
    altura = paciente[i].querySelector(".info-altura");
    imc = paciente[i].querySelector(".info-imc");

    peso = peso.textContent;
    altura = altura.textContent;

    if(validaPeso(peso).length > 0){
        imc.textContent = validaPeso(peso);
        paciente[i].classList.add("paciente-invalido");
    }else if(validaAltura(altura).length > 0){
        imc.textContent = validaAltura(altura);
        paciente[i].classList.add("paciente-invalido");
    }else{
        imc.textContent = calculaImc(peso, altura);
    }
}


function calculaImc(peso, altura){
    return  (peso / (altura*altura)).toFixed(2);
}


function validaPeso(peso){
    if(peso>0 && peso<150){
        return "";
    }else{
        return "Peso Invalido";
    }
}


function validaAltura(altura){
    if(altura>0 && altura<2.5){
        return "";
    }else{
        return "Altura Invalida";
    }
}
