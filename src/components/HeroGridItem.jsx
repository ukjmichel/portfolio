import { Box, GridItem } from '@chakra-ui/react';
import HoverText from './HoverText';

const HeroGridItem = ({ title, image, link }) => {
  return (
    <GridItem
      as="a" // Make the GridItem behave like an anchor tag
      href={link} // The anchor link
      p={6}
      textAlign="center"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      cursor="pointer"
      _hover={{
        '.background-overlay': {
          filter: 'grayscale(0%) brightness(0.8)', // Remove grayscale and brighten on hover
        },
      }}
    >
      {/* Background container with the filter */}
      <Box
        className="background-overlay"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgImage={image}
        bgPosition="center"
        bgSize="cover"
        filter="grayscale(100%) brightness(0.5)"
        zIndex={0}
        transition="filter 0.3s ease"
      />

      {/* Text content with correct z-index and relative positioning */}
      <Box zIndex={1} position="relative">
        <HoverText hoverColor="black">{title}</HoverText>
      </Box>
    </GridItem>
  );
};

export default HeroGridItem;
