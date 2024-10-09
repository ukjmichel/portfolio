import { Box, Heading } from '@chakra-ui/react';

const ProjectSection = () => {
  return (
    <Box id="project-section">
      <Heading
        height={'90vh'}
        p={4}
        m={6}
        borderWidth={4}
        borderColor={'gray.600'}
        fontSize={64}
      >
        # My Project
      </Heading>
    </Box>
  );
};
export default ProjectSection;
