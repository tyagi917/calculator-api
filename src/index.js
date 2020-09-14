const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());
const calc=require("./calc.route.js");

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

// here
app.use("/",calc);
app.get("/",(_,res)=>{
	res.status(200).send("Hello world!");
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;