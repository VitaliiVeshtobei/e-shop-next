import Image from 'next/image';
import React from 'react';
import { Title, Subtitle, Container } from './NotFound.styled';

const NotFound = () => {
  return (
    <div>
      <Container>
        <Image
          src="/images/404.jpg"
          alt="not found"
          width={500}
          height={500}
        />

        <div>
          <Title>Page Not Found</Title>
          <Subtitle>The page you are looking for does not exist.</Subtitle>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
