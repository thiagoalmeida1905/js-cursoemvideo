function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0 ){ 
        //se o campo estiver em branco, aparecerá mensagem e abaixo:
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' 
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //usado para linguagem server side (php)
            tab.appendChild(item) //acrescenta (ite)
            c++
        }
    }
}
/*
    for (c = 1; c <= 10; c++){
        
    }
*/