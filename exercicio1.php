<?php include 'cabecalho.php' ?>

    <form action="processa.php" method="post" name="form" target="resultadoFrame">
        <fieldset id="caixa">
            <input type="hidden" name="action" value="ex1">
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
            <input type="number" size="50" name="repeticao">
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
