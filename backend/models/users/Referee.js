const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refereeSchema = new Schema({
  user: {
    type: Schema.ObjectID
  },
  profession: String,
  refSportsStats: {
    type: Schema.ObjectID
  },
  cv: {
    type: String
  },
  experience: {
    type: [String],
    default: []
  },
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
});

module.exports = mongoose.model('Referee', refereeSchema)