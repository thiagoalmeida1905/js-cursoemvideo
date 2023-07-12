var idade = 66
console.log(`Você tem ${idade} anos de idade.`)
if(idade < 16) {
    console.log('Não é obrigado a votar')
} else if (idade >= 16 && idade < 18 || idade >= 65){
    console.log('Voto opcional')
} else {
    console.log('Obrigado a votar')
}
    