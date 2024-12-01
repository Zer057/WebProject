'use client';
import * as React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

export default function Home() {
  const handleProductClick = () => {
    console.log('View Products clicked!');
    // Redirect to products page or handle button action
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
      <Box>
        <Typography variant="h3" gutterBottom>
          Welcome to Krispy Kreme!
        </Typography>
        <Typography variant="h6" paragraph>
          Your favorite donuts and treats are just a click away.
        </Typography>
        <Button
        href="http://localhost:3000/dashboard"
          variant="contained"
          color="primary"
          onClick={handleProductClick}
          sx={{ mt: 3 }}
        >
          View Products
          
        </Button>
      </Box>
    </Container>
  );
}
