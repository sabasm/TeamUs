const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userStatsSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    unique: true,
  },
  teamUsRating: {
    type: String,
    default: "Novato"
  },
  rating:{
    usersRating: {
      type: Number,
      default: 0
    }
  },
  games: {
    type: [String],
    default: []
  },  
  sportsStats:[{type: Schema.ObjectId}]
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
});

module.exports = mongoose.model('UserStats', userStatsSchema)