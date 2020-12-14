const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        require: true,
        min: 3,
    },
    email: {
        type: String,
        require: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email ID');
            }
        },
    },
    mnumber: {
        type: Number,
        require: true,
        min: 10,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;