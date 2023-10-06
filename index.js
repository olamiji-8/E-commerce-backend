const express = require("express");
const dbConnect = require("./config/dbconnect");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");

const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/api/user",authRouter);
app.post("/", (req, res)=>{
res.json({'firstname': 'ola'})    
});
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

