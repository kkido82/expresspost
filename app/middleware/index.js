const authJwt = require('./authJwt');
const verifySignUp = require('./verifySignUp');
const user = require('./usersHandler');

module.exports = {
  authJwt,
  verifySignUp,
  user
};