const express = require('express');
const postRouter = express.Router();

postRouter.route('/').post(function(req, res){
    const data = req.body;

    return { data: 'data!!!' };
});

module.exports = postRouter;