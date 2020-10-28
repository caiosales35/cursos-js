var botao =  document.querySelector("#buscar-pacientes")

botao.addEventListener("click", function(){
    var erro = document.querySelector("#erro-ajax");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            erro.classList.add("invisivel");
            pacientes.forEach(function(paciente){
                adicionaPacienteTabela(paciente);
            });
        }else{
            erro.classList.remove("invisivel");
        }
        console.log(xhr.status);
    });
    xhr.send();

});
