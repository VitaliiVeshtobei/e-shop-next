import { Container, Text } from './Message.styled';

export const Message = ({ text, status }) => {
  return (
    <Container status={status}>
      <Text>{text}</Text>
    </Container>
  );
};
