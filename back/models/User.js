import { Schema , model } from "mongoose";

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true , index: true},
    token: {type: String , required: false , unique: true}
});

export const User = model("User",userSchema);