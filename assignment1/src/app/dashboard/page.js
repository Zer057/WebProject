'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { useState, useEffect } from 'react'


import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';







export default function Page() {
  
  const [data, setData] = useState(null)


 

  useEffect(() => {

        fetch('http://localhost:3000/api/getProducts')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
          })

  }, [])

 


  if (!data) return <p>Loading</p>




 

  const theme = createTheme({

        palette: {

         

          secondary: {

            main: green[500],

          },

        },

  });

 




 

  return (
    
    <Box sx={{ flexGrow: 1 }}>
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
 
        <Link href="/">Home</Link> - 
-
        <Link href="/products">Products</Link> - 

        <Link href="/login">login</Link>
      </Toolbar>
    </AppBar>

   
        <Container component="main" maxWidth="xs">
            <div style={{fontSize: '40px'}} > Products</div>
            <div>
                {
                    data.map((item, i) => (
                        <div style={{padding: '20px'}} key={i}>
                          
                            <br></br>
                            <br></br>
                            Description:
                            <br></br>
                            {item.pname}
                            <br></br>
                            <br></br>
                            Price: €
                            {item.price}
                            <br></br>
                            {item.image}
                            <br></br>
                            <Button variant="outlined"> Add to cart </Button>

                            <br></br>
                            <br></br>
                            Description:
                            <br></br>
                            {item.pname}
                            <br></br>
                            <br></br>
                            Price: €
                            {item.price}
                            <br></br>
                            {item.image}
                            <br></br>
                            <Button variant="outlined"> Add to cart </Button>
                        </div>
                    ))
                }
            </div>
        </Container>

        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  </Box>

  );


  
}

