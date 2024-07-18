const mongoose = require("mongoose")
//  mongoose.connect("mongodb://127.0.0.1:27017/media09")
mongoose.connect(process.env.MONGO_URL)
 .then(()=>console.log("db badhiya!"))
 .catch((err)=>console.log("err.messege"));