import React from 'react';
import Location from './Location/Location';
import NavBar from './NavBar/NavBar';
import Search from './Search/Search';

const Header = () => {
  return (
    <>
      <Location />
      <Search />
      <NavBar />
    </>
  );
};

export default Header;
