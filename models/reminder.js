const mongoose = require('mongoose');

// Schema for a reminder
const reminderSchema = new mongoose.Schema({
  recipient: {
    type: String,
    required: true 
  },
  date: {
    type: Date,
    required: true 
  },
  occasion: {
    type: String,
    required: false 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Reminder', reminderSchema);