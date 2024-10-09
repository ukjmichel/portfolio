import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectSection,
} from '../components';

const HomePages = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </Box>
  );
};

export default HomePages;
