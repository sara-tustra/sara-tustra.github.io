import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "../components/Header";

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const backgroundCol = useColorModeValue("brand.100", "gray.700");

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      background={backgroundCol}
    >
      <Header />
    </Flex>
  );
};

export default IndexPage;
