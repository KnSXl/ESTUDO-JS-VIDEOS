// OBJETOS

let amigo = {
    nome: 'Kauã',
    peso: 64,
    sexo: 'M',
    engordar(p){
        console.log('Engordou');
        this.peso += p
    }
}

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);