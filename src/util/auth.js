const passport = require("passport");
const localStrategy = require('passport-local').Strategy;
const User = require('./../models/user.model');

passport.use('signup', new localStrategy({
    usernameField : 'email',
    passwordField : 'password'
},
async (email, password, done) => {
    try{
        const user = await User.create({email, password});
        return done(null, user);
    }
    catch(err){
        console.log(err);
        return done(err);
    }
}
));

passport.use('login', new localStrategy({
    usernameField : 'email',
    passwordField : 'password'
},
async (email, password, done) => {
    try{
        const user = await User.findOne({email});
        if(!user){
            return done(null, false, {message : 'User not found'});
        }
        const validate = await user.isValidPassword(password);
        if(!validate){
            return done(null, false, {message : 'Wrong password'});
        }
        return done(null, user, {message : 'Logged in Successfully'});
    }
    catch(err){
        console.log(err);
        return done(err);
    }
}
))
