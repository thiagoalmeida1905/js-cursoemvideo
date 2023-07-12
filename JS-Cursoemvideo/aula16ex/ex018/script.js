let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){ // Verificação se o número digitado está certo
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){ // verificação se o número digitado foi repetido, ou seja, não foi acrescentado na lista 
    if(l.indexOf(Number(n)) != -1){ // indexOf = vai verificar todos os elementos do vetor, "-1" siginifica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}


function adicionar(){ // adicão dos valores
    if (isNumero(num.value) && !inLista(num.value, valores)){ //só irá acrescentar o valor, se o num digitado for realmente um número, e não consta na lista
        valores.push(Number(num.value)) // adição do num no vetor
        let item = document.createElement('option') // criação da Tag "option" p/ que seja mostrado dentro do select
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //limpar resultado
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //limpar o número digitado, automatização
    num.focus() // serve pra voltar o foco onde foi digitado
}

function finalizar (){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length //total de elementos 
        let maior = [0]
        let menor = [0]
        let soma = 0
        let media = 0


        for(let pos in valores){ // pos vai percorrer toda a lista
            soma += valores[pos]
            if (valores[pos] > maior) // se o valor da pos for >, ele vai ser maior da lista e assim até acabar
                maior = valores[pos]
            if (valores[pos] > menor) // se o valor da pos for <, ele vai ser o menor da lista e assim até acabar
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = '' // zerar o valor
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
    }
}