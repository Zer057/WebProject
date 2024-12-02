import dbConnect from '../../../lib/dbConnect';
import Order from '../../../models/Order';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cart } = req.body;

    try {
      await dbConnect();

      // Save the order to the database
      const newOrder = new Order({ items: cart, createdAt: new Date() });
      await newOrder.save();

      res.status(200).json({ message: 'Order placed successfully' });
    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).json({ message: 'Error placing order' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
