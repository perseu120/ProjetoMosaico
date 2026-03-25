function carregarLogica(nomeDaPasta) {
    const resultado = document.getElementById("resultado-container");
    resultado.innerHTML = "⏳ Carregando...";

    const antigo = document.getElementById('script-ativo');
    if (antigo) antigo.remove();

    const script = document.createElement('script');
    
    script.src = `src/questoes/${nomeDaPasta}/script.js`;
    script.id = 'script-ativo';

    script.onload = () => {
        console.log(`Script ${nomeDaPasta} carregado`);
    };

    script.onerror = () => {
        resultado.innerHTML = "❌ Erro ao carregar a questão";
    };

    document.body.appendChild(script);
}

window.carregarLogica = carregarLogica;