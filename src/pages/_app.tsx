import { ThemeProvider } from "@src/styles/theme/ThemeProvider";
import type { AppProps } from "next/app";

import "@src/styles/globals.css";

import { Layout } from "@src/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
