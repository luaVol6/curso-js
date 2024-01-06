//váriaeis compostas
//a -> array=vetor 
//vaga a =[c1, c2, c3]
//array é uma variável que tem varios elementos, cada elemento tem um valor e uma chave de identidade.

let num=[5, 8, 4, 3]
num [4]=9
num.push(7)
num.sort()
console.log(`Nossos valores são: ${num}.`)
console.log(`O vetor tem ${num.length} valores.`)
console.log(`O primeiro valor do vetor é: ${num[0]}.`)
let pos=num.indexOf(1)
if (pos==-1){
    console.log(`O valor não foi encontrado!`)
}else{
console.log(`O valor 1 está na posição ${pos}`)
}