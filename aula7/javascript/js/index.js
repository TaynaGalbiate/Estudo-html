//A diferença entre const, var e let
//Declaração de variável com var e let
//Declaração de constantes com const. Aqui o valor nunca será alterado
//A declaração com var tem escopo(visibilidade) fora da estrutura
//Declarar com let tem escopo (visibilidade) local, ou seja, dentro da estrutura.
var nome = "Helena"
let sobrenome = "Santos"

console.log(nome,sobrenome)

if(nome=="Helena"){
    var dados="É uma pessoa de idade 35 anos"   //O var é global, conseguimos chamá-lo fora da estrutura
    let mais= "e também trabalha com vendas"    //O let é local, só podemos chamá-lo dentro da estrutura
}
console.log(dados)

const texto = "Mensagem"
console.log("O valor da constante é: "+ texto)
console.log(texto.toUpperCase())        //Deixou maiúscula