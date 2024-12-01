'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

//import ResponsiveAppBar from './components/NavBar/ResponsiveAppBar';

export default function Home() {
  const handleSubmit = (event) => {
    console.log('Handling submit');
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const pass = data.get('password');
    const tel = data.get('tel');
    const address = data.get('address');

    console.log('Sent email:', email);
    console.log('Sent password:', pass);
    console.log('Sent telephone:', tel);
    console.log('Sent address:', address);

    runDBCallAsync(
      `http://localhost:3000/api/register?tel=${tel}&email=${email}&pass=${pass}&address=${address}`
    );
  };

  async function runDBCallAsync(url) {
    const res = await fetch(url);
    const data = await res.json();
    if (data.data === 'valid') {
      console.log('Registration is valid!');
    } else {
      console.log('Registration failed.');
    }
  }

  return (
    <Container maxWidth="sm">
      
      <Box sx={{ height: '100vh' }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoComplete="address"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="tel"
            label="Telephone Number"
            name="tel"
            type="tel"
            autoComplete="tel"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                {"Already have an account? Log in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
