import { Box, Heading, Stack, Text, Button, Tag, Link } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectSection,
  SkillsSection,
} from '../components';

const HomePages = () => {
  return (
    <Box maxWidth={'1400px'}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </Box>
  );
};

export default HomePages;
