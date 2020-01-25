const express = require('express');
const app = express();
const port = 2000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const configUrl = `mongodb+srv://prabhjyotgambhir:${process.env.MONGODB_PASSWORD}@seriouslygambhirserver-gkzob.mongodb.net/test?retryWrites=true&w=majority`;

// Route    
const StoryRoute = require('./routes/story');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


mongoose.connect(configUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},  (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected to database: ', configUrl);
    }
});

app.use('/story', StoryRoute);

app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
});

app.listen(port, () => {
    console.log('Server running at port : ', port );
});
