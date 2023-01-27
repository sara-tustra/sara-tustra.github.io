import { Box, Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      border="1px solid red"
      height="90vh"
      alignItems="center"
      display="grid"
      width={["100%"]}
    >
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        width={["100%"]}
        marginTop={[8, 0]}
      ></Flex>
      <Heading as="h1" size="xl" textAlign="center" pb={11}>
        This is a header
      </Heading>
    </Box>
  );
};

export default Header;
