const express = require('express');
const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);
const PORT = process.env.PORT || 3000;

app.listen(PORT,async() =>{
    console.log(`Server is up and running on port ${PORT}`);
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    }catch(error){
        console.log(error);
    }
})