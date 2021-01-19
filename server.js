const express = require('express');
const bodyParser = require('body-parser');
const postRoute = require('./routes/post');
const usersRoute = require('./routes/users');

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.post('/get-report', function (req, res) {
//     const data = req.body;
// });

app.get('/', function (req, res, next) {
    // console.log('get is working');

    res.json({ success: true, message: 'API is working' });
});

app.use('/get-report', postRoute);
app.use('/users', usersRoute);

app.listen(port, () => {
    console.log('Server is running on port:', port);
});