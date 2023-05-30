import { Container, Label, Input, Btn, RadioLabel, Radio, Wrap, RadioWrap } from './NP.styled';
const NP = () => {
  return (
    <Container>
      <RadioWrap>
        <RadioLabel>
          <Radio
            type="radio"
            value="Відділення"
            name="NP"
          />
          У відділення
        </RadioLabel>
        <RadioLabel>
          <Radio
            type="radio"
            value="Поштомат"
            name="NP"
          />
          У поштомат
        </RadioLabel>
        <RadioLabel>
          <Radio
            type="radio"
            value="Кур'єр"
            name="NP"
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

export default NP;
