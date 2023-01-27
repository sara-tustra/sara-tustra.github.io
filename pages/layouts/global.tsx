import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      color="white"
      minHeight="100vh"
      pt={24}
      pb={2}
      transition="0.4s ease-out"
      backgroundColor="green.300"
    >
      {children}
    </Box>
  );
};

export default Layout;
