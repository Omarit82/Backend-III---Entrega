import { genSaltSync, hashSync, compareSync } from 'bcrypt';

export const encriptar = (password) => {
    return hashSync(password,genSaltSync(parseInt(process.env.SALT)));
}

export const desencriptar = (password, hashedPassword)=>{
    return compareSync(password, hashedPassword)
}