let amigo = {nome: 'Harry',
sexo: 'M',
peso: 78.2,
engordar(p){
    console.log('Engordou!')
    this.peso+=p
}}
    amigo.engordar(2)
    console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)