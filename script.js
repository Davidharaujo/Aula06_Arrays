let dados = [23, 54, 33, 45, 7]
let numbers = [7,5,6,3,8,9,2,1,4]
 // Crie um array que receba 5 itens e exiba no console.
console.log(dados)

// Utilize um método para adicionar um nome ao inicio do array.
dados.unshift(13)

console.log(dados)

// Utilize um método para remover o último nome do array.
dados.pop()

console.log(dados)

// Utilize um método para adicionar dois nomes ao fim do array.
dados.push(60,30)

console.log(dados)

// Utilize um método para remover o primeiro nome do array.
dados.splice(0,1)

console.log(dados)

// Utilize um método para organizar em ordem crescente o seguinte array:
numbers.sort((a,b) => {
    return (a-b)
})

console.log(numbers)