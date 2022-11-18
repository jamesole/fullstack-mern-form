const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        minlength:3,
        maxlength:20,
        required:[true, 'Why no name?'],
    },
    email: {
        type:String,
        trim:true,
        minlength: 3,
        maxlength: 25,
        required:[true, 'Why no email?']
    },
    deleted: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Data', schema);
