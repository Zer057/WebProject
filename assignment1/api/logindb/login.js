import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://RichWebUser:rich123@richweb.r8imr.mongodb.net/?retryWrites=true&w=majority&appName=RichWeb'; 
const dbName = 'RichWeb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const { email, pass } = req.body;

  if (!email || !pass) {
    res.status(400).json({ success: false, message: 'Email and password are required' });
    return;
  }

  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);

    // Fetch the user from the 'users' collection
    const user = await db.collection('users').findOne({ email });

    // Close the MongoDB connection
    client.close();

    if (user && user.password === pass) {
      // Success: User authenticated
      res.status(200).json({ success: true });
    } else {
      // Failure: Invalid credentials
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
