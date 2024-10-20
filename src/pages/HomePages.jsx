import { Box, Grid } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectSection,
  SkillsSection,
} from '../components';
import { motion } from 'framer-motion';

// Create MotionBox using motion.create
const MotionBox = motion.create(Box);

const HomePages = () => {
  // Animation variants for sliding in from left and right
  const slideInLeft = {
    hidden: { x: '-20vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 },
    },
  };

  const slideInRight = {
    hidden: { x: '20vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 },
    },
  };

  return (
    <Box>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About and Skills Sections in a 2-column Grid */}
      <Grid
        templateColumns={{ base: '1fr', xl: '1fr 1fr' }}
        gap={6}
        marginBottom={10}
      >
        {/* About Section with slide-in from left */}
        <MotionBox
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% in view
        >
          <AboutSection />
        </MotionBox>

        {/* Skills Section with slide-in from right */}
        <MotionBox
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% in view
        >
          <SkillsSection />
        </MotionBox>
      </Grid>

      {/* Project Section */}
      <Box>
        <ProjectSection />
      </Box>

      {/* Contact Section */}
      <Box py={10} px={6}>
        <ContactSection />
      </Box>
    </Box>
  );
};

export default HomePages;
