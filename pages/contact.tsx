import { Box, Heading } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box
      border="1px solid blue"
      height="40vh"
      alignItems="center"
      display="grid"
      width={["100%"]}
    >
      <Heading as="h1" size="xl" textAlign="center" pb={11}>
        Here will be the contact form
      </Heading>
    </Box>
  );
};

export default ContactForm;
