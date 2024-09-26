const express = require('express');
const dotenv = require('dotenv');
const guidanceRoutes = require('./routes/guidanceRoutes');

// Load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();
const cors = require('cors');

app.use(cors()); // Allow all origins

// Middleware to parse JSON
app.use(express.json());

// Use the guidance routes
app.use('/api', guidanceRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
