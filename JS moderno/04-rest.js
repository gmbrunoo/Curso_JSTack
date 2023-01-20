const user = {
    firstName: 'Bruno',
    lastName: 'Godinho',
    fullName: 'Nome Completo',
    age: 27,
    instagram: '@bruno.godinho_',
    skills: ['Front-end', 'Back-End', 'Ui/Ux', 'DataBase']
}

//Rest operator

const { firstName, skills, ...restoUser } = user;
const [primary, ...restoSkills] = skills

console.log(restoUser)