const express = require('express');
const db = require('../../db');
const usersRouter = express.Router();

// const users = [{
//     id: 1,
//     name: 'Ido',
// }, {
//     id: 2,
//     name: 'Ronit',
// }, {
//     id: 3,
//     name: 'Danielle',
// }, {
//     id: 4,
//     name: 'Noam',
// },];

usersRouter.route('/users')
    .get(function (req, res) {
        db.query(
            "SELECT * FROM users WHERE status != 'deleted'", [],
            (error, results) => {
                if (error) {
                    throw error;
                }

                res.status(200).send(results.rows);
            }
        );




        // const data = req.body;

        // res.json(users);
    }).post(function (req, res) {
        const { firstname, lastname, username, password, accounttype } = req.body;
        const status = "new";

        db.query(
            "INSERT INTO users (firstname, lastname, username, password, status, accounttype) VALUES ($1, $2, $3, $4, $5, $6)",
            [firstname, lastname, username, password, status, accounttype],
            (err, results) => {
                if (err) {
                    throw err;
                }

                res.sendStatus(201);
            }
        );

        // const user = JSON.parse(req.body.user);
        // user.id = users.length + 1;

        // users.push(user);
        // res.json(user);
    });

usersRouter.route('/users/:id')
    .get(function (req, res) {
        const { id } = req.params;

        db.query(
            "SELECT * FROM users WHERE id = $1", [id],
            (err, results) => {
                if (err) {
                    throw err;
                }

                res.status(200).send(results.rows);
            });


        // const user = users.find(u => u.id === +req.params.user_id);

        // res.json(user);
    }).put(function (req, res) {
        const { id } = req.params;
        const { firstname, lastname, username, password, accounttype } = req.body;

        db.query(
            `UPDATE users SET firstname = $1, lastname = $2, username = $3, password = $4, accounttype = $5
            WHERE id = $6`,
            [firstname, lastname, username, password, accounttype, id],
            (error, results) => {
                if (error) {
                    throw error;
                }

                res.sendStatus(201);
            }
        )
        // users.filter(u => u.id === +req.params.user_id).map(u => u.name = req.body.name);

        // res.json(users);
    }).delete((req, res) => {
        const { id } = req.params;

        db.query(
            "UPDATE users SET status = 'deleted' WHERE id = $1", [id],
            (error, results) => {
                if (error) {
                    throw error;
                }

                res.sendStatus(200);
            });
        // const userIndex = users.find(u => u.id === +req.params.user_id);
        // users.splice(userIndex, 1);
    });

module.exports = usersRouter;