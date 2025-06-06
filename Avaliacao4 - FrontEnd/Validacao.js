//Função que valida todos os campos de cadastro da primeira tela.
function validarFormulario(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;
    var select = document.getElementById('select').value;
    var nomeMaterno = document.getElementById('nomeMaterno').value;
    var cpf = document.getElementById('cpf').value;
    
    //Se o usuário esquecer um campo OU outro, aparecerá mensagem de erro
    if (nome === '' || data === '' || select === '' || nomeMaterno === '' || cpf ==='') {
        window.alert('[ERRO] Algum campo não preenchido!');
        return false;
    }

    //Validando a quantidade de caracteres no campo Nome Completo
    if (nome.length < 10) {
        alert('[ERRO] Campo Nome Completo deve conter mais que 10 letras.');
        return false;
    }

    //Validando a quantidade de caracteres no campo Nome Materno
    if (nomeMaterno.length < 10) {
        alert('[ERRO] Campo Nome Materno deve conter mais que 10 letras.');
        return false;
    }

    //Validando caso campo Nome Completo e Nome Materno sejam iguais
    if (nome == nomeMaterno) {
        alert('[ERRO] Campos Nome Completo e Nome Materno não devem ser iguais.');
        return false;
    }

    
    //Se todas as validações passarem
    alert('Primeiros dados cadastrados!');
    window.location.href='../AvaliacaoFor4/AvaliaçãoFormadoraIV2.html'
}



//Máscara do CPF
function mascaraCPF(v) {
    //Remove caracteres não numéricos
    v.value = v.value.replace(/\D/g, "");

    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2"); //Primeiro ponto
    v.value = v.value.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3"); //Segundo ponto
    v.value = v.value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, "$1.$2.$3-$4"); //Hífen
}





//Função que valida todos os campos de cadastro da segunda tela.
function validarFormu() {
    var celular = document.getElementById('celular').value;
    var telFixo = document.getElementById('telFixo').value;
    var cep = document.getElementById('cep').value;
    var endereco = document.getElementById('endereco').value;
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var confirmasenha = document.getElementById('confirmasenha').value;

    //Se o usuário esquecer um campo OU outro, aparecerá mensagem de erro
    if (celular ==='' || telFixo ==='' || cep === '' || endereco === '' || login === '' || senha === '' || confirmasenha === '') {
        window.alert('[ERRO] Algum campo não preenchido!');
        return false;
    }

    //Valida o campo Login
    if (!validarLogin()) {
        return false; //Se a validação do login falhar, impede o envio do formulário
    }

    if (senha < 7 || confirmasenha < 7) {
        alert('[ERRO] Senha deve ter 7 caracteres.')
    }

    //Se o campo Senha e o Confirme Senha não forem iguais aparecerá mensagem de erro
    if (senha !== confirmasenha) {
        alert('[ERRO] Senhas não coincidem.');
        return false;
    }

    //Se todas as validações passarem
    alert('Dados cadastrados!');
    return true; //Opcional, já que você está redirecionando
}



//Máscara do Celular
function mascaraCel(input) {
    let valor = input.value.replace(/\D/g, ""); //Remove todos os caracteres não numéricos
    
    //Adiciona o prefixo "+55" automaticamente
    if (!valor.startsWith("55")) {
        valor = "55" + valor;
    }
    
    //Formata para "+55(XX)XXXXX-XXXX"
    valor = valor.replace(/^(\d{2})(\d)/g, "+$1($2");
    valor = valor.replace(/^(\+\d{2}\(\d{2})(\d)/, "$1)$2");
    valor = valor.replace(/(\d{5})(\d{1,4})/, "$1-$2");
    
    //Limita o número máximo de caracteres
    input.value = valor.slice(0, 17);
}



function mascaraTelFixo(input) {
    let valor = input.value.replace(/\D/g, "");

    //Verifica se os primeiros dígitos do número fixo começam com 2, 3, 4 ou 5
    if (valor.length > 0) {
        let primeiroNumero = valor[0];
        if (!['2', '3', '4', '5'].includes(primeiroNumero)) {
            alert('[ERRO] O primeiro número do telefone fixo deve ser 2, 3, 4 ou 5.')
            input.value = ''; //Limpa o valor se a validação falhar
            return;
        }
    }
    //Adiciona a formatação do telefone fixo 0000-0000
    if (valor.length > 4) {
        valor = valor.slice(0, 4) + '-' + valor.slice(4, 8);
    }

    //Limpa o número de caracteres a 8
    input.value = valor.slice(0, 8);
}



//Formato XXXXX-XXX do CEP
function formatarCEP(input) {
    let cep = input.value.replace(/\D/g, ''); //Remove caracteres não numéricos

    if (cep.length > 8) { //Verifica se o CEP tem 8 dígitos
        cep = cep.slice(0, 8);
    }
    if (cep.length > 5) { //Adiciona o hífen
        cep = cep.slice(0, 5) + '-' + cep.slice(5); //'.slice' é usado para extrair uma parte de uma string ou de um array e retorná-la como uma nova string
    }
    input.value = cep;
}


document.getElementById('buscar').addEventListener('click', function() {

    const cep = document.getElementById('cep').value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
            alert('CEP não encontrado.');
            return;
        }
        document.querySelector('input#endereco').value = data.logradouro;
    })

    .catch(error => {
        alert('Erro ao buscar o CEP.');
        console.error('Erro:', error);
    });
});



document.getElementById('buscar').addEventListener('click', function() {
document.getElementById('endereco').textContent = '';
});



function validarLogin() {
    var login = document.getElementById('login').value;

    //Verifica se o login tem exatamente 5 caracteres e se são todas letras maiúsculas
    var regex = /^[A-Z]{5}$/;

    if (!regex.test(login)) {
        alert('Campo Login deve conter exatamente 5 caracteres alfabéticos, todos em letras maiúsculas.');
        return false;
    }
    return true;
}