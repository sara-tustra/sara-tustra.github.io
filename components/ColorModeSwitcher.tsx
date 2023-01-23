import {
  IconButton,
  useColorMode,
  useColorModeValue,
  IconButtonProps,
  Switch,
} from "@chakra-ui/react";
import { FaCat, FaDog } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ColorModeSwitcher = (
  props: Omit<IconButtonProps, "aria-label">
) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");

  return (
    <IconButton
      aria-label="Toggle light dark mode"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    />
  );
};
