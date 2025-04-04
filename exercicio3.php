<?php include 'cabecalho.php'?>

    <form action="processa.php" method="post" name="form">
        <fieldset id="caixa">
            <input type="hidden" name="action" value="ex3">
            <h4>Valor da Densidade:</h4>
            <strong><p>Massa:</p></strong>
            <input type="number" size="50">
            <br>
            <br>
            <strong><p>Volume:</p></strong>
            <input type="number" size="50">
            <br>
            <br>
            <br>
            <button type="submit" class="botao1">ENVIAR</button>
            <button type="button" class="botao2">VOLTAR</button>
        </fieldset>
    </form>

<?php include 'rodape.php' ?>
