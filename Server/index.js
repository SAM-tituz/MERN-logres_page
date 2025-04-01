

require("dotenv").config(); 

const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
require("cors");

const app = express();

// Database connection
main().then(()=>console.log("db connect")).catch(err => console.log("db not connected:",err.message));
async function main() {
    console.log("db loading...");
    
    await mongoose.connect(process.env.MONGO_URL); 
}
app.use(express.json());
app. use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use("/", require("./routes/authRouters"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
