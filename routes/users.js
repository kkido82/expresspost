const express = require('express');
const usersRouter = express.Router();
const users = [{
    id: 1,
    name: 'Ido',
}, {
    id: 2,
    name: 'Ronit',
}, {
    id: 3,
    name: 'Danielle',
}, {
    id: 4,
    name: 'Noam',
},];

usersRouter.route('/users')
    .get(function (req, res) {
        // const data = req.body;

        res.json(users);
    }).post(function (req, res) {
        const user = JSON.parse(req.body.user);
        user.id = users.length + 1;

        users.push(user);
        res.json(user);
    });

usersRouter.route('/users/:user_id')
    .get(function (req, res) {
        const user = users.find(u => u.id === +req.params.user_id);

        res.json(user);
    }).put(function(req, res) {
        users.filter(u => u.id === +req.params.user_id).map(u => u.name = req.body.name);

        res.json(users);
    });

module.exports = usersRouter;