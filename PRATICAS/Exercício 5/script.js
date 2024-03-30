// Selecionando os elementos HTML
let numero = document.querySelector('input#fnum') // input para o número
let lista = document.querySelector('select#flista') // select para a lista de valores
let resultado = document.querySelector("div#resultado") // div para exibir os resultados
let valores = [] // array para armazenar os valores

// Função para verificar se o valor é um número válido entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Função para verificar se o número já está na lista de valores
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Função para adicionar um número à lista
function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    numero.value = '' // Limpar o campo de entrada
    numero.focus() // Colocar o foco novamente no campo de entrada
}

// Função para finalizar e exibir os resultados
function finalizar() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar")
    } else {
        let total = valores.length // Total de números na lista
        let maior = valores[0] // Maior valor
        let menor = valores[0] // Menor valor
        let soma = 0 // Soma de todos os valores
        let media = 0 // Média dos valores

        // Loop para calcular a soma, maior e menor valor
        for(let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior) {
                maior = valores[pos]
            } 

            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        // Calcular a média
        media = soma / total

        // Exibir os resultados na div resultado
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}