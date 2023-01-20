const tech = 'Node.js'
const array = ['Node.js', 'React', 'TypeScript']

const includes = tech.includes('ode')
// verifica se existe os caracteres na string
console.log({ includes })

const includesArray = array.includes('React')
// verifica se existe a string em alguma posiçao do array
console.log({ includesArray })

const startsWith = tech.startsWith('Nod')
// verifica se a string começa com os valores do parametro
console.log({ startsWith })

const endsWith = tech.endsWith('js')
// verifica se a string termina com os valores do parametro
console.log({ endsWith })