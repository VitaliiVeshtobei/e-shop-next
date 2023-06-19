import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Container, Box } from './WrapperStyled';

export default function Wrapper({ children }) {
  return (
    <Box>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Box>
  );
}
