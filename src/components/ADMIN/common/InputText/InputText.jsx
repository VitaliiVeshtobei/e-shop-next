import { Input, Label, Wrapper } from './InputText.styled';

export const InputText = ({ label, type, children, register, error, onChange }) => {
  return (
    <Wrapper>
      <Input
        id={label}
        type={type}
        placeholder=" "
        {...register}
        errorStatus={error}
        onChange={onChange}
      />
      <Label
        htmlFor={label}
        errorStatus={error}
      >
        <span>{label}</span>
      </Label>
      {children}
    </Wrapper>
  );
};
