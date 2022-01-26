const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

// config
connectDatabase();


// cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const server =app.listen(process.env.PORT, ()=>{
    console.log(`Server running on  http://localhost:${process.env.PORT}`);
})


// Unhandled Promise Rejection Warning
process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Server shut down due unhandled Promise");
    server.close(()=>{
        process.exit(1)
    })
})