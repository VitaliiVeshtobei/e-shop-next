import { Container, Label, Input, Btn, RadioLabel, Radio, Wrap, RadioWrap } from '../NP/NP.styled';

const Ukrposhta = () => {
  return (
    <Container>
      <RadioWrap>
        <RadioLabel>
          <Radio
            type="radio"
            value="Відділення"
            name="UkrPoshta"
          />
          У відділення
        </RadioLabel>
        <RadioLabel>
          <Radio
            type="radio"
            value="Кур'єр"
            name="UkrPoshta"
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

export default Ukrposhta;
