// let valor= 0
// valor = prompt("Digite um número")
// // if(valor % 2 == 0){
// //     alert("O número digitado é Par")
// // }
// // else{
// //     alert("O número digitdo é Impar")
// // }

// // let rs =valor % 2==0 ? "O número digitado é Par" : "O número digitado é Impar"
// // alert(rs)
//Lista de produtos

const produtos= ["Mouse","Teclado","Sofá","Monitor"]
console.log(produtos[1].toUpperCase())

//Adicionar um produto
produtos.push("Cadeira Gamer")

for(let i= 0 ; i < produtos.length ; i++){
    console.log("Produto "+(i+1)+": "+produtos[i]);          //i+1 começa a lista a partir do número 1
}

produtos.pop()  //Remova o último item
for(let i of produtos){
    console.log(i)          //Dessa forma motra os itens por lista
}

let dados = prompt("Digite produtos separados por vírgulas")

/*Vamos usar um comando split que permite quebrar uma string
a partir de um caracter separador e transformá-la em um array*/

const lista = dados.split(',')
for(let pr of lista){
    console.log(pr)
}