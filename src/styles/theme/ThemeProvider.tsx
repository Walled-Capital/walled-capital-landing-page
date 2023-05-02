import { FC, useMemo } from "react";
import { GetServerSideProps } from "next";
import {
  ChakraProvider,
  ChakraProviderProps,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";

import { mainTheme } from "@src/styles/theme/theme";

interface IProps {
  cookies?: string;
}

export const ThemeProvider: FC<IProps & ChakraProviderProps> = ({
  cookies,
  children,
  theme = mainTheme,
}) => {
  const colorModeManager = useMemo(
    () =>
      typeof cookies === "string"
        ? cookieStorageManagerSSR(cookies)
        : localStorageManager,
    [cookies]
  );

  return (
    <ChakraProvider resetCSS theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => ({
  props: {
    cookies: req.headers.cookie ?? "",
  },
});
