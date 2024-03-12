function resultado() {
    let altura = Number(document.getElementById('input-altura').value)
    let peso = Number(document.getElementById('input-peso').value)
    let IMC = peso / (altura**2)

    let resultado = document.getElementById('resultado')

    if (isNaN(IMC)) {
        alert('Preencha os campos!');

    } else {

        if (IMC < 16 ) {
            resultado.innerHTML = `Seu IMC é: <b>${IMC.toFixed(2)}</b><br>
            <br>
            Você está com <b>magreza grave</b>.`

        } else if (IMC < 17) {
            resultado.innerHTML = `Seu IMC é: <b>${IMC.toFixed(2)}</b><br>
            <br>
            Você está com <b>magreza moderada</b>.`

        } else if (IMC <= 18.5) {
            resultado.innerHTML = `Seu IMC é: <b>${IMC.toFixed(2)}</b><br>
            <br>
            Você está com <b>magreza leve</b>.`

        } else if (IMC < 25) {
            resultado.innerHTML = `Seu IMC é: <b>${IMC.toFixed(2)}</b><br>
            <br>
            Você está com <b>peso ideal</b>.`

        } else if (IMC < 30) {
            resultado.innerHTML = `Seu IMC é: <b>${IMC.toFixed(2)}</b><br>
            <br>
            Você está com <b>sobrepeso</b>.`

        } else if (IMC < 35) {
            resultado.innerHTML = `Seu IMC é: <b>${IMC.toFixed(2)}</b><br>
            <br>
            Você está com <b>obesidade grau I</b>.`

        } else if (IMC < 40) {
            resultado.innerHTML = `Seu IMC é: <b>${IMC.toFixed(2)}</b><br>
            <br>
            Você está com <b>obesidade grau II ou severa</b>.`

        } else {
            resultado.innerHTML = `Seu IMC é: <b>${IMC.toFixed(2)}</b><br>
            <br>
            Você está com <b>obesidade grau III ou mórbida</b>.`

        }

    }    


}

