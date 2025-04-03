<?php include 'cabecalho.php' ?>

    <form action="processa.php" method="post">
        <fieldset id="caixa">
            <h4>Formulário de Repetição:</h4>
            <strong><p>Nome:</p></strong>
            <input type="text" size="50" name="nome">
            <br>
            <br>
            <strong><p>Sobrenome:</p></strong>
            <input type="text" size="50" name="sobrenome">
            <br>
            <br>
            <strong><p>Repetições:</p></strong>
            <input type="text" size="50" name="repeticao">
            <br>
            <br>
            <br>
            <button type="submit" class="botao1">ENVIAR</button>
            <button type="button" class="botao2">VOLTAR</button>
        </fieldset>
    </form>

<?php include 'rodape.php' ?>
