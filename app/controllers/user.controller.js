exports.allAccess = (req, res) => {
    res.status(200).send(req.users);
};

exports.userBoard = (req, res) => {
    res.status(200).send(req.user);
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};