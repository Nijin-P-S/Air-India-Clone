const express = require("express");
const {connect} = require('./src/configs/database');
const apiRouter = require("./src/routes/index");
const User = require('./src/models/user.model');
const app = express();

app.use('/api', apiRouter);
app.get('/', (req, res) => {
    console.log("Successfully hitting the api");
    res.status(200)
    res.send({
        message : "Successfully hit the api",
        status_code : 200
    });
}
)


app.listen(8080, async()=>{
    await connect();
    console.log("Mongodb connected successfully");
    console.log("Server started");

    let user = await User.create({
        email : "abc@xyz.com",
        password : 12345,
        username : "abc"
    });

    console.log(user);
})