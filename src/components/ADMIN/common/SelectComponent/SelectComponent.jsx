import { Label, Option, Select, Wrapper } from './SelectComponent.styled';

export const SelectComponent = ({ label, children, register, error, onChange, list }) => {
  return (
    <>
      <Wrapper>
        <Select
          id={label}
          placeholder=" "
          {...register}
          errorStatus={error}
          onChange={onChange}
        >
          {list &&
            list.map(({ _id, name }) => (
              <Option
                key={_id}
                id={_id}
                value={name}
              >
                {name}
              </Option>
            ))}
        </Select>
        <Label
          htmlFor={label}
          errorStatus={error}
        >
          <span>{label}</span>
        </Label>
        {children}
      </Wrapper>
    </>
  );
};
