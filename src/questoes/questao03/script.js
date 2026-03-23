(function() {
    // Calculadora de IMC - Questão 03

    // Abre um prompt no navegador solicitando o peso e a altura, que serão utilizados no cálculo
    const peso = parseFloat(window.prompt("Informe seu peso em kg:"));
    const altura = parseFloat(window.prompt("Informe sua altura em metros:"));

    //// Validação de entrada: garante que peso e altura sejam números válidos e positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Valores inválidos! Por favor, informe números positivos.");
        return;
    }

    // Cálculo do IMC
    // Aqui eu calculo o IMC dividindo o peso pela altura ao quadrado
    const imc = peso / (altura * altura);
    let classificacao = "";

    // Classificação conforme tabela OMS em 2026
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    const display = document.getElementById('resultado-container');

    if (display) {
        display.innerHTML = `
            <div style="color: blue;">
                <h4>Resposta da Questão 03</h4>
                <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
                <p><strong>Classificação:</strong> ${classificacao}</p>
                <p><em>Cálculo: ${peso}kg ÷ (${altura}m × ${altura}m)</em></p>
            </div>
        `;
    }
    
})();