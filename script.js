function calcularMedidas() {
    var quantidadeLeite = parseFloat(document.getElementById('quantidadeLeite').value);

    if (quantidadeLeite >= 150) {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor menor que 150 ml.';
        return;
    }

    var mlRestantes = 150 - quantidadeLeite;
    var medidasRestantes = mlRestantes / 23.07;
    var resMedidasRestantes = (medidasRestantes % 1).toFixed(2);
    var textoMedidasRestantes = '';
    if (mlRestantes >= 20 && mlRestantes <= 25) {
        textoMedidasRestantes = '1 medida';
    } else {
        textoMedidasRestantes = `${Math.floor(medidasRestantes)} medidas${resMedidasRestantes >= 0.44 ? ' e meia' : ''}`;
    }

    var resultadoTexto = `Faltam ${mlRestantes}ml (${textoMedidasRestantes}) para completar 150ml.`;
    document.getElementById('resultado').innerText = resultadoTexto;
}

function zerarInput() {
    document.getElementById('quantidadeLeite').value = '';
    document.getElementById('resultado').innerText = '';
}
