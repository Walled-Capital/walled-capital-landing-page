import { ThemeProvider } from "@src/styles/theme/ThemeProvider";
import localFont from 'next/font/local'

import type { AppProps } from "next/app";

import "@src/styles/globals.css";

const Interphases = localFont({ src: '../assets/font/TTInterphasesProTrialRegular.ttf' })


import { Layout } from "@src/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout className={Interphases.className}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
