const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/course_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connect Successfully');
    } catch (error) {
        console.log('Connect Fail');
    }
}

module.exports = { connect }