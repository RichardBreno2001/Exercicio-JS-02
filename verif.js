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
            var fot = window.document.querySelector('img#foto')
            fot.style.display = 'block'
                if (gen[0].checked) {
                    if(idade > 0 && idade < 18) {
                        resul.innerHTML = `Detectamos homem com ${idade} anos.`
                        fot.src = 'imagens/adolescente.jpeg'
                    } else if(idade >= 18 && idade <= 70) {
                        resul.innerHTML = `Detectamos homem com ${idade} anos.`
                        fot.src = 'imagens/adulto.jpeg'

                    } else {
                        resul.innerHTML = `Detectamos homem com ${idade} anos.`
                        fot.src = 'imagens/idoso.jpg'
                    }

                    } else if (gen[1].checked) {
                        if (idade > 0 && idade < 18){
                            resul.innerHTML = `Detectamos mulher com ${idade} anos.`
                            fot.src = 'imagens/mulheradolescente.jpg'
                    } else if (idade >= 18 && idade <= 70) {
                            resul.innerHTML = `Detectamos mulher com ${idade} anos.`
                            fot.src = 'imagens/mulherjovem.jpg'

                    } else {
                            resul.innerHTML = `Detectamos mulher com ${idade} anos.`
                            fot.src = 'imagens/mulheridosa.jpeg'
                    } }
        resul.style.textAlign = 'center'
        resul.style.fontWeight = 'bolder'
        resul.style.fontSize = '2em'


} }