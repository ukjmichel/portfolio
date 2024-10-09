import {
  Box,
  Grid,
  GridItem,
  Text,
  useColorMode,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

import view from '../../assets/images/aerial_view_f.jpg';
import HoverText from '../HoverText';
import HeroGridItem from '../HeroGridItem';

const HeroSection = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid
      marginX={6}
      borderWidth={4}
      borderColor={'gray.600'}
      height="90vh"
      templateRows={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} // One row on small screens, two on medium and larger
    >
      {/* First row with 1 element and inverted color mode */}
      <GridItem>
        <Flex
          bg={colorMode === 'light' ? 'gray.800' : 'gray.200'} // Dark background in light mode, light background in dark mode
          height="100%" // Ensure the box takes full height of the row
          p={12}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <Box maxWidth={'70%'}>
            <HoverText className={'welcome_line'}>Welcome</HoverText>
            <HoverText className={'welcome_line2'}>
              My name is Jean-Michel Phyrym Uk, i'm a full-stack développeur
              based on Villefranche sur Saône in the north of Lyon, France.
            </HoverText>
            <HoverText className={'welcome_line3'}>
              I'm passionate about technologies and human thinking and hope you
              will enjoy this tour.
            </HoverText>
          </Box>
        </Flex>
      </GridItem>
      {/* Second row with 2 elements */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        height="100%"
        gap={1}
        bgColor={'black'}
        borderWidth={4}
        borderColor={'gray.600'}
        display={{ base: 'none', md: 'grid' }} // Hide on small screens (base), show on medium screens (md) and larger
      >
        <HeroGridItem
          title={'# About me'}
          image={view}
          link={'#about-section'}
        />
        <HeroGridItem
          title={'# My Project'}
          image={view}
          link={'#project-section'}
        />
        <HeroGridItem
          title={'# Contact me'}
          image={view}
          link={'#contact-section'}
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
