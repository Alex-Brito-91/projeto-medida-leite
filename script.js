function calcularMedidas() {
    var quantidadeLeite = parseFloat(document.getElementById('quantidadeLeite').value);

    if (quantidadeLeite >= 150) {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor menor que 150 ml.';
        return;
    }

    var resultado = quantidadeLeite / 15;
    var resultadoFormatado = Math.round(resultado * 2) / 2; 
    var mlRestantes = 150 - quantidadeLeite;
    var medidasRestantes = Math.floor(mlRestantes / 15);
    var textoMedidasRestantes = `${medidasRestantes} medidas${mlRestantes % 15 >= 7.5 ? ' e meia' : ''}`;

    var resultadoTexto = `Faltam ${mlRestantes}ml (${textoMedidasRestantes}) para completar 150ml.`;
    document.getElementById('resultado').innerText = resultadoTexto;
}

function zerarInput() {
    document.getElementById('quantidadeLeite').value = '';
    document.getElementById('resultado').innerText = '';
}
