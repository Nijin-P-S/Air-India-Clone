const express = require("express");
const {connect} = require('./src/configs/database');
const passport = require('passport');
const bodyParser = require('body-parser');

const apiRouter = require("./src/routes/index");
const authRouter = require("./src/routes/authRoutes");
const User = require('./src/models/user.model');
const app = express();

require('./src/util/auth');

app.use(bodyParser.urlencoded({extended : false}));
app.use("/", authRouter);
app.use('/api',passport.authenticate('jwt', {session : false}) ,apiRouter);

// app.use( (err, req, res, next)=> {
//     res.status(err.status || 500);
//     res.json({
//         success : false,
//         error : err
//     });
// })


app.listen(8080, async()=>{
    await connect();
    console.log("Mongodb connected successfully");
    console.log("Server started");

    // let user = await User.create({
    //     email : "abc@xyz.com",
    //     password : 12345,
    //     username : "abc"
    // });

    // console.log(user);


})