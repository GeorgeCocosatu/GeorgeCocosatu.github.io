import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            sx={{ mb: 4, fontWeight: 'bold' }}
          >
            Welcome to my Portfolio
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom>
                  About Me
                </Typography>
                <Typography paragraph>
                  I am George Cocosatu, a passionate software developer with a focus on creating
                  innovative and user-friendly applications. With expertise in modern web technologies,
                  I strive to deliver high-quality solutions that make a difference.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom>
                  Latest Projects
                </Typography>
                <Typography paragraph>
                  Check out my recent work in the Projects section to see how I've applied
                  my skills to create impactful solutions.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
