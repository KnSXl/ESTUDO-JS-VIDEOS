/**
 * Função que gera e exibe a tabuada de um número especificado pelo usuário.
 */
function tabuada() {
    // Obtém a referência ao elemento de entrada de número
    let numero = document.getElementById('numero');

    // Obtém a referência ao elemento select onde a tabuada será exibida
    let selecionarTabuada = document.getElementById('selecionarTabuada');

    // Verifica se o campo de entrada está vazio
    if (numero.value.length == 0) {
        // Se estiver vazio, exibe um alerta solicitando ao usuário que digite um número
        alert('Por favor, digite um número!');
    } else {
        // Caso contrário, o campo de entrada tem um valor
        // Converte o valor do campo de entrada para um número
        let n = Number(numero.value);

        // Inicializa um contador para a multiplicação
        let c = 1;

        // Limpa o conteúdo do elemento select onde a tabuada será exibida
        selecionarTabuada.innerHTML = '';

        // Loop para gerar a tabuada até 10
        while (c <= 10) {
            // Cria um novo elemento de opção
            let item = document.createElement('option');

            // Define o texto da opção como a expressão da tabuada atual
            item.text = `${n} x ${c} = ${n * c}`;

            // Define o valor da opção
            item.value = `tab${c}`;

            // Adiciona a opção ao elemento select
            selecionarTabuada.appendChild(item);

            // Incrementa o contador
            c++;
        }
    }
}
