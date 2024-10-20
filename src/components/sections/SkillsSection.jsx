import {
  Box,
  Heading,
  Stack,
  HStack,
  useTheme,
  useBreakpointValue,
} from '@chakra-ui/react';

const SkillsSection = () => {
  const theme = useTheme(); // Access the Chakra theme to get colors

  // Skills with corresponding skill level (rating out of 100)
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Django', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 70 },
    { name: 'SQL', level: 70 },
    { name: 'MongoDB', level: 75 },
    { name: 'COBOL', level: 50 },
    { name: 'Java', level: 20 },
  ];

  // Use responsive value to determine the number of blocks
  const blockCount = useBreakpointValue({
    base: 20,
    xl: 30,
    '2xl': 40,
  }); // Adjust the number of blocks as needed

  // Function to generate a color based on skill level
  const getColor = (level, blockIndex) => {
    // Calculate the percentage of the skill level
    const percent = level / 100;

    // Calculate the colors for the gradient
    const startColor = theme.colors.blue[100];
    const endColor = theme.colors.blue[800];

    // Calculate the interpolated color
    const r1 = parseInt(startColor.slice(1, 3), 16); // Red start
    const g1 = parseInt(startColor.slice(3, 5), 16); // Green start
    const b1 = parseInt(startColor.slice(5, 7), 16); // Blue start

    const r2 = parseInt(endColor.slice(1, 3), 16); // Red end
    const g2 = parseInt(endColor.slice(3, 5), 16); // Green end
    const b2 = parseInt(endColor.slice(5, 7), 16); // Blue end

    // Calculate the color for the current block
    const r = Math.round(r1 + (r2 - r1) * (blockIndex / 100));
    const g = Math.round(g1 + (g2 - g1) * (blockIndex / 100));
    const b = Math.round(b1 + (b2 - b1) * (blockIndex / 100));

    // Return the color as a hex string
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  return (
    <Box px={10} my={10}>
      <Heading as="h2" size="xl" mb={6} id="skills-section">
        Compétences
      </Heading>

      <Stack spacing={5}>
        {skills.map((skill, index) => (
          <Box key={index}>
            <Heading as="h3" size="md" mb={2}>
              {skill.name}
            </Heading>
            <HStack spacing={0.5} wrap="wrap">
              {/* Create blocks based on the block count */}
              {[...Array(blockCount)].map((_, blockIndex) => {
                // Determine if the block is filled based on the skill level
                const isFilled =
                  blockIndex < Math.floor((skill.level / 100) * blockCount);

                return (
                  <Box
                    key={blockIndex}
                    width={{ base: '4%', xl: '2%' }} // Increased width
                    height="30px" // Increased height
                    bg={
                      isFilled ? getColor(skill.level, blockIndex) : 'lightgray'
                    } // Use the generated color for filled blocks
                    transition="background-color 0.3s ease"
                  />
                );
              })}
            </HStack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SkillsSection;
