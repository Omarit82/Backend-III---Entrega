import { Schema, model } from "mongoose";

const petSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    type: {
        type:String,
        required: true
    }
})

const petModel = model('pets',petSchema);
export default petModel;