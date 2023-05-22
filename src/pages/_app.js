import '@/styles/globals.css';
import Router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../public/theme/theme';
import { Loader } from '@/components/Loader/Loader';

import Wrapper from '@/components/Wrapper/Wrapper';
import { store } from '@/redux/store';
import WrapperAdmin from '@/components/WrapperAdmin/WrapperAdmin';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  let persistor = persistStore(store);
  const isAdminPage = router.pathname.includes('admin');

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
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          {isAdminPage ? (
            <WrapperAdmin>
              {isLoading && <Loader />}
              <Component {...pageProps} />
              <div id="root-backdrop"></div>
            </WrapperAdmin>
          ) : (
            <Wrapper>
              {isLoading && <Loader />}
              <Component {...pageProps} />
              <div id="root-backdrop"></div>
            </Wrapper>
          )}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
