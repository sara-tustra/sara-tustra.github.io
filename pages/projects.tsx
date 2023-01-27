import { Box, Heading } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box
      border="1px solid blue"
      height="40vh"
      alignItems="center"
      display="grid"
      width={["100%"]}
    >
      <Heading as="h1" size="xl" textAlign="center" pb={11}>
        Here will be the projects
      </Heading>
    </Box>
  );
};

export default Projects;
