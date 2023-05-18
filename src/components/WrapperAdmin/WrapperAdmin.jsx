import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Navigation from './Navigation';

const WrapperAdmin = ({ children }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState('admin-panel');
  const router = useRouter();

  const handleButtonClick = (index, route) => {
    setActiveButtonIndex(index);
    router.push(route, undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>VicTar</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <div style={{ height: '100vh', display: 'flex' }}>
        <main
          style={{
            padding: '20px',
            boxSizing: 'border-box',
            position: 'fixed',
            minHeight: '100%',
            minWidth: '100%',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '250px 1fr',
              boxSizing: 'border-box',
              gap: '10px',
              height: 'calc(100vh - 40px)',
            }}
          >
            <Navigation
              activeButtonIndex={activeButtonIndex}
              handleButtonClick={handleButtonClick}
            />
            <div style={{ border: '1px solid #2121', overflow: 'auto' }}>{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default WrapperAdmin;
