// Função que valida todos os campos de cadastro.
function validarFormulario(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var endereco = document.getElementById('endereco').value;
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var confirmasenha = document.getElementById('confirmasenha').value;

    // Se o usuário esquecer um campo OU outro, aparecerá mensagem de erro
    if (nome === '' || idade === '' || endereco === '' || login === '' || senha === '' || confirmasenha === '') {
        window.alert('[ERRO] Algum campo não preenchido!');
        return false;
    }

    // Se o campo Senha e o Confirme Senha não forem iguais aparecerá mensagem de erro
    if (senha !== confirmasenha) {
        alert('[ERRO] Senhas não coincidem');
        return false;
    }

    // Validando a quantidade de caracteres no campo Nome Completo
    if (nome.length > 10) {
        alert('Campo Nome deve conter mais que 10 letras.');
        return false;
    }

    // Validando a quantidade de caracteres no campo Login
    if (login.length !== 5) {
        alert('Login deve conter 5 caracteres.');
        return false;
    }

    // Validando a quantidade de caracteres no campo Senha
    if (senha.length !== 8 || confirmasenha.length !== 8) {
        alert('Senha deve conter 8 caracteres.');
        return false;
    }

    // Se todas as validações passarem
    alert('Dados cadastrados!');
    window.location.href = "https://www.unisuam.edu.br/";
    return true; // Opcional, já que você está redirecionando
}
