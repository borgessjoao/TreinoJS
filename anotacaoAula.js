// arquivo de capacitação das aulas de JS !

let v1 = 5.5
let v2 = "joao"

console.log(v1)
console.log(v2)
console.log(v2 + " " + v1)
console.log(typeof v1)


v2 = 7

console.log("Resultado das operacoes:")
let soma = v1 + v2
let mult = v1 * v2
let div = v2/v1

console.log(soma, mult, div)


let nota1 = 5
let nota2 = 2
let nota3 = 9

let media = (nota1 + nota2 + nota3)/3

console.log("O valor na nota media do aluno foi: " + media)


let lista = [1, 2, 3, 4, 5, 6]
console.log(lista)
lista.push(7)
console.log(lista[6])

lista.pop()
lista.reverse()

console.log(lista)

lista.map((e) => {

console.log("Elemento: " + e)

})



let listaDeNotas = [8, 4, 7, 9, 2]

listaDeNotas.map((nota) => {

    if(nota >= 6)
        console.log("Vc foi aprovado! Nota:" + nota)
    else
        console.log("Vc foi reprovado. Nota: " + nota)

    nota = 0 // posicao do vetor nao muda de fato

})

console.log(lista)

lista = ["joao", "maria", "andre"]

console.log("Mateus esta na turma? " + lista.includes("Mateus"))

console.log("Maria e Joao estao presentes na turma? " + (lista.includes("joao") && lista.includes("maria")))

console.log("Andre ou julio estao na turma? " + (lista.includes("andre") || lista.includes("julio")))


function somac(n1, n2){
return n1 + n2
}

console.log("o resultado da soma 4 + 7 = " + somac(4, 7))

console.log("vamos contar ate 10 agora..")
for(let i = 1; i <= 10; i++){
console.log(i)
}


console.log(" vamos fazer um loop infinito agora..")

/*

while(1){
    console.log("ola")
}

*/

let size = lista.length

for(let i = 0; i < size; i++){
    if(i % 2)
        lista.push("impar")
    else
        lista.push("par")

}

console.log(lista)


let carro = {

    quilometragem: 44000,
    potencia: 130,
    preco: 20000,
    dirigir(){
        console.log("acelerando por ai..")
    }
}

carro.dirigir()