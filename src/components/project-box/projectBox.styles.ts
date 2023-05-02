import { SystemStyleObject } from "@chakra-ui/react";

export const projectBoxStyles: SystemStyleObject = {
  w: "100%",
  ".accordionItem": {
    background: "linear-gradient(77.53deg, #EA6A61 6.33%, #EEA19C 90.13%)",
    p: "15px",
    borderRadius: "30px",
    color: "white",
    ".header": {
      justifyContent: "space-between",
      pb: "10px",
      p: {
        fontSize: "30px",
        fontWeight: 500,
        lineHeight: "36px",
      },
    },
    ".accordionPanel": {
      p: 0,
    },
    ".accordionButtonWrapper": {
      justifyContent: "flex-end",
      ".accordionButton": {
        bgColor: "white",
        color: "black",
        borderRadius: "30px",
        w: "141px",
        h: "25px",
        px: "20px",
        fontSize: "12px",
        justifyContent: "space-between",
        letterSpacing: "0.5px",
        fontWeight: 600,
        textTransform: "uppercase",
        svg: {
          fontSize: "25px",
        },
      },
    },
  },
};
