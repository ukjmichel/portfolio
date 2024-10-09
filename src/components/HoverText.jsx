import { Box, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

const HoverText = ({
  children,
  lightColor = 'white',
  darkColor = 'black',
  hoverColor = 'gray',
  fontSize = { base: '24px', sm: '32px', md: '48px', lg: '64px' }, // Default font sizes
}) => {
  const textContainerRef = useRef(null); // Ref to the text container
  const { colorMode } = useColorMode(); // Get the current color mode
  const responsiveFontSize = useBreakpointValue(fontSize); // Get responsive font size

  useEffect(() => {
    // Clear the container
    const textContainer = textContainerRef.current;
    if (textContainer) {
      textContainer.innerHTML = ''; // Clear any previous content

      // Split the text into words
      const words = children.split(' ');

      words.forEach((word, index) => {
        // Create a Box component for each word
        const wordBox = document.createElement('div');
        wordBox.style.display = 'inline-block'; // Display as inline-block for hover
        wordBox.style.transition = 'color 0.3s'; // Transition for color change
        wordBox.textContent = word; // Set the word as the text content

        // Set initial color based on the color mode
        const initialColor = colorMode === 'light' ? lightColor : darkColor;

        wordBox.style.color = initialColor; // Set the initial color

        // Add hover event listeners
        wordBox.addEventListener('mouseenter', function () {
          this.style.color = hoverColor; // Change color on hover
        });

        wordBox.addEventListener('mouseleave', function () {
          this.style.color = initialColor; // Reset color to initial color on mouse leave
        });

        // Append the Box to the container
        textContainer.appendChild(wordBox);

        // Add a space after the word if it's not the last word
        if (index < words.length - 1) {
          textContainer.appendChild(document.createTextNode(' '));
        }
      });
    }
  }, [children, colorMode, lightColor, darkColor, hoverColor]); // Add color props as dependencies

  return <Box ref={textContainerRef} fontSize={responsiveFontSize} />; // Use responsive font size
};

export default HoverText;
