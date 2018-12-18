const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport = require('passport-local-mongoose');

const userSchema = new Schema({
  name: String,
  email:{
    type:String,
    unique:true,
  }
},{
  timestamps:{
    createdAt: true,
    updatedAt: true
  }
});

userSchema.plugin(passport,{usernameField:'email'})

module.exports = mongoose.model('User', userSchema)