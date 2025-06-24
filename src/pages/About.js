import React from 'react';
import { Box, Typography, Container, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
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
            About Me
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Avatar
                sx={{
                  width: 200,
                  height: 200,
                  margin: '0 auto',
                  mb: 2,
                  bgcolor: 'primary.main',
                  color: 'white',
                }}
              >
                GC
              </Avatar>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h4" gutterBottom>
                  Professional Overview
                </Typography>
                <Typography paragraph>
                  I am a dedicated software developer with a passion for creating innovative solutions.
                  My expertise lies in modern web technologies and I continuously strive to improve
                  my skills through hands-on experience and learning.
                </Typography>
                
                <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                  Skills & Expertise
                </Typography>
                <Typography paragraph>
                  - Frontend Development (React, JavaScript)
                  - Backend Development (Node.js, Python)
                  - Database Management (SQL, NoSQL)
                  - Cloud Services (AWS, Azure)
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
