import { fakerDE } from '@faker-js/faker';

export const generatePet = () => {
    return{
        _id: fakerDE.database.mongodbObjectId(),
        name: fakerDE.animal.petName()
    }
}

export const generateUser = () =>{
    //email, _id, nombre, apellido, fecha_nacimiento, genero,celular, imagen
    
    return {
        _id: fakerDE.database.mongodbObjectId(),
        first_name: fakerDE.person.firstName(),
        last_name: fakerDE.person.lastName(),
        sex: fakerDE.person.sexType(),
        gender: fakerDE.person.gender(),
        birth_date: fakerDE.date.birthdate(),
        phone: fakerDE.phone.number(),
        address: fakerDE.location.streetAddress(),
        img: fakerDE.image.avatar(),
        email: fakerDE.internet.email(),
        password: fakerDE.internet.password(),
    }
}