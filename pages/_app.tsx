import { MantineProvider } from "@mantine/core";
import { AnimateSharedLayout } from "framer-motion";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        dir: "rtl",
        /** Put your mantine theme override here */
        colorScheme: "dark",
        primaryColor: "blue",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
