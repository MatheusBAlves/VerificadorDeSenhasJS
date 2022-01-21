

function verifica() {

    var senha = window.document.getElementById('senha')
    var car = window.document.getElementById('car')
    var mai = window.document.getElementById('mai')
    var min = window.document.getElementById('min')
    var num = window.document.getElementById('num')

    var resultado = senha.value.split("")
    var minuscula = 0
    var maiuscula = 0
    var numero = 0

    for (var caractere = 0; caractere < senha.value.length; caractere++) {

        var teste = resultado[caractere].charCodeAt(0)

        if (teste >= 64 && teste <= 90)
            maiuscula = 1
        else if (teste >= 97 && teste <= 122)
            minuscula = 1
        else if (teste >= 48 && teste <= 57)
            numero = 1

    }

    if (senha.value.length < 8)
        car.innerHTML = "Falta Caracteres Em Sua Senha! No Minimo 8 Caracteres"
    else
        car.innerHTML = "Caracteres Suficientes Em Sua Senha!"

    if (maiuscula == 1)
        mai.innerHTML = "Tem Letra Maiuscula Na Senha!"
    else
        mai.innerHTML = "Não Tem Letra Maiuscula Na Senha!"

    if (minuscula == 1)
        min.innerHTML = "Tem Letra Minuscula Na Senha!"
    else
        min.innerHTML = "Não Tem Letra Minuscula Na Senha!"

    if (numero == 1)
        num.innerHTML = "Tem Numero Na Senha!"
    else
        num.innerHTML = "Não Tem Numero Na Senha!"

}