const express = require('express');
const postRouter = express.Router();

postRouter.route('/').post(function(req, res){
    const data = req.body;

    res.json({ success: true, message: 'OK', data: { id: 1, status: 'new' } });
});

module.exports = postRouter;