
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./db/connection');
const User = require('./models/User');
const Campaign = require('./models/Campaign');
const Donation = require('./models/Donation');

// Sample data
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: '123456',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: '123456',
  },
];

const seedDatabase = async () => {
  try {
    // Connect to the database
    await connectDB();
    
    console.log('MongoDB connected...');
    
    // Clean the database
    await User.deleteMany();
    await Campaign.deleteMany();
    await Donation.deleteMany();
    
    console.log('Data cleaned...');
    
    // Create users
    const createdUsers = await User.create(users);
    console.log('Users created...');
    
    // Create campaigns
    const campaigns = [
      {
        title: 'Help Rebuild After Kerala Floods',
        description: 'Support families affected by the devastating floods in Kerala.',
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
        goal: 1000000,
        raised: 750000,
        daysLeft: 15,
        donors: 328,
        upiQrCode: 'https://example.com/qr-code1.png',
        status: 'active',
        user: createdUsers[0]._id
      },
      {
        title: 'Support Children\'s Education in Rural Areas',
        description: 'Help provide educational resources for children in rural communities.',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
        goal: 600000,
        raised: 450000,
        daysLeft: 22,
        donors: 213,
        upiQrCode: 'https://example.com/qr-code2.png',
        status: 'active',
        user: createdUsers[0]._id
      },
      {
        title: 'Community Clean-up Initiative',
        description: 'Organizing a clean-up drive in local neighborhoods.',
        image: 'https://images.unsplash.com/photo-1567427361984-0cbe7396fc5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        goal: 50000,
        raised: 25000,
        daysLeft: 0,
        donors: 42,
        upiQrCode: 'https://example.com/qr-code3.png',
        status: 'completed',
        user: createdUsers[1]._id
      }
    ];
    
    const createdCampaigns = await Campaign.create(campaigns);
    console.log('Campaigns created...');
    
    // Create some donations
    const donations = [
      {
        amount: 5000,
        campaign: createdCampaigns[0]._id,
        donor: 'Anonymous',
        message: 'Hope this helps!'
      },
      {
        amount: 1500,
        campaign: createdCampaigns[0]._id,
        donor: 'Rahul Sharma',
        message: 'Stay strong!'
      },
      {
        amount: 2000,
        campaign: createdCampaigns[1]._id,
        donor: 'Priya Patel',
        message: 'Education is important!'
      }
    ];
    
    await Donation.create(donations);
    console.log('Donations created...');
    
    console.log('Database seeded successfully!');
    process.exit();
    
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run the seeder
seedDatabase();
