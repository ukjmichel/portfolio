import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Create motion components using motion.create
const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);

const HeroSection = () => {
  // Animation variants for sliding in from the left
  const slideInLeft = {
    hidden: { x: '-20vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 },
    },
  };

  return (
    <MotionBox p={10} h={{ base: '50vh', md: '95vh' }}>
      <MotionHeading
        as="h1"
        fontSize={{
          base: '38px',
          md: '56px',
          lg: '72px',
        }}
        mb={4}
        fontFamily={'droxen'}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% in view
        textAlign={{ base: 'center', md: 'left' }}
      >
        J-M Phirum UK
      </MotionHeading>

      <MotionText
        fontSize={{
          base: '18px',
          md: '26px',
          lg: '32px',
        }}
        mb={6}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% in view
        textAlign={{ base: 'center', md: 'left' }}
      >
        Développeur Full-Stack | React, Node.js, Django
      </MotionText>
    </MotionBox>
  );
};

export default HeroSection;
