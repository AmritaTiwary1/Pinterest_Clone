const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PinterestClone');

const passport = require('passport');
const plm = require('passport-local-mongoose');


// Define the schema for the user model
const userSchema = new mongoose.Schema({
   username:String,
   name:String,
   email:String,
   password:String,
   profileImage:String,
   contact:Number,
   boards:{
    type:Array,
    default:[]
   },
   posts :[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post'
   }]
});

userSchema.plugin(plm);


module.exports = mongoose.model('user', userSchema);