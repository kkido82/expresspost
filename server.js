const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const postRoute = require('./routes/post');
const usersRoute = require('./routes/users');

const app = express();
const router = express.Router();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));



// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', ['X-Requested-With,content-type']);

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// app.post('/get-report', function (req, res) {
//     const data = req.body;
// });

app.get('/', function (req, res, next) {
    // console.log('get is working');

    res.json({ success: true, message: 'API is working!' });
});

// app.use('/get-report', postRoute);
// app.use(['/users', '/user'], usersRoute);
router.use(usersRoute);
router.use('/post', postRoute);

// router.route(['/users', '/u']).get(function(req,res) {
//     res.json("a");
// });





app.use('/api', router);

app.listen(port, () => {
    console.log('Server is running on port:', port);
});