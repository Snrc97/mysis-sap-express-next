const dotenv = require("dotenv");
dotenv.config();

 const PORT = process.env.PORT || 8080; 

 const mongoDBURL = process.env.mongoDBURL;

 module.exporsts = { PORT, mongoDBURL }