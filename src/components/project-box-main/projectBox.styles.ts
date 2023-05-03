import { SystemStyleObject } from "@chakra-ui/react";

export const accordionButtonStyles: SystemStyleObject = {
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
  _hover: {},
};

export const linkButtonStyles: SystemStyleObject = {
  ...accordionButtonStyles,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgColor: "#E5E7EB",
  textDecoration: "none",
};

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
  },
};

export const projectBoxStylesV2 = (isOpen: boolean): SystemStyleObject => ({
  w: "100%",
  ".accordionItem": {
    background: "#F3F4F6",
    color: "#000000",
    borderRadius: "10px",
    fontSize: "17px",
    fontWeight: 500,
    ".header": {
      borderRadius: "10px 10px 0 0",
      padding: "12px 24px",
      alignItems: "center",
      bgColor: "white",
      img: {
        mr: "15px",
      },
      pb: "10px",
      p: {
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "22px",
      },
    },
    ".description": {
      px: "30px",
      pt: "30px",
      pb: "30px",
      flexDir: "column",
      p: { mb: isOpen ? "0px" : "30px" },
    },
    ".accordionPanel": {
      p: 0,
    },
  },
});

