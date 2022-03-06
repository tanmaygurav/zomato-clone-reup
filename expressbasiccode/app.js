const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 2020;
const host = 'localhost';
const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use('/', routes);
mongoose.connect('mongodb://localhost:27017/zomatoclone', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, host, () => {
            console.log(`server is running  at ${host}:${port}`);

        });
    }).catch(err => console.log(err))