/* 1. Desenvolver uma Calculadora Simples:
Crie um programa simples em sua linguagem de programação preferida que funcione como uma calculadora. Permita que o usuário insira uma expressão matemática utilizando operadores aritméticos (+, -, *, /) e realize o cálculo correspondente. */

// let expressao = prompt("Digite uma expressão matemática(+, -, *, /): ");

// let resultado = eval(expressao);
// alert(`Resultado: ${resultado}`);




/* 2. Comparar Resultados com e sem Precedência:
Escreva um código que demonstre a diferença no resultado ao usar ou não usar os parênteses para modificar a precedência dos operadores. Mostre como a ordem de execução dos operadores influencia o resultado final. */

/* let primeiraConta = 5 + 2 * 3 - 12
alert(`Primeira conta sem usar precedência (5 + 2 * 3 - 12):
Resultado: ${primeiraConta}`)

let segundaConta = (5 + 2) * 3 - 12
alert(`Segunda conta usando precedência ((5 + 2) * 3 - 12):
Resultado: ${segundaConta}`) */




/* 3. Incremento em Estruturas de Loop:
Implemente um loop (por exemplo, um loop for ou while) que utilize auto-atribuições para incrementar uma variável em cada iteração. Experimente diferentes modos de incremento (++, +=) e observe como eles afetam o valor final da variável.*/

// let num1 = Number(prompt("Digite um valor: "))
// let incremento = Number(prompt("Digite o valor do incremento"))

/* for (num1; num1 <= incremento; num1++) {
    alert(`Resultado: ${num1}`)
    
} */

/* for (num1; num1 <= incremento; num1--) {
    alert(`Resultado: ${num1}`)
    
} */

/* num1 += 3
for (num1; num1 <= incremento; num1++) {
    alert(`Resultado: ${num1}`)
    
} */

/* num1 += 3
for (num1; num1 <= incremento; num1--) {
    alert(`Resultado: ${num1}`)
    
} */




/* 4. Construir uma Progressão Aritmética:
Crie um programa que gere os primeiros n termos de uma progressão aritmética. Utilize auto-atribuições e operadores aritméticos para calcular os termos subsequentes com base no primeiro termo, na razão e no número de termos. */

// let a = Number(prompt("Digite o primeiro termo: ")) // PRIMEIRO TERMO
// let n = Number(prompt("Digite a Posição do termo geral")) // POSIÇÃO GERAL
// let d = Number(prompt("Digite a Diferença comum")) // DIFERENÇA COMUM
// let an = a + (n - 1) * d // TERMO GERAL

// alert(`Resultado da prograssão: ${an}`)




/* 5. Desafio de Problema Matemático:
Elabore um problema matemático desafiador que envolva operadores aritméticos, operadores de precedência e auto-atribuições. Peça ao usuário para resolver o problema usando um programa que você desenvolverá, exibindo o resultado final. */


alert(`Considere a seguinte expressão matemática

a = (b + c) × d − e ÷ f + g²

Onde "a", "b", "c", "d", "e", "f" e "g" são variáveis inteiras não-negativas. Sua tarefa é encontrar valores para "b", "c", "d", "e", "f" e "g" de forma que a seja um número primo.

Além disso, você deve garantir que as seguintes condições sejam atendidas:

1. "b" deve ser um número par.
2. "c" deve ser ímpar.
3. "d" deve ser um múltiplo de 3.
4. "e" deve ser um número primo.
5. "f" deve ser um número ímpar.
6. "g" deve ser um quadrado perfeito.

Determine os valores específicos de "b", "c", "d", "e", "f" e "g" que satisfazem todas as condições acima e fazem com que a seja um número primo. Se não for possível encontrar tais valores, explique por que não é possível.

Este problema envolve operadores aritméticos, operadores de precedência e auto-atribuições, pois você precisará manipular as variáveis de acordo com as condições fornecidas para obter um valor primo para "a". Boa sorte!`)





