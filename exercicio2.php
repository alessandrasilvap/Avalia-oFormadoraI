<?php include 'cabecalho.php'?>

    <form action="processa.php" method="post" name="form" target="resultadoFrame">
        <fieldset id="caixa">
            <input type="hidden" name="action" value="ex2"
            <h4>Formulário de Autenticação:</h4>
            <strong><p>Login:</p></strong>
            <input type="text" size="50" name="login" minlength = "8" maxlength ="14" required>
            <br>
            <br>
            <strong><p>Senha:</p></strong>
            <input type="password" size="50" name="senha" minlength = "8" maxlength ="14" required>
            <br>
            <br>
            <iframe name="resultadoFrame">
            </iframe>
            <br>
            <button type="submit" class="botao1" value="enviar">ENVIAR</button>
            <button type="button" class="botao2" value="voltar">VOLTAR</button>
        </fieldset>
    </form>

<?php include 'rodape.php' ?>
