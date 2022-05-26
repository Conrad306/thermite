import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorageValue } from '@mantine/hooks';
import { useEffect } from "react";
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  
  const [colorScheme, setColorScheme] =  useLocalStorageValue<ColorScheme>({
    key: 'theme',
    defaultValue: 'light',
});

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    colorScheme === 'dark' ? bodyClass.add(className) : bodyClass.remove(className);
  }, [colorScheme, colorScheme === 'dark']);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}