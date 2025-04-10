
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, 'Please add an amount']
  },
  campaign: {
    type: mongoose.Schema.ObjectId,
    ref: 'Campaign',
    required: true
  },
  donor: {
    type: String,
    default: 'Anonymous'
  },
  message: {
    type: String,
    maxlength: [200, 'Message cannot be more than 200 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Update campaign raised amount and donors count when a new donation is added
donationSchema.pre('save', async function(next) {
  if (this.isNew) {
    const Campaign = this.model('Campaign');
    
    await Campaign.findByIdAndUpdate(this.campaign, {
      $inc: { raised: this.amount, donors: 1 }
    });
  }
  next();
});

module.exports = mongoose.model('Donation', donationSchema);
