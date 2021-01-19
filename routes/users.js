const express = require('express');
const usersRouter = express.Router();

usersRouter.route('/').get(function(req, res){
    const data = req.body;

    res.json(['Ido', 'Ronit', 'Danielle', 'Noam']);
});

module.exports = usersRouter;