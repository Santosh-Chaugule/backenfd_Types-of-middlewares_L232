//console.log("Types of middeleware")





//const something=require('somelibary)
const express = require('express')
const app = express();
require('dotenv').config();

app.use((req, res, next) => {
    //

    //how you can check the request type?
    console.log(req.method)


    //conditions if else
    console.log(typeof (req.method))
    if (req.method === 'GET') {

        res.status(400).json({ "msg": "GET request is not allowed" })

    } else {
        //this block is aplicable for POST DELETE PUT etc
        next();
    }

    next();
});


app.post('/student', (req, res) => {
    res.json({ "msg": "Hi MERN Stack" })
})



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`the sever is running on ${PORT}`)

})