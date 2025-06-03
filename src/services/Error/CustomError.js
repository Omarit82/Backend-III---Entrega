export default class CustomError {
    static NewError(message, name, code=1,cause){
        const error = new Error(message,{cause});
        error.name = name;
        error.code = code;
        throw error;
    }
}