const db = require('../models');
const User = db.user;

getUserById = (req, res, next) => {
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

const user = {
    getUserById
}

module.exports = user;
