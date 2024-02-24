function carregar() {
    let mensagem = document.getElementById('mensagem') // Faz uma requisição do html por id
    let imagem = document.getElementById('imagem') // Faz uma requisição do html por id


    let data = new Date // Requisição de data
    let hora = data.getHours() // Filtra Horario da maquina

    mensagem.innerHTML = `Agora são ${hora} horas.` // Mostra o horario que foi achado

    // Escolhe a imagem e a cor de fundo com base na hora do dia
    if (hora < 12) {
        // Se é de manhã (antes das 12:00), mostra imagem da manhã e fundo azul claro
        imagem.src = "./images/manha.jpg";
        document.body.style.background = "skyblue";
    } else if (hora < 18) {
        // Se é de tarde (entre 12:00 e 18:00), mostra imagem da tarde e fundo laranja
        imagem.src = "./images/tarde.jpg";
        document.body.style.background = "orange";
    } else {
        // Se é de noite (após as 18:00), mostra imagem da noite e fundo cinza
        imagem.src = "./images/noite.jpg";
        document.body.style.background = "gray";
    }

}

document.addEventListener('DOMContentLoaded', carregar);