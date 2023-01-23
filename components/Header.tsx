import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Header = () => {
  const backgroundCol = useColorModeValue("brand.100", "gray.700");
  return (
    <Box height="727px" width="100%" display="block" pt={36}>
      <Flex background={backgroundCol} height="100%">
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  );
};

export default Header;
