const express = require('express');
require('dotenv').config();
const app = express()
const cors = require("cors")
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const authRoutes = require("./routes/auth");
const apiRoutes = require('./routes/api');

const fileUpload = require('express-fileupload');
const connection = require('./config/database');
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config file upload
app.use(fileUpload());

// config red.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());

app.use('/v1/api/', apiRoutes);
app.use('/v1/auth/', authRoutes);

//AUTHENTICATION


//AUTHORIZATION



//self running function js muc dich dinh nghia async await
(async () => {
    //test conection
    try {
        //using mongoose
        await connection();



        //using mongodb driver
        // Connection URL
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);
        // Database Name
        const dbName = process.env.DB_NAME;


        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('customers');

        app.listen(port, hostname, () => {
            console.log(`Backend app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB: ", error)
    }
})()
