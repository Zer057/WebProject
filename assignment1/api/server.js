const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // To handle cross-origin requests
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB 
mongoose.connect('mongodb+srv://RichWebUser:rich123@richweb.r8imr.mongodb.net/?retryWrites=true&w=majority&appName=RichWeb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use the cart routes
app.use('/api/cart', cartRoutes);

// Start the server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
