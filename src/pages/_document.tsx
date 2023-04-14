import { Html, Head, Main, NextScript } from "next/document";
import { MantineProvider } from "@mantine/core";

export default function Document() {
  return (
    <Html lang="en" data-theme="garden">
      <Head />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <body>
          <Main />
          <NextScript />
        </body>
      </MantineProvider>
    </Html>
  );
}
