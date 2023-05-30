import { Container, Label, Input, Btn, RadioLabel, Radio, Wrap, RadioWrap } from '../NP/NP.styled';

const Meest = () => {
  return (
    <Container>
      <RadioWrap>
        <RadioLabel>
          <Radio
            type="radio"
            value="Відділення"
            name="Meest"
          />
          У відділення
        </RadioLabel>
        <RadioLabel>
          <Radio
            type="radio"
            value="Кур'єр"
            name="Meest"
          />
          Кур&apos;єром
        </RadioLabel>
      </RadioWrap>
      <Wrap>
        <Label>
          Місто<span>*</span>
          <Input />
        </Label>
        <Label>
          Відділення<span>*</span>
          <Input />
        </Label>
      </Wrap>
      <Btn>Продовжити</Btn>
    </Container>
  );
};

export default Meest;
