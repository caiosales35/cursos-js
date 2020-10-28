var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var tabela = document.querySelector("#tabela-pacientes");
    var paciente = obtemPacienteForm(form);

    if(validaPaciente(paciente).length > 0)
        exibeErros(validaPaciente(paciente));
    else{
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.innerHTML = "";
        tabela.appendChild(montaTr(paciente));
        form.reset();
    }

});


function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(montaTr(paciente));
}


function obtemPacienteForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}


function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}


function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}


function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0)
        erros.push("O nome não pode ser vazio!");
    if(paciente.gordura.length == 0)
        erros.push("O campo gordura não pode ser vazio!");
    if(validaPeso(paciente.peso).length > 0)
        erros.push(validaPeso(paciente.peso));
    if(validaAltura(paciente.altura).length > 0)
        erros.push(validaAltura(paciente.altura));
    return erros;
}


function exibeErros(erros){
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        mensagemErro.appendChild(li);
    });
}
