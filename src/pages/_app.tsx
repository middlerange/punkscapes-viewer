import React from 'react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/variable-full.css';
import { AppProps } from 'next/app';
import { theme } from '../theme';

function SEO() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      {/* Primary Meta Tags */}
      <title>PunkScapes</title>
      <meta name="title" content="PunkScapes" />

      <link rel="manifest" href="manifest.json" />
    </Head>
  );
}

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <SEO />
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default App;
