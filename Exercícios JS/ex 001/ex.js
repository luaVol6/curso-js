function carregar(){
    var msg =window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if(hora >= 4 && hora <12){
        //bomdia
        img.src = "manha.png"
        document.body.style.background ='rgb(249, 232, 155)'
    }else if(hora >= 12 && hora < 18){
        //boatarde
        img.src = "tarde.png"
        document.body.style.background ='rgb(218, 149, 85)'
    } else{
        //boanoite
        img.src = "noite.png"
        document.body.style.background ='rgb(4, 36, 78)'
    }
}
