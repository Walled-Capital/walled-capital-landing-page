import {
  DeepPartial,
  extendTheme,
  theme as defaultTheme,
  ThemeOverride,
} from "@chakra-ui/react";
import { Button } from "@src/styles/theme/components/button";

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
    md: "835px",
    xl: "1440px",
  },
  config: {
    initialColorMode: "light",
  },
  components: {
    ...defaultTheme.components,
    Button,
  },
};

export const mainTheme = extendTheme(themeConfig, defaultTheme);
