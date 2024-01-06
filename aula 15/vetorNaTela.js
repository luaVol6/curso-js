let valores=[2, 3, 5, 6, 7, 1]
console.log(valores)
/*
for(let pos=0; pos<valores.length; pos++){
    console.log(`A posção ${pos} tem o valor ${valores[pos]}.`)
}*/
for(let pos in valores){
    console.log(`A posção ${pos} tem o valor ${valores[pos]}.`)    
}