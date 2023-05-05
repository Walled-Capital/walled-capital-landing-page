import { useMediaQuery } from "@chakra-ui/react";
import { mainTheme } from "@src/styles/theme/theme";

type Size = "sm" | "md" | "xl";

export const useMinWidthMedia = (size: Size) =>
  useMediaQuery(`(min-width: ${mainTheme.breakpoints[size]})`);
