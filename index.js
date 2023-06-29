const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();
//console.log(process.env.TESTENV);

//use json to communicate with endpoints
app.use(express.json());

//Endpoints
const sumRouter = require('./routes/summarizer');
app.use('/summarizer', sumRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));