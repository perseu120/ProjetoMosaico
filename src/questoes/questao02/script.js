(function() {
    // Informar X números e retornar a média deles
    const quantidadeNumeros = window.prompt("Quantos números deseja informar para calcular a média?");

    // Verifica se o usuário cancelou a operação
    if (quantidadeNumeros === null) {
        alert("Operação cancelada.");
        return;
    }

    // Verifica se o valor é um número válido e positivo
    if (isNaN(quantidadeNumeros) || quantidadeNumeros <= 0) {
        alert("Valor inválido, por favor informe um número positivo.");
        return;
    }

    const numeros = [];

    // Coleta os números do usuário
    for (let i = 0; i < quantidadeNumeros; i++) {
        const numero = parseFloat(window.prompt(`Informe o ${i + 1}° número:`));
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Valor inválido, por favor informe um número.");
            return;
        }
    }

    // Calcula a média dos números informados
    const soma = numeros.reduce((acc, val) => acc + val, 0);
    const resultadoLogica = soma / numeros.length;

    const display = document.getElementById('resultado-container');

    if (display) {
        display.innerHTML = `
            <div style="color: blue;">
                <h4>Resposta da Questão 02</h4>
                <p>A lógica foi: (${numeros.join(' + ')}) / ${numeros.length} = <strong>${resultadoLogica}</strong></p>
            </div>
        `;
    }
})();