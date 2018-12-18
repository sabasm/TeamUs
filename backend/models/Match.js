const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport = require('passport-local-mongoose');

const refereeSchema = new Schema({
  name: String,
  img:String,
  associatedStats: {
    type: [String],
    default: []
  },
  players: {
    type: Number,
    default: 0
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
        default:"Nuevo en la app"
      },
      cv:{
        type:[String],
        default:[]
      },
      exp:{
        type:[String],
        default:[]
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

module.exports = mongoose.model('Referee', refereeSchema)