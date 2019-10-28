const express = require('express');
const app = express();
const port = 2000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/database');
const cors = require('cors');

// Route
const StoryRoute = require('./routes/story');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


mongoose.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},  (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected to database: ', config.url);
    }
});

app.use('/story', StoryRoute);

app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
});

app.listen(port, () => {
    console.log('Server running at port : ', port );
});
