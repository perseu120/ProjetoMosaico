function carregarLogica(nomeDaPasta) {
    // Remove scripts antigos para não acumular no HTML
    const antigo = document.getElementById('script-ativo');
    if (antigo) antigo.remove();

    // Cria o novo script apontando para a pasta da questão
    const script = document.createElement('script');
    
    // O caminho deve ser relativo ao index.html
    script.src = `src/questoes/${nomeDaPasta}/script.js`; 
    script.id = 'script-ativo';

    document.body.appendChild(script);
}

// Deixa a função disponível para os botões do HTML
window.carregarLogica = carregarLogica;