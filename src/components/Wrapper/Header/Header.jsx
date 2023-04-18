import React from 'react';
import Location from './Location/Location';
import NavBar from './NavBar/NavBar';
import Search from './Search/Search';
import { Navigation } from '@/components/Navigation/Navigation';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <Location />
      <Search />
      <NavBar />
      {router.pathname !== '/' && <Navigation />}
    </header>
  );
};

export default React.memo(Header);
