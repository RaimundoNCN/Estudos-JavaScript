const vetor = [1, "Tomate", "Peixe", 10]
 
 vetor.forEach((value, index)=>mostraDados(value, index))

 function mostraDados(dado, index){
    console.log(dado, index +1)
 }