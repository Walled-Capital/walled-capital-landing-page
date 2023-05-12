import { ThemeProvider } from "@src/styles/theme/ThemeProvider";
import localFont from "next/font/local";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import type { AppProps } from "next/app";

import "@src/styles/globals.css";
import { Layout } from "@src/components/layout";

const Interphases = localFont({
  src: "../assets/font/TTInterphasesProTrialRegular.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCH_KEY!}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <Layout className={Interphases.className}>
          <Component {...pageProps} />
        </Layout>
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}
