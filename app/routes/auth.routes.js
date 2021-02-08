const { verifySignUp } = require('../middleware');
const controller = require('../controllers/auth.controller');

module.exports = function (app, router) {
    router.use(function (req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );

        next();
    });


    router.route('/auth/signup')
        .post([verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
            controller.signup);

    // app.post(
    //     "/api/auth/signup",
    //     [
    //         verifySignUp.checkDuplicateUsernameOrEmail,
    //         verifySignUp.checkRolesExisted
    //     ],
    //     controller.signup
    // );

    router.route('/auth/signin').post(controller.signin);
    // app.post("/api/auth/signin", controller.signin);
};