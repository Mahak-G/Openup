import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true,
        index:true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    birthdate: {
        type: String,
        required: true
    },
    color: String,
    password: {
        type: String,
        required: true
    },
    securityAnswer:{
        type: String,
        required: true
    }
})

const user = mongoose.model('user',userSchema);

export default user;