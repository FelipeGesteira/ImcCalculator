
var titulo = document.querySelector(".titulo");
titulo.textContent = ("CALCULO IMC FEITO COM - HTML / CSS & JAVASCRIPT")
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        tdPeso.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        alturaValida = false;
        tdAltura.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {
        var imc = calculoDoImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculoDoImc(peso, altura) {
    var imc = 0
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000) {
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura < 3.00) {
        return true;
    }else {
        return false;
    }
}
