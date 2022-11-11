function verificar() {              
    var data = new Date()
    var ano = data.getFullYear()
    var anoinp = window.document.querySelector('input#numb')
    var idade = ano - anoinp.value 
    var resul = window.document.querySelector('p#resultado')
        if (anoinp.value == '0' || anoinp.value >= '2022' || anoinp.value < '1900') {
            window.alert('ERRO')
        } else {
            var gen = window.document.getElementsByName('op1')
            var fot = window.document.getElementById('foto')
            fot.style.display = 'block'
                if (gen[0].checked) {
                    if(idade > 0 || idade < 18) {
                        resul.innerHTML = `Detectamos homem com ${idade} anos.`
                        fot.setAttribute('src','adolescente.jpeg')
                    } else if(idade >= 18 || idade <= 70) {
                        resul.innerHTML = `Detectamos homem com ${idade} anos.`
                        fot.setAttribute('src','adulto.jpeg')

                    } else {
                        resul.innerHTML = `Detectamos homem com ${idade} anos.`
                        fot.setAttribute('src','idoso.jpg')
                    }

                    } else if (gen[1].checked) {
                        if (idade > 0 || idade < 18)
                            resul.innerHTML = `Detectamos mulher com ${idade} anos.`
                            fot.src = ''
                    } else if (idade >= 18 <= 70) {
                            resul.innerHTML = `Detectamos mulher com ${idade} anos.`
                            fot.src = ''

                    } else {
                            resul.innerHTML = `Detectamos mulher com ${idade} anos.`
                            fot.src = ''
                    }
        resul.style.textAlign = 'center'
        resul.style.fontWeight = 'bolder'
        resul.style.fontSize = '2em'


} }