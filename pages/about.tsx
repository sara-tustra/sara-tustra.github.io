import { Box, Heading } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box
      border="1px solid blue"
      height="40vh"
      alignItems="center"
      display="grid"
      width={["100%"]}
    >
      <Heading as="h1" size="xl" textAlign="center" pb={11}>
        This is an About Section
      </Heading>
    </Box>
  );
};

export default AboutSection;
