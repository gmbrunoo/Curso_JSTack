const user = {
    firstName: 'Bruno',
    lastName: 'Godinho',
    age: 27,
    instagram: '@bruno.godinho_',
    skills: ['Front-end', 'Back-End', 'Ui/Ux', 'DataBase']
}

//Destructuring
const { firstName, age: idade, skills } = user;
const [primary, secondary] = skills

console.log(idade)