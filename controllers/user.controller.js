const User = require("../models/User");
const bryptjs = require("bcryptjs");

const getusers = (req, res) => {
    User.find()
    .then(users => res.send(users))
    .catch(err => res.send(err))
};
const addUser = (req, res) => {
    console.log(req.body)
    const newUser = new User({...req.body});
    bryptjs.genSalt(10, (err, salt) => {
        bryptjs.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save()
            .then(user => {return res.redirect("/login")})
            .catch(err => res.send(err));
        })
    })
    
};
const login = (req, res) => {
    res.render("login")
}

const checkLogin = (req, res) => {
    const userObj = req.body;
    console.log("1");
    User.findOne({email: userObj.email}).then(user => {
        console.log("2");
        bryptjs.compare(userObj.password, user.password, (err, isMatch) => {
            if(isMatch) {
                return res.redirect("/dashboard");
            } else {
                console.log("4");
                return res.redirect("/login");
            }
        })
    })
    .catch(err => {
        console.log("3");
        return res.redirect("/login");
    })

}
const register = (req, res) => {
    res.render("register")
}
module.exports = {
    getusers,
    addUser,
    login,
    register,
    checkLogin
}