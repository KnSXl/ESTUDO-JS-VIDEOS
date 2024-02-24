// CONDIÇÕES (Part. 1)

//TIPOS DE CONDIÇÕES

// EXEMPLO 1 (Simples)
/* let velocidade = 60.5

console.log(`A velocidade do seu carro é: ${velocidade}`);

if (velocidade > 60) {
    console.log(`Você ultrapassou o limite de velocidade!`);
}

console.log(`Dirija sempre usando sinto de segurança!`); */



/* // EXEMPLO 2 (Composta)
let pais = 'Brasil'
console.log(`Vivendo em ${pais}\n`);

if (pais == 'EUA') {
    console.log(`Você é estrangeiro`);
} else {
    console.log(`Você é Brasileiro`);
} */



// EXEMPLO 3

// MODELO MULTA
function calcular() {
    let txtVelocidade = document.getElementById('inputVelocidade')
    let velocidade = Number(txtVelocidade.value)

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p>Sua velocidade é <strong>${velocidade}Km/h</strong></p>`

    if (velocidade > 40) {
        resultado.innerHTML += `<strong>Você foi multado!<strong>`
    } else {
        
    }
    resultado.innerHTML += `<p>Dirija sempre com sinto de segurança!</p>`

}


// MODELO PAÍS
/* function calcular() {
    let txtLocalidade = document.getElementById('inputLocalidade')
    let pais = txtLocalidade.value

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p>Seu país é <strong>${pais}</strong></p>`

    if (pais === 'Brasil') {
        resultado.innerHTML += `<strong>olá, brasileiro!<strong>`
    } else {
        resultado.innerHTML += `<strong>Olá, estrangeiro!</strong>`
    }

}
*/



// --------------------------------------------------



