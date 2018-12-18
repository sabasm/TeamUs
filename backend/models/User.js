const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport = require('passport-local-mongoose');

const userSchema = new Schema({
  name: String,
  img:String,
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  premium: {
    type: Boolean,
    default: false
  },
  premiumDateStart: {
    type: Date,
    default: new Date()
  },
  clubs: {
    type: [String],
    default: []
  },
  sportsStats: {
    type: [String],
    default: []
  },
  followers: {
    type: [String],
    default: []
  },
  following: {
    type: [String],
    default: []
  },
  favoriteSports:{
      type:[String],
      default:[]
    },
    usersRating:{
        type:Number,
        default:0
      },
      teamUsRating:{
        type:String,
        default:"Novato"
      },
      games: {
        type: [String],
        default: []
      }
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
});

userSchema.plugin(passport, {
  usernameField: 'email'
})

module.exports = mongoose.model('User', userSchema)