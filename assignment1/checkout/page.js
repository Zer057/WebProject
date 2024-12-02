'use client';
import * as React from 'react';
import { useState } from 'react';
import { Container, Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

export default function Checkout({ cart, setCart }) {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleConfirmOrder = async () => {
    try {
      const response = await fetch('/checkout/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }), // Send cart data to the backend
      });

      if (response.ok) {
        setIsOrderConfirmed(true);
        setCart([]); // Clear the cart after confirming
        alert('Order confirmed! Thank you for shopping with us.');
      } else {
        console.error('Failed to confirm order');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {!isOrderConfirmed ? (
        <Box>
          <Typography variant="h4" gutterBottom>
            Checkout
          </Typography>
          {cart.length > 0 ? (
            <>
              <List>
                {cart.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${item.pname} - €${item.price}`} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Total: €{cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handleConfirmOrder}
              >
                Confirm Order
              </Button>
            </>
          ) : (
            <Typography variant="h6">Your cart is empty.</Typography>
          )}
        </Box>
      ) : (
        <Typography variant="h5" color="success.main">
          Order successfully placed!
        </Typography>
      )}
    </Container>
  );
}
