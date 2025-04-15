import { fakerDE } from '@faker-js/faker';
import { encriptar } from './bcrypt.js';


export const generatePet = () => {
    return{
        _id: fakerDE.database.mongodbObjectId(),
        name: fakerDE.animal.petName(),
        type: fakerDE.animal.type()
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
            birth_date: fakerDE.date.birthdate(),
            phone: fakerDE.phone.number(),
            address: fakerDE.location.streetAddress(),
            img: fakerDE.image.avatar(),
            email: fakerDE.internet.email(),
            role: roles[Math.floor(Math.random()* roles.length)],
            password: encriptar('coder123'),
            pets: pets
        }
        users.push(user);
    }
    return users;
}
