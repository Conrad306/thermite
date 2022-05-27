import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorageValue } from '@mantine/hooks';
import { useEffect } from "react";
import '../styles/globals.css'
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  



  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}