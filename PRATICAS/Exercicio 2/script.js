/*
 * Função verificar()
 * Esta função é chamada quando o usuário clica em um botão ou realiza alguma ação
 * Ela verifica o ano de nascimento inserido pelo usuário e o sexo selecionado
 * Com base nessas informações, determina a idade, gênero e exibe uma imagem correspondente.
 */
function verificar() {
    // Obtém a data atual
    let data = new Date();
    let ano = data.getFullYear();

    // Obtém o elemento de entrada do ano de nascimento e o elemento onde o resultado será exibido
    let anoNascimento = document.getElementById('txtano');
    let resultado = document.getElementById('resultado');

    // Verifica se o campo de ano de nascimento está vazio ou contém um valor inválido
    if (anoNascimento.value.length == 0 || anoNascimento.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        // Obtém a lista de elementos de entrada de sexo
        let fsex = document.getElementsByName('radsexo');
        
        // Calcula a idade com base no ano de nascimento
        let idade = ano - Number(anoNascimento.value);
        
        // Variáveis para armazenar o gênero e criar um elemento de imagem
        let genero = '';
        let imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');

        // Verifica se o sexo masculino está marcado
        if (fsex[0].checked) {
            genero = 'Homem';
            
            // Com base na idade, atribui uma imagem correspondente
            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', './images/crianca-homem.jpg');
            } else if (idade < 21){
                imagem.setAttribute('src', './images/jovem-homem.jpg');
            } else if (idade < 50) {
                imagem.setAttribute('src', './images/adulto-homem.jpg');
            } else {
                imagem.setAttribute('src', './images/idoso-homem.jpg');
            }
        }

        // Verifica se o sexo feminino está marcado
        else if (fsex[1].checked) {
            genero = "Mulher";

            // Com base na idade, atribui uma imagem correspondente
            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', './images/crianca-mulher.jpg');
            } else if (idade < 21){
                imagem.setAttribute('src', './images/jovem-mulher.jpg');
            } else if (idade < 50) {
                imagem.setAttribute('src', './images/adulto-mulher.jpg');
            } else {
                imagem.setAttribute('src', './images/idosa-mulher.jpg');
            }
        }

        // Configura o estilo do resultado e exibe as informações e imagem
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.appendChild(imagem);
    }
}
