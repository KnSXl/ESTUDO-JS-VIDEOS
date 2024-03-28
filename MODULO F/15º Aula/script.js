
// Declaração do array "numero"
let numero = [5, 2, 3, 4, 5];



// Adicionando o valor 2 ao final do array
numero.push(2);



// Ordenando os elementos do array em ordem crescente
numero.sort();



// Mostrando o conteúdo do array
console.log("Array ordenado:", numero);



// Mostrando o número de elementos no array
console.log(`O vetor tem ${numero.length} posições.`);



// Mostrando o primeiro valor do array
console.log(`O primeiro valor do vetor é ${numero[0]}`);



// Percorrendo o array usando um loop "for"
console.log("\nUsando loop 'for' para percorrer o array:");
for (let indice = 0; indice < numero.length; indice++) {
    console.log(`A posição ${indice} tem o valor ${numero[indice]}`);
}



// Percorrendo o array usando um loop "for..in"
console.log("\nUsando loop 'for..in' para percorrer o array:");
for (let indice in numero) {
    console.log(`A posição ${indice} tem o valor ${numero[indice]}`);
}



// Buscando o valor 3 no array
let posicaoDoTres = numero.indexOf(3);
if (posicaoDoTres === -1) {
    console.log("\nO valor 3 não foi encontrado no array.");
} else {
    console.log(`\nO valor 3 foi encontrado na posição ${posicaoDoTres} do array.`);
}



// Pratica

// Pratica

// Definindo os objetos de usuário
let usuario1 = {
    id: 1,
    nome: "Kauã",
    idade: 17,
    país: "Brasil"
};

let usuario2 = {
    id: 2,
    nome: "Maria",
    idade: 25,
    país: "Portugal"
};

let usuario3 = {
    id: 3,
    nome: "John",
    idade: 30,
    país: "Estados Unidos"
};

// Criando um array para armazenar os usuários
let dadosUsuarios = [usuario1, usuario2, usuario3];

// Exibindo os usuários armazenados no array
console.log("Usuários:", dadosUsuarios);
let idProcurado = 2; // Por exemplo, você está procurando pelo usuário com o ID 2

acharID = dadosUsuarios.findIndex(item => item.id === idProcurado)
if (acharID === -1) {
    console.log(`o usuário com ${idProcurado} não foi localizado`);
} else {
    console.log(`o usuário com ${idProcurado} foi localizado`);
}