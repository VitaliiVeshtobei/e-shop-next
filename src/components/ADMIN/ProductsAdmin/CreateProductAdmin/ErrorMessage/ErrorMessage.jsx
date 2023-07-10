import { ErrorText } from './ErrorMessage.styled';

export const ErrorMessage = ({ text }) => {
  console.log(text);
  return <ErrorText>{text}</ErrorText>;
};
