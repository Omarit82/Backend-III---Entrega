import { fakerDE } from '@faker-js/faker';
import { encriptar } from './bcrypt.js';



export const generatePet = () => {
    return{
        _id: fakerDE.database.mongodbObjectId(),
        name: fakerDE.animal.petName(),
        specie: fakerDE.animal.type(),
        birthDate: fakerDE.date.birthdate(),
        adopted: fakerDE.datatype.boolean(),
        owner: generateUser(1)[0],
        image: fakerDE.image.avatar()
    }
}

export const generateUser = (quantity) =>{
    //email, _id, nombre, apellido, fecha_nacimiento, genero,celular, imagen
    const users = [];
    const pets = [];
    const roles = ['user', 'admin'];
    for(let i=0; i<quantity; i++){
        const user = {
            _id: fakerDE.database.mongodbObjectId(),
            first_name: fakerDE.person.firstName(),
            last_name: fakerDE.person.lastName(),
            email: fakerDE.internet.email(),
            password: encriptar('coder123'),
            role: roles[Math.floor(Math.random()* roles.length)],
            pets: pets
        }
        users.push(user);
    }
    return users;
}
