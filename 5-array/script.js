let num = document.getElementById('num')
let list = document.getElementById('list')
let array = []

function eNumero(num){
    if(Number(num) >= 1 && Number(num) <=100 ){
        return true
    }else{
        return false
    }
}

function naLista(num,list){
    if(list.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){   

    if(eNumero(num.value) && !naLista(num.value, array)){
        let item = document.createElement('option')
        item.text = `${num.value}`
        list.appendChild(item)
        res.innerHTML = ''
        
        array.push(Number(num.value))
        
    }else{       
        
        alert('[ERRO] Número inválido ou existe na lista')

    }

    num.value = ''
    num.focus()

}

let nRegistros, maValor, meValor, soma =0, media=0
let res = document.getElementById('res')

function finalizar(){

    if(array.length == 0){
        alert('[ERRO] Entre com algum valor')
    }else{
        nRegistros = array.length 
        maValor = array[0]
        meValor = array[0]      

        for( let pos in array){      
            soma += array[pos]
            media = soma/array.length
            
            if(array[pos] > maValor){
                maValor = array[pos]
            }
            if(array[pos] < meValor){
                meValor = array[pos]
            }            
        }       
       
        res.innerHTML = `Ao todos, temos ${nRegistros} números cadastrados`
        res.innerHTML += `<p>O maior valor informado foi ${maValor}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${meValor}</p>`
        res.innerHTML += `<p>A soma foi ${soma}</p>`
        res.innerHTML += `<p>A média foi ${media}</p>`
    } 
}