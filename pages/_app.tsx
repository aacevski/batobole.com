import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NextSeo title="bato bole" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
