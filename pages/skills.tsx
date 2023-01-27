import { Heading, Box } from "@chakra-ui/react";

const SkillsSection = () => {
  return (
    <Box
      border="1px solid blue"
      height="40vh"
      alignItems="center"
      display="grid"
      width={["100%"]}
    >
      <Heading as="h1" size="xl" textAlign="center" pb={11}>
        Here will be the skills
      </Heading>
    </Box>
  );
};

export default SkillsSection;
