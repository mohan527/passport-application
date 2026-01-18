const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/passport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Passport Application Server is running', timestamp: new Date() });
});

app.get('/api/applications', (req, res) => {
  res.json({
    message: 'Get all passport applications',
    data: []
  });
});

app.post('/api/applications', (req, res) => {
  res.status(201).json({
    message: 'Passport application submitted successfully',
    applicationId: 'APP-' + Date.now()
  });
});

app.get('/api/applications/:id', (req, res) => {
  res.json({
    message: `Get application status for ${req.params.id}`,
    status: 'Processing',
    progress: 45
  });
});

app.post('/api/applications/:id/verify', (req, res) => {
  res.json({
    message: `Documents verified for ${req.params.id}`,
    verified: true
  });
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Passport Application Server running on port ${PORT}`);
});

module.exports = app;
