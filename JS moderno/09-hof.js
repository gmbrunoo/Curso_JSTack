const array = [
    { name: 'Iphone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 }
]

// .find & .findIndex
const find = array.find((product) => product.price > 1000);
// retorna o primeiro ELEMENTO que a condiçao  seja true
// console.log(find)

const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');
// retorna o INDICE do primeiro objeto que a condiçao seja true
// console.log(findIndex)

// .some & .every
const some = array.some((product) => product.price < 1000);
// verifica se ALGUM elemento cumpre a condicao
// console.log({ some })

const every = array.every((product) => product.price >= 1000);
// verifica se TODOS os elementos cumprem a condicao
// console.log({ every })

// .map
const map = array.map((product) => {
    return {
        ...product,
        subtotal: product.quantity * product.price
        }
});
// Itera sobre o array gerando um novo array com as propriedades novas
// console.log({ map })

// . filter 
const filter = array.filter((product) => {
    return product.quantity > 1
})
// filtra o array retornando um novo array apenas com 
// os elementos que cumprem a condicao
//console.log({ filter })

// .reduce
const reduce = array.reduce((accumulator, product) => {
    console.log(product)
    return accumulator + (product.price * product.quantity)
    
}, 0)
// reduz o array a qualquer tipo de dado
// no exemplo é um carrinho de compras
console.log({ reduce })