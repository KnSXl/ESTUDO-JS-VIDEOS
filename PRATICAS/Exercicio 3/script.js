// Função para realizar uma contagem entre os valores fornecidos
// Atualiza o elemento HTML com o resultado da contagem
function contar() {
    // Obtém os elementos HTML necessários
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let resultado = document.getElementById('resultado');

    // Verifica se algum dos campos está vazio
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // Se algum campo estiver vazio, exibe um alerta e encerra a função
        alert('Impossível contar!');
        alert('[ERRO] Faltam dados!');
    } else {
        // Se todos os campos estiverem preenchidos, prossegue com a contagem
        resultado.innerHTML = 'Contando: ';
        // Converte os valores dos campos para números
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        // Verifica se o passo é menor ou igual a zero
        if (p <= 0){
            // Se o passo for inválido, exibe um alerta e ajusta o passo para 1
            alert("Passo inválido! Considerando PASSO 1");
            p = 1;
        }

        // Verifica se a contagem é crescente ou regressiva
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                // Atualiza o resultado com cada valor da contagem
                resultado.innerHTML += `${c} 👉 `;
            }     
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                // Atualiza o resultado com cada valor da contagem
                resultado.innerHTML += `${c} 👉 `;
            }
        }

        // Adiciona um marcador final à contagem
        resultado.innerHTML += ` 🏳️`;
    }
}
