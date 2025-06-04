import bcrypt from 'bcrypt';


export const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(process.env.SALT);
    return bcrypt.hash(password,salts);
}

export const passwordValidation = async(user,password) => bcrypt.compare(password,user.password);
