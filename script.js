function verifica() {

    let senha = window.document.getElementById('senha')
    let car = window.document.getElementById('car')
    let mai = window.document.getElementById('mai')
    let min = window.document.getElementById('min')
    let num = window.document.getElementById('num')
    let acent = document.getElementById('acent')
    let resul = document.getElementById('res')

    let resultado = senha.value.split("")
    let minuscula = 0
    let maiuscula = 0
    let numero = 0
    let acento = 0

    for (let caractere = 0; caractere < senha.value.length; caractere++) {

        let teste = resultado[caractere].charCodeAt(0)

        if (teste >= 64 && teste <= 90)
            maiuscula = 1
        else if (teste >= 97 && teste <= 122)
            minuscula = 1
        else if (teste >= 48 && teste <= 57)
            numero = 1
        else if (teste >= 32 && teste <= 47 || teste >= 58 && teste <= 64 || teste >= 123 && teste <= 255)
            acento = 1

    }

    if (senha.value.length < 8)
        car.innerHTML = "Falta Caracteres Em Sua Senha! No Minimo 8 Caracteres"
    else if (senha.value.length > 32)
        car.innerHTML = "Muitos Caracteres Em Sua Senha! No Máximo 32 Caracteres"
    else
        car.innerHTML = "Caracteres Suficientes Em Sua Senha!"


    if (maiuscula == 1)
        mai.innerHTML = "Tem Letra Maiuscula Na Senha!"
    else
        mai.innerHTML = "Não Tem Letra Maiuscula Na Senha! (Mínimo 1)"

    if (minuscula == 1)
        min.innerHTML = "Tem Letra Minuscula Na Senha!"
    else
        min.innerHTML = "Não Tem Letra Minuscula Na Senha! (Mínimo 1)"

    if (numero == 1)
        num.innerHTML = "Tem Numero Na Senha!"
    else
        num.innerHTML = "Não Tem Numero Na Senha! (Mínimo 1)"

    if (acento == 1)
        acent.innerHTML = "<strong>Não pode conter acento,caractere especial nem espaço em sua senha</strong>"
    else
        acent.innerHTML = ''

    if (senha.value.length >= 8 && senha.value.length <=32 && maiuscula == 1 && minuscula == 1 && numero == 1 && acento == 0)
        resul.innerHTML = "<strong>Sua senha está OK!</strong>"
    else
        resul.innerHTML = "<strong>Melhore sua senha!</strong>"


}