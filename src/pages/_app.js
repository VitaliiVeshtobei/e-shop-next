import '@/styles/globals.css';
import Router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../public/theme/theme';
import { Loader } from '@/components/client/Loader/Loader';

import Wrapper from '@/components/client/Wrapper/Wrapper';
import { wrapper } from '@/redux/store';
import WrapperAdmin from '@/components/ADMIN/WrapperAdmin/WrapperAdmin';
import { refreshUser } from '@/redux/user/operations';

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  let persistor = persistStore(store);
  const isAdminPage = router.pathname.includes('admin');

  const { dispatch } = store;

  useEffect(() => {
    async function getPersistedUserKeys() {
      const keysPromise = storage.getItem('persist:user');
      const keys = await keysPromise;

      if (keys) {
        const { accessToken, refreshToken } = JSON.parse(keys);
        if (accessToken && refreshToken) {
          dispatch(refreshUser());
        }
      }
    }
    getPersistedUserKeys();
  }, [dispatch]);

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
              <Component {...props.pageProps} />
              <ToastContainer style={{ zIndex: 99999 }} />
              <div id="root-backdrop"></div>
            </WrapperAdmin>
          ) : (
            <Wrapper>
              {isLoading && <Loader />}
              <Component {...props.pageProps} />
              <ToastContainer style={{ zIndex: 99999 }} />
              <div id="root-backdrop"></div>
            </Wrapper>
          )}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
