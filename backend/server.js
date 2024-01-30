const express = require('express');

const contactRoute = require('./routes/contactRoutes');

require('dotenv').config();

const PORT = process.env.PORT || 5001

const app = express()

app.use(express.json())

//middleware as Route
app.use("/api/contact",contactRoute)

app.get("/",(req,res)=>{
    // res.send("http://localhost:5001/api/contact")
    // res.json({"message":"Welcome to our page"})
    // res.status(200).json({"message":"Welcome to our page"})

    const Link = '<a href="http://localhost:5001/api/contact">http://localhost:5001/api/contact</a>';
    res.send(Link);
})

app.listen(PORT,()=>{
    console.log(`🚀🚀 Server Running at http://localhost:${PORT}`);
})
