const express = require('express');
const app = express();
const dotenv = require('dotenv');
const routerApi = require('./routes');

app.use(express.json());
dotenv.config();

routerApi(app);

app.listen(process.env.PORT || 5000, ()=>{
    console.log('backend services is running');
});
