async function buscaEndereco(cep) {
    try {
        var mensagemErro = document.getElementById('erro');
        mensagemErro.innerHTML = "";
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertido = await consultaCep.json();
        if (consultaCepConvertido.erro) {
            throw ('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCepConvertido.localidade;
        logradouro.value = consultaCepConvertido.logradouro;
        estado.value = consultaCepConvertido.uf;
        bairro.value = consultaCepConvertido.bairro;
        // console.log(consultaCepConvertido);
        return consultaCepConvertido;
    } catch (erro){
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
    }
    
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));