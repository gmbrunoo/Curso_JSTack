let patternLenght = 4;
let random = [];
let userInput = 1235

let inputArray = userInput.toString()
let posicao = 0
let valor = 0

function generateRandom(){
    for(var i = 0; i < patternLenght ; i++){
        var randomNum = Math.floor(Math.random() * 10).toString()
        if(random.indexOf(randomNum) == -1){
            random.push(randomNum);
        }
        else
        i--;
    }
    checkNumbers()
}

function checkNumbers(){
    for(var i = 0; i < patternLenght ; i++){

        if(inputArray[i] == random[i]) {
            posicao ++
        }

        if(inputArray.includes(random[i])) {
            valor ++
        }
    }
}

generateRandom();

console.log (`${posicao} posicoes corretas`)
console.log (`${valor} valores corretos`)
console.log(`valor digitado = ${inputArray}`)
console.log(`o codigo era = ${random}`)