function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')

    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)      
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'

            if (idade >=0 && idade <= 10){
                img.setAttribute('src', './images/1-bebe-homem.png')
                genero ='uma criança'                
            }else if (idade <=21) {
                img.setAttribute('src', './images/2-jovem-homem.png')
                genero ='um jovem'
            }else if( idade <=50) {
                img.setAttribute('src', './images/3-adulto-homem.png')
                genero ='um adulto'
            }else{
                img.setAttribute('src', './images/4-idoso-homem.png')
                genero ='um idoso'
            }

        } else{
            genero = 'mulher'

            if (idade >0 && idade <= 10){
                img.setAttribute('src', './images/5-bebe-mulher.png')
                genero ='uma criança'
            }else if (idade <=21) {
                img.setAttribute('src', './images/6-jovem-mulher.png')
                genero ='um jovem'
            }else if( idade <=50) {
                img.setAttribute('src', './images/7-Adulto-mulher.png')
                genero ='um adulto'
            }else{
                img.setAttribute('src', './images/8-Idoso-mulher.png')
                genero ='uma idosa'
            }
        }
        res.style.textAlign = 'center'       
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }  
}