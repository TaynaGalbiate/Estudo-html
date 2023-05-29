//fazer uma referência ao body usando document.body
const body = document.body
const div1 = document.createElement("div")
const btn1 = document.createElement("button")

div1.setAttribute("id","resultado")
btn1.setAttribute("id","btn1")
btn1.innerHTML="Executar"

btn1.onclick = () => {
    let n1
    let n2
    let soma=0
    let subtrair=0
    let multiplicar=0
    let dividir=0
    let resto=0
    n1 = prompt("Digite um valor: ")
    n2 = prompt("Digite outro valor: ")

    //Vamos converter para parseInt
    n1 = parseInt(n1)
    n2 = parseInt (n2)

    soma = n1 + n2
    subtrair = n1 - n2
    multiplicar = n1 * n2
    dividir = n1 / n2
    resto = n1 % n2

    //Pegar um elemento html por id
    document.getElementById("resultado").innerHTML= "O resultado da soma é: " + soma + "<br>"
    document.getElementById("resultado").innerHTML+='O resultado da substração é: ' + subtrair + "<br>"       //+= ele acrescenta/adiciona e não substitui o resultado anterior, 
    document.getElementById("resultado").innerHTML+=`O resultado da multiplicação é: ${multiplicar} <br>`
    document.getElementById("resultado").innerHTML+= `O resultado da divisão é: ${dividir} <br>`          //String com interpolação, não precisa concatenar pois é só fazer a interpolação
    document.getElementById("resultado").innerHTML+='O resultado do "resto" é: ' + resto + "<br>"

}

const btn2 = document.createElement("button")
btn2.setAttribute("id", "btn2")
btn2.innerHTML="Função de CallBack"


btn2.onclick = () =>{
   // exibir("Texto qualquer")
   //calcPer(500,6)

   //Utilizando a função de callback
   //calcPercent(600,5,exibir)
   let n = [10, 30, 5, 80, 12]
   //somaPares(n,n.length,apresentar,mostrar)
   maiorValor(n,n.length,fx)

}


body.appendChild(btn1)
body.appendChild(btn2)
body.appendChild(div1)

//Área de funções

function exibir(dado){
    document.getElementById("resultado").innerHTML = dado
}
function calcPer(preco, percent){
    let rs = preco * percent / 100
    exibir(rs)

}

//Função de callback
/*
Com a função de callback, uma função é passada por um parâmetro para uma outra função e assim
a função que tem o callback como parâmetro executará a sua parte quando o callback executar a sua
*/
function calcPercent(preo, percent, func){
    rs = preco * percent / 100
    func(rs)
}

function mostrar(valor) {
    document.getElementById("resultado").innerHTML=`<strong> O resultado é ${valor}</strong`
}

function somaPares(arrNum, arrTm, fun, fun2){
    let rs = 0
    for(let i = 0 ; i < arrTm ; i++){
        console.log(fun(arrNum[i]))
        rs += arrNum[i]
    }

    fun2(rs)
}

function apresentar(v){
    return `Recebemos o valor ${v} para calcular`
}

function maiorValor(arrNum, arrTm,fx){
    let m = arrNum[0]
    for(let i = 1 ; i < arrTm; i++){
    if(arrNum[i] > m){
        m = arrNum [i]
    }
}

    console.log(fx(arrTm,m))
}
    function fx(tm,rs){
        return `O tamanho do array é ${tm} e o maior valor é ${rs}`
    }
