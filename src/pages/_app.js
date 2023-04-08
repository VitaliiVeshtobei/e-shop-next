import '@/styles/globals.css';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../public/theme/theme';
import { Loader } from '@/components/Loader/Loader';

import Wrapper from '@/components/Wrapper/Wrapper';
import { store } from '@/redux/store';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      setIsLoading(true);
    });

    Router.events.on('routeChangeComplete', (url) => {
      setIsLoading(false);
    });

    Router.events.on('routeChangeError', (url) => {
      setIsLoading(false);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Wrapper>
          {isLoading && <Loader />}
          <Component {...pageProps} />
          <div id="root-backdrop"></div>
        </Wrapper>
      </Provider>
    </ThemeProvider>
  );
}
