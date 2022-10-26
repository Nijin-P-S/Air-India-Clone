const express = require("express");
const {connect} = require('./src/configs/database')
const Routes = require('./src/routes/index')
const app = express();
app.use('/', Routes);
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
})