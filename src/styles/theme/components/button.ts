import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    h: "auto",
    borderRadius: "45px",
    textTransform: "uppercase",
  },
  variants: {
    black: {
      color: "white",
      bgColor: "black",
      px: "37px",
      py: "7px",
    },
    white: {
      color: "black",
      bgColor: "white",
      px: "37px",
      py: "7px",
    },
    gray: {
      color: "black",
      bgColor: "#E5E7EB",
      px: "37px",
      py: "7px",
    },
    disabled: {
      color: "#B5B6B7",
      border: "1px solid #B5B6B7",
      bgColor: "transparent",
      px: "37px",
      py: "7px",
      cursor: 'no-drop'
    },
  },
};
