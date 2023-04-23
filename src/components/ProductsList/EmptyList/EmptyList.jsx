import { Container, ContainerIcon, Div, Icon, Text, Title } from './EmptyList.styled';

export const EmptyList = () => {
  return (
    <Container>
      <Title>Нічого не знайдено.</Title>
      <Text>Спробуйте змінити фільтр, або вибрати категорію.</Text>
      <ContainerIcon>
        <Icon />
        <Div />
      </ContainerIcon>
    </Container>
  );
};
