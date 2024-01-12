# Tratamento de Dados

Na aula, foram apresentados conceitos essenciais em JavaScript, começando com a solicitação do nome do usuário e a saudação usando alertas. Em seguida, explorou-se a manipulação de números, destacando a especificação de tipos e a transformação de números em strings. A utilização de template strings foi introduzida para criar mensagens dinâmicas. A manipulação de strings foi brevemente abordada, seguida pela aplicação desses conceitos em um contexto HTML através do document.write. Por fim, foram demonstrados métodos para formatar números, proporcionando uma compreensão inicial das operações básicas em JavaScript.

# Perguntas: 
    1 - Como é possível guardar o valor digitado em um prompt() dentro de uma variável?

    2 - Como fazer com que um número digitado em um prompt() possa ser usado em calculos?

    3 - como transformar um texto todo em letras MAIÚSCULAS?

    4 - Como mostrar um número formatado como um valor monetário? 

# Respostas:

**1.**  `let nomeDaVariavel` = prompt("Qual o seu nome?")

**2.** let numeroUm = `Number`(prompt("Digite um número: "))

**3.** Usando `toUpperCase()`

**4.** 

Usando alguns comando, como: `.toFixed(2)` para limitar o número de casas decimais para 2;

`.replace('.', ',')` para substituir o ponto por vírgula;

`.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})` para formatar como moeda brasileira.