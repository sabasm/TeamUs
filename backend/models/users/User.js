const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport = require('passport-local-mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  player: {
    type: Boolean
  },
  email: {
    type: String,
    unique: true,
    required:true
  },
  personalData: {
    age: {
      type: Number
    },
    name: {
      type: String
    },
    imgURL: String,
    city: {
      type: String
    },
    clubs: {
      teamUsClub: {
        type: String,
        default: ""
      },
      outside: {
        type: String,
        default: []
      }
    },
    stats:{
      type: Schema.ObjectId
    },
    hometown: {
      type: String
    },
    favoriteSports: {
      type: [String],
      default: []
    },
    hobbies: {
      type: [String],
      default: []
    },
    socialNetworks:{
        instagram:"",facebook:"",twitter:""
      }
  },
  premium: {
    type: Boolean,
    default: false
  },
  premiumDates: {
    type: [Date],
    default: [new Date()]
  },
  social:{
    followers:[{type: Schema.ObjectId}],
    following:[{type: Schema.ObjectId}]
  }
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
});

userSchema.plugin(passport, {
  usernameField: 'username'
})

module.exports = mongoose.model('User', userSchema)