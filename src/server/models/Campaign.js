
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL']
  },
  goal: {
    type: Number,
    required: [true, 'Please add a goal amount']
  },
  raised: {
    type: Number,
    default: 0
  },
  daysLeft: {
    type: Number,
    required: [true, 'Please add days remaining']
  },
  donors: {
    type: Number,
    default: 0
  },
  upiQrCode: {
    type: String,
    required: [true, 'Please add a UPI QR code image URL']
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'draft'],
    default: 'active'
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = mongoose.model('Campaign', campaignSchema);
