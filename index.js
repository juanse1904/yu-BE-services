const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@erp-tests.8ktbs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(()=>{
    console.log("db connection successful");
}).catch((err)=> {console.log("err connecting db", err)});

app.listen(process.env.PORT || 5000, ()=>{
    console.log('backend services is running');
});
