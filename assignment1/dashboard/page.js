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

  useEffect(() => {
    fetch('http://localhost:3000/api/getProducts')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data); // Check data here
        setData(data);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  

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
      <Container component="main" maxWidth="xs">
        <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
          Products
        </Typography>
        <div>
          {data.map((item, i) => (
            <Box key={i} sx={{ padding: '20px', border: '1px solid #ddd', marginBottom: '10px', borderRadius: '8px' }}>
              <Typography variant="h6">Description:</Typography>
              <Typography>{item.pname}</Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Price: €{item.price}
              </Typography>
              {item.image && (
                <Box
                  component="img"
                  src={item.image}
                  alt={item.pname}
                  sx={{ width: '100%', height: 'auto', marginTop: '10px' }}
                />
              )}
              <Button variant="outlined" sx={{ mt: 2 }}>
                Add to cart
              </Button>
            </Box>
          ))}
        </div>
      </Container>
    </Box>
  );
}
