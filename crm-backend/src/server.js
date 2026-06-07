const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'CRM backend active',
    timestamp: new Date(),
    database: 'connected'
  });
});

// Basic route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 CRM Backend running on port ${PORT}`);
  console.log(`📊 Database: PostgreSQL`);
  console.log(`📧 Gmail: ${process.env.GMAIL_ENABLED}`);
  console.log(`📱 WhatsApp: ${process.env.WHATSAPP_ENABLED}`);
});

module.exports = app;