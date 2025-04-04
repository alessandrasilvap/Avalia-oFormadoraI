<?php
//Exercício 01
function repeatName() {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = htmlspecialchars($_POST["nome"]);
        $sobrenome = htmlspecialchars($_POST["sobrenome"]);
        $repeticao = htmlspecialchars($_POST["repeticao"]);
    
        if (!empty($nome) && !empty($sobrenome) && !empty($repeticao) && $repeticao >=0) {
            for ($i = 1; $i <=$repeticao; $i++) {

                if ($i % 2 == 1) {
                    echo $i." - ".$nome."<br>";

                } else {
                    echo $i." - ".$sobrenome."<br>";
                }   
            }
        } else {
            echo "Por favor, preencha todos os campos corretamente";
        }
    }
}


//Exercício 02
function validarCampos() {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $login = ($_POST['login']);
        $senha = ($_POST['senha']);
        $matricula = 24201297;
        $senha1 = "Unisuam@2024";
        if (($login == $matricula) && ($senha == $senha1)) {
            echo "<p>Usuário autenticado com sucesso!</p>";
        } else {
            echo "[Falha na autenticação] Os dados inseridos não conferem!";
        }
      //Vê como ficaria com isso:
        // foreach ($_POST as key -> $value) {
        //     echo "$key: $value <br>";
        // }
    } 
}


//Exercício 3
function calcularDensidade() {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $massa = htmlspecialchars($_POST['massa']);
        $volume = htmlspecialchars($_POST['volume']);
        
        if (!empty($massa) && !empty($volume)) {
            $densidade = floatval($massa) / floatval($volume);
            echo 'A densidade do material é de: '.$densidade.' por g/m³ (centímetros cúbicos)';
        } else {
        echo 'Por favor, preencha os campos corretamente para obter o resultado.';
        }
    }
}




if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rota = $_POST['action'];

    switch ($rota) {
        case 'ex1':
            repeatName();
            break;
        case 'ex2':
            validarCampos();
            break;
        case 'ex3':
            calcularDensidade();
            break;
        default:
            echo 'Ação inválida.';
            break;
    }
}
?>
