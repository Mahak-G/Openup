import mongoose from "mongoose";

const notifySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    like: Number,
    comment: Number
    
});

const Notification = mongoose.model('notification',notifySchema);

export default Notification;