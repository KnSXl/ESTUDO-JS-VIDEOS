// CONDIÇÕES (Part. 2)

//TIPOS DE CONDIÇÕES ANINHADAS

// (aninhadas)
/* if (condition1) {
    
} else {
    if (condition2) {
        
    } else {
        
    }
} */

// EXEMPLO 1

/* let idade = 45
console.log(`Você tem ${idade} anos.`);
if (idade < 16) {
    console.log(`não vota`);

} else if (idade < 18 || idade > 67) {
    console.log(`Voto opcional`);

} else {
    console.log(`Voto obrigatório`);

} */

// EXEMPLO 2

/* let agora = new Date()
let horario = agora.getHours()
console.log(`Agora são exatamente ${horario} horas.`);

if (horario < 12) {
    console.log(`Bom dia!`);
} else if (horario <= 18){
    console.log(`Boa tarde!`);
} else {
    console.log(`Boa noite!`);
} */



// --------------------------------------------------



// CONFIÇÃO MÚLTIPLA

/*  switch (key) {
    case valor1:
    // ... 
    break;

    case valor2:
    // ...
    break;

    case valor3:
    // ...
    break;
 
    default:

    break;
} */


// EXEMPLO 3

let agora = new Date()
let diaSemanas = agora.getDay()

/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

console.log(`Representação do JS do dias da semana: ${diaSemanas}`);

switch (diaSemanas) {
    case 0:
        console.log('Que é igual a Domingo');
    break;
    case 1:
        console.log('Que é igual a Segunda');
    break;
    case 2:
        console.log('Que é igual a Terça');
    break;
    case 3:
        console.log('Que é igual a Quarta');
    break;
    case 4:
        console.log('Que é igual a Quinta');
    break;
    case 5:
        console.log('Que é igual a Sexta');
    break;
    case 6:
        console.log('Que é igual a Sábado');
    break;

    default:
        console.log(`[ERRO] Dia invalido`);
    break;
}
