const mongoose = require('mongoose');

//Define the schema for the post model
const postSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true,
    }, 
    image:{
        type:String,
        required:true,
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now // Sets the default value to the current date and time
    },
    likes: {
        type: Array, //instead of number, type is array bcoz I will store all users name who likes it,(eg.liked by sadhguru) and to show total likes - array.length
        default: [] // Initializes likes to empty array
    },
});

// Create the post model and export
module.exports = mongoose.model('Post', postSchema);