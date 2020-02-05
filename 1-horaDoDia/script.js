function carregar(){
    
    let msg = document.getElementById("msg")   
    let data = new Date()    
    let hora = data.getHours()
   
    
    msg.innerHTML = `Agora são ${hora} horas`          
    
  carregaimagem(hora)  

}

function carregaimagem(hora){
    let img = window.document.getElementById("imagem")
    let saudacao = document.getElementById("saudacao")

    if(hora > 0 && hora <12){        
        saudacao.innerHTML = 'Bom Dia!!'
        img.src ='manhã.png'
        document.body.style.background ='#e2cd9f'        
    }

    if(hora >= 12 && hora <18 ){
        img.src = 'tarde.png'
        saudacao.innerHTML = 'Boa Tarde!!'
        document.body.style.background ='#b9846f'
    }

    if(hora >= 18 && hora <=24) {
        img.src = 'noite.png'
        saudacao.innerHTML = 'Boa Noite!!'
        document.body.style.background ='#515154'
    }  
     

}

function mudaHora(){
    let hora = document.getElementById("hrs").value

    if (hora.length == 0 || hora >=25 || hora < 0 ){
        alert('Entre com um hora válida')
    }else{
        msg.innerHTML = `Agora são ${hora} horas`  

    carregaimagem(hora)

    }    

}
