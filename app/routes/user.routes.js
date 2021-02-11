const { authJwt, user } = require('../middleware');
const controller = require('../controllers/user.controller');

module.exports = function (router) {
    // app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    //     next();
    // });


    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
        next();
    });


    router.route('/users').get([authJwt.verifyToken, authJwt.isAdmin, user.getAll], controller.allAccess);
    // app.get("/api/test/all", controller.allAccess);


    router.route('/users/:id').get([authJwt.verifyToken, user.getById], controller.userBoard);

    // app.get(
    //   "/api/test/user",
    //   [authJwt.verifyToken],
    //   controller.userBoard
    // );
    router.route('/users/mod').get([authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard);

    // app.get(
    //   "/api/test/mod",
    //   [authJwt.verifyToken, authJwt.isModerator],
    //   controller.moderatorBoard
    // );

    router.route('/users/admin').get([authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
    // app.get(
    //   "/api/test/admin",
    //   [authJwt.verifyToken, authJwt.isAdmin],
    //   controller.adminBoard
    // );
};
