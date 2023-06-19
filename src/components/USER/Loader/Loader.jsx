import React from 'react';
import { Backdrop } from './Loader.styled';
import { PulseLoader } from 'react-spinners';
import { BackdropLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <BackdropLoader>
      <PulseLoader
        color="#EDA415"
        size={25}
      />
    </BackdropLoader>
  );
};
