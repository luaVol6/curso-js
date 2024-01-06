function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formA = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(formA.value.length == 0 || formA.value > ano){
        window.alert('[ERROR!] verifique os dados informados.')
    }else{
        var sex = document.getElementsByName('radSex') 
        var idade = ano - Number(formA.value)  //res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 2){
                //bebe
                img.setAttribute('src', 'bebeM.png')
            }else if( idade < 12){
                //criança
                img.setAttribute('src', 'criancaM.png')
            }else if(idade < 20){
                //jovem
                img.setAttribute('src', 'jovemM.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultoM.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosoM.png')
            }
        }else if(sex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 2){
                //bebe
                img.setAttribute('src', 'bebeF.png')
            }else if( idade < 12){
                //criança
                img.setAttribute('src', 'criancaF.png')
            }else if(idade < 20){
                //jovem
                img.setAttribute('src', 'jovemF.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultaF.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosaF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado um/a ${genero}, de ${idade} anos`
        res.appendChild(img)
    }
}