import { Schema, model } from "mongoose";

const userSchema = new Schema({

        first_name: {
            type:String,
            required: true
        },
        last_name: {
            type:String,
            required: true
        },
        birth_date: {
            type:Date,
            required: true
        },
        phone: {
            type:Number,
            required: true
        },
        address: {
            type:String,
            required: true
        },
        img: {
            type:String,
            required: true
        },
        email: {
            type:String,
            required: true,
            unique:true
        },
        role: {
            type:String,
            required: true
        },
        password: {
            type:String,
            required: true
        },
        pets: {
            type:Schema.Types.ObjectId,
            ref: "pets"
        }
})

const userModel = model('users',userSchema);
export default userModel;