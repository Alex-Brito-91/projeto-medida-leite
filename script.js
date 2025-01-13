function calcularMedidas() {
    const leiteAtual = document.getElementById('quantidadeLeite').value; // Quantidade de leite inserida pelo usuário em ml
    const totalLeite = 150; // Total de leite necessário em ml
    const medida = 15; // Quantidade de leite por medida em ml
    const leiteFaltante = totalLeite - leiteAtual;
    let quantidadeMedidas = leiteFaltante / medida;
    let decimal = quantidadeMedidas % 1;

    if (decimal > 0.8) {
        quantidadeMedidas = Math.ceil(quantidadeMedidas);
    } else if (decimal < 0.3) {
        quantidadeMedidas = Math.floor(quantidadeMedidas);
    } else {
        quantidadeMedidas = Math.floor(quantidadeMedidas) + 0.5;
    }

    document.getElementById('resultado').innerText = `Você precisa de ${quantidadeMedidas.toFixed(1)} medidas e ${leiteFaltante}ml para completar 150ml de leite.`;
}

function zerarInput() {
    document.getElementById('quantidadeLeite').value = '';
    document.getElementById('resultado').innerText = '';
}