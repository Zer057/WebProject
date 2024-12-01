'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

export default function DashboardNavBar() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]); // Cart state to store selected products

  useEffect(() => {
    fetch('http://localhost:3000/api/getProducts')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data); // Check data here
        setData(data);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.pname} added to cart!`); // Alert user when item is added
  };

  if (!data) return <p>Loading...</p>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Krispy Kreme
          </Typography>
          <Link href="/home" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
          <Link href="/products" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>
            Products
          </Link>
          <Link href="/login" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>
            Login
          </Link>
          <Link href="/register" style={{ color: 'white', textDecoration: 'none' }}>
            Register
          </Link>
        </Toolbar>
      </AppBar>

      {/* Product List */}
      <Container component="main" maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Products
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2, // Spacing between items
            justifyContent: 'center', // Center items horizontally
          }}
        >
          {data.map((item, i) => (
            <Box
              key={i}
              sx={{
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                width: '300px', // Set a fixed width for each card
                textAlign: 'center',
              }}
            >
              <Typography variant="h6">{item.pname}</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                Price: €{item.price}
              </Typography>
              {item.image && (
                <Box
                  component="img"
                  src={item.image}
                  alt={item.pname}
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    marginTop: '10px',
                    borderRadius: '8px',
                  }}
                />
              )}
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => addToCart(item)} // Add to cart functionality
              >
                Add to cart
              </Button>
            </Box>
          ))}
        </Box>

        {/* Cart Info */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="outlined" color="primary" onClick={() => alert(`Items in Cart: ${cart.length}`)}>
            View Cart ({cart.length} items)
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
