const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8081;

// Simple root route to verify server is working
app.get('/', (req, res) => {
  res.send('UMA Backend is running and reachable!');
});

// Example route - adjust/remove as needed
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// Connect to MongoDB and then start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

