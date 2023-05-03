import {
  DeepPartial,
  extendTheme,
  theme as defaultTheme,
  ThemeOverride,
} from "@chakra-ui/react";

const themeConfig: DeepPartial<ThemeOverride> = {
  styles: {
    global: () => ({
      html: {
        height: "100%",
      },
      body: {
        height: "100%",
        bg: "#D2D5DA",
        color: "black",
      },
      "#__next": {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      },
    }),
  },
  breakpoints: {
    sm: "375px",
    md: "768px",
    xl: "1440px",
  },
  config: {
    initialColorMode: "light",
  },
  components: {
    ...defaultTheme.components,
  },
};

export const mainTheme = extendTheme(themeConfig, defaultTheme);
