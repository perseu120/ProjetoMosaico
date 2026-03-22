(function() {
    const numero = 10;
    const resultadoLogica = numero * 2; // Exemplo de lógica: Dobro do número

    const display = document.getElementById('resultado-container');

    if (display) {
        display.innerHTML = `
            <div style="color: blue;">
                <h4>Resposta da Questão 01</h4>
                <p>A lógica foi: ${numero} x 2 = <strong>${resultadoLogica}</strong></p>
            </div>
        `;
    }
})();