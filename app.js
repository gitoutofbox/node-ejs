const express = require("express");
const mongoose = require("mongoose");
const layouts = require("express-ejs-layouts");

const db = require('./config/db');
const PORT = process.env.PORT || 5000;

const routes = require("./routes/index.route")
const app = express();
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(layouts);
app.set('view engine', 'ejs');
app.use(routes);


mongoose.connect(db.mongoUrl, {useNewUrlParser: true})
.then(() => console.log('DB connected'))
.catch(error =>  console.log(error))


app.listen(PORT, () => {
    console.log("server started")
})

