import { Label, Textarea, Wrapper } from './InputTextarea.styled';

export const InputTextarea = ({ label, children, register, error, onChange }) => {
  return (
    <Wrapper>
      <Textarea
        id={label}
        rows="5"
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
