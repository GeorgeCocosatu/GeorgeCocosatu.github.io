import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with React and Node.js',
      tech: 'React, Node.js, MongoDB',
    },
    {
      title: 'Project 2',
      description: 'A responsive e-commerce platform',
      tech: 'React, Redux, Firebase',
    },
    {
      title: 'Project 3',
      description: 'A real-time data visualization dashboard',
      tech: 'React, D3.js, Express',
    },
  ];

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
            My Projects
          </Typography>
          
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography paragraph>
                    {project.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 'auto' }}
                  >
                    Technologies: {project.tech}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    href="#"
                  >
                    View Project
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
