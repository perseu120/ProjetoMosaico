(function () {
    // Solicita um número
    const numero = window.prompt("Digite um número:");
    let classificacao = "";

    // Informa que é par
    if (numero % 2 === 0) {
        classificacao = "par.";
    }
    // Informa que é ímpar
    else if (numero % 2 !== 0) {
        classificacao = "ímpar.";
    }
    // Verifica se o valor é um número válido e positivo
    if (isNaN(numero) || numero <= 0) {
        alert("Valor inválido, por favor informe um número positivo.");
        return;
    }
    const display = document.getElementById('resultado-container');

    if (display) {
        display.innerHTML = `
            <div style="color: blue;">
                <h4>Resposta da Questão 04</h4>
                <p>O número ${numero} é ${classificacao}</p>
            </div>
        `;
    }
})();