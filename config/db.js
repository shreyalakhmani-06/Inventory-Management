const mongoose = require('mongoose');

const connectDB = async () => {

    try {

        await mongoose.connect('mongodb+srv://shreyalakhmani06:Einstein%4006@cluster0.ub8zm9i.mongodb.net/?appName=Cluster0');

        console.log('MongoDB Connected Successfully');

    } catch (error) {

        console.log(error);

    }

};

module.exports = connectDB;