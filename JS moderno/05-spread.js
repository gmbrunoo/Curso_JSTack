const user = {
    firstName: 'Bruno',
    lastName: 'Godinho',
    age: 27,
    instagram: '@bruno.godinho_',
    skills: ['Front-end', 'Back-End', 'Ui/Ux', 'DataBase'],
    active: false
}

//Spread (espalhar) operator
const updatedUser = {
    ...user,
    skills: [...user.skills, 'Marketing'],
    active: true
}

console.log({user})
console.log({updatedUser})