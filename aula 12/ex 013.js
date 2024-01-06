var idade = 67
console.log (`Você tem ${idade} anos.ex`)
if (idade < 16){
    console.log('O seu nâo vota!')
}else if( idade < 18 || idade > 64){
        console.log('O seu tem voto opcional!')
    }else{
        console.log('O seu tem voto obrigatório!')
    }
