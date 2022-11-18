const mongoose = require('mongoose');

const connectDB = (URL) => {
    mongoose.connect(URL)
}

module.exports = connectDB;
