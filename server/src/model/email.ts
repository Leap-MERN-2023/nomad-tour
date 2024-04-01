import {Schema, model, Document}from "mongoose"


const emailSchema = new Schema({
    email: {
        type: String,
        unique: true,
    }
})

const Email = model("Email", emailSchema)

export default Email