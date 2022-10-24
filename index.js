const express = require("express");

const app = express();

app.get('/', (req, res) => {
    console.log("Successfully hitting the api");
    res.status(200)
    res.send({
        message : "Successfully hit the api",
        status_code : 200
    });
}
)


app.listen(8080, ()=>{
    console.log("Server started");
})