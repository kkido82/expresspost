const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./app/config/app.config');

const app = express();

var corsOptions = {
    origin: 'http://localhost:4200'
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');

if (config.environment === 'production') {
    db.sequelize.sync();
}



// const usersRoute = require('./app/routes/users');

const router = express.Router().use(cors(corsOptions));


app.get('/test/api', (req, res) => {
    res.json({ success: true, message: 'API is working!' });
});


// router.use(usersRoute);

// routes
require('./app/routes/auth.routes')(router);
require('./app/routes/user.routes')(router);

app.use('/api', router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('Server is running on port:', port);
});

if (config.environment === 'development') {
    const Role = db.role;

    // db.sequelize.sync({ force: true }).then(() => {
    //     console.log('Drop and Resync Db');
    //     initial();
    // });
    db.sequelize.sync();

    function initial() {
        Role.create({
            id: 1,
            name: "user"
        });

        Role.create({
            id: 2,
            name: "moderator"
        });

        Role.create({
            id: 3,
            name: "admin"
        });
    }
}
