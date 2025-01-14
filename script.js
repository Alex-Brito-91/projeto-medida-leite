function calcularMedidas() {
    var quantidadeLeite = document.getElementById('quantidadeLeite').value;

    if (quantidadeLeite >= 150) {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor menor que 150 ml.';
        return;
    }

    var resultado = quantidadeLeite / 15; // 1 medida para cada 15ml
    var resultadoFormatado;
    var meiaMedida = false;

    // Arredondar conforme solicitado
    if (resultado % 1 > 0.5) {
        resultadoFormatado = Math.ceil(resultado);
    } else if (resultado % 1 < 0.5) {
        resultadoFormatado = Math.floor(resultado);
    } else {
        resultadoFormatado = Math.floor(resultado) + 0.5;
        meiaMedida = true;
    }

    var mlRestantes = 150 - quantidadeLeite; // Calcular os ml restantes para completar 150ml
    var medidasRestantes = Math.floor(mlRestantes / 15); // Calcular as medidas restantes inteiras
    var textoMedidasRestantes = medidasRestantes + ' medidas';

    if (mlRestantes % 15 > 0) {
        if (mlRestantes % 15 >= 7.5) {
            textoMedidasRestantes = medidasRestantes + ' medidas e meia';
        } else {
            textoMedidasRestantes = medidasRestantes + ' medidas e meia';
        }
    }

    var resultadoTexto = 'Faltam ' + mlRestantes + 'ml (' + textoMedidasRestantes + ') para completar 150ml.';

    document.getElementById('resultado').innerText = resultadoTexto;
}

function zerarInput() {
    document.getElementById('quantidadeLeite').value = '';
    document.getElementById('resultado').innerText = '';
}