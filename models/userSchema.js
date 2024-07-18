const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({

   profilepic: {
      type: String,
      default:"default.png",
  },
 name:{
    type:String,
    trim:true,
    require:[true,"Name is require"],
    minLength:[4, "Name must be at least 4 charecter long"],
 },

 username:{
   type:String,
   trim:true,
   unique:true,
   require:[true,"Username is require"],
   minLength:[4, "Username must be at least 4 charecter long"],
},


email:{
   type:String,
   trim:true,
   unique:true,
   lowercase: true,
   require:[true,"Email is require"],
   match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
   "Please fill a valid email address",],
},
 
// password:{
//    type:String,
//    timestamps:true,
// } ,
password:String,
resetPasswordToken:{
   type:Number,
   default: 0,
},
posts: [{type: mongoose.Schema.Types.ObjectId, ref: "post"}]

},
{timestamps:true}


);

userSchema.plugin(plm);
const user = mongoose.model("user",userSchema);
module.exports=user;
