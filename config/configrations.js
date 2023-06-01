const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const sgt = require("nodemailer-sendgrid-transport");
const {Configuration, OpenAIApi} = require("openai");
require("dotenv").config();

// database connection
mongoose.set('strictQuery', false);
exports.connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb+srv://mheba509:v3962W1QD3eHK6zt@cluster0.9thadgh.mongodb.net/DCD?retryWrites=true&w=majority');
    }
    catch (error){
        console.log(error);
        process.exit(1);
    }
}


//mail transporter configurations
exports.transporter = nodemailer.createTransport(sgt({    auth:{
        api_key: process.env.SENDGRID_API_KEY
    }}
))
//openAI configurations
const apikey = process.env.open_AI_API_key;
const configuration = new Configuration({
    apiKey: apikey,
});
exports.openai = new OpenAIApi(configuration);