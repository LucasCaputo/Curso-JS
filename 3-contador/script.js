function conta(){
    var init = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var plus = document.getElementById('passo')    
    let res = document.getElementById('res')

    if (init.value.length == 0 || end.value.length == 0 || plus.value.length == 0 ){
        alert('[ERRO] Entre com todos os valores')
    }else{

        res.innerHTML='Contando: '
        let i = Number(init.value)
        let f = Number(end.value)
        let p = Number(passo.value)

        if (p <= 0){
            alert('Passo inválido! Considerando passo 1')
            p=1
        }

        if (i<f){
            for (let c = i; c<=f; c+=p){
                res.innerHTML+=`${c} \u{1F449}`
            }   
                       
        }else{
            for (let c = i; c>=f; c-=p){
                res.innerHTML+=`${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}` 

    }    
}