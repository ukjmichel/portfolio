import { Box, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const HoverText = ({
  children,
  lightColor = 'white',
  darkColor = 'black',
  hoverColor = 'gray',
  fontSize = { base: '24px', sm: '32px', md: '48px', lg: '64px' },
}) => {
  const { colorMode } = useColorMode(); // Get the current color mode
  const responsiveFontSize = useBreakpointValue(fontSize); // Get responsive font size

  // State to store the split characters
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Split the text into characters and set it to state
    setCharacters(children.split(''));
  }, [children]);

  // Set initial color based on the color mode
  const initialColor = colorMode === 'light' ? lightColor : darkColor;

  return (
    <Box fontSize={responsiveFontSize} display="inline-block">
      {characters.map((char, index) => (
        <Box
          as="span"
          key={index}
          color={initialColor}
          transition="color 0.3s"
          _hover={{ color: hoverColor }} // Chakra's hover style handling
          display="inline-block"
        >
          {char}
        </Box>
      ))}
    </Box>
  );
};

export default HoverText;
