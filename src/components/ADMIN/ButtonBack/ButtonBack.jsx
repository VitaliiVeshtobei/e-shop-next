import { Button } from './ButtonBack.styled';

export const ButtonBack = ({ onClick }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
    >
      Назад
    </Button>
  );
};
