const db = require('../models');
const User = db.user;

getById = (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    User.findByPk(id).then(user => {
        if (!user) {
            return res.status(404).send({ message: 'User Not found.' });
        }

        req.user = {
            id: user.id,
            username: user.username,
            email: user.email,
        }

        next();
    });
};

getAll = (req, res, next) => {
    User.findAll().then(users => {
        if (!users?.length) {
            return res.status(400).send({ message: 'Users list is empty.' });
        }

        req.users = users.map(u => { return { id: u.id, email: u.email, username: u.username } });

        next();
    })
};

const user = {
    getById,
    getAll
}

module.exports = user;
