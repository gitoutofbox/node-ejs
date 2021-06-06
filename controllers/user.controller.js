const User = require("../models/User");

const getusers = (req, res) => {
    User.find()
    .then(users => res.send(users))
    .catch(err => res.send(err))
};
const addUser = (req, res) => {
    console.log(req.body)
    const newUser = new User({...req.body});
    newUser.save()
    .then(user => res.send(user))
    .catch(err => res.send(err));
};
const login = (req, res) => {
    res.render("login")
}
const register = (req, res) => {
    res.render("register")
}
module.exports = {
    getusers,
    addUser,
    login,
    register
}