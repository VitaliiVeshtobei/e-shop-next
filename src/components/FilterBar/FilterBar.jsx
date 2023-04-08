import { selectCategories } from '@/redux/products/selectors';

import { useSelector } from 'react-redux';
import {
  Button,
  Container,
  Header,
  Icon,
  InputContainer,
  Item,
  Label,
  Text,
  TextNumber,
  Wrapper,
} from './FilterBar.styled';
import { useState } from 'react';
import { PriceInput } from './PriceInput/PriceInput';

export const FilterBar = () => {
  const products = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAvailable, setSelectedAvailable] = useState('');
  const [total, setTotal] = useState(0);

  const hendleClickCategories = (event) => {
    const { value } = event.target;
    if (value === selectedCategory) {
      return setSelectedCategory('');
    }
    setSelectedCategory(value);
  };

  const nendleClickAvailable = (event) => {
    const { value } = event.target;
    if (value === selectedAvailable) {
      return setSelectedAvailable('');
    }
    setSelectedAvailable(value);
  };

  const resetInput = () => {
    setSelectedAvailable('');
    setSelectedCategory('');
  };

  return (
    <Wrapper>
      <Header>
        <Text>Категорії</Text>
        <Button
          type="button"
          onClick={resetInput}
        >
          Скасувати
        </Button>
      </Header>
      <Container>
        <Item key="all">
          <InputContainer
            name="categories"
            id="all"
            style={{ marginRight: '12px' }}
            type="radio"
            value={''}
            checked={selectedCategory === ''}
            onChange={hendleClickCategories}
            onClick={hendleClickCategories}
          />
          <Label htmlFor="all">Всі</Label>
          <Icon />
          <TextNumber>{total}</TextNumber>
        </Item>
        {products &&
          products.map(({ name_multilang, id }) => {
            return (
              <Item key={name_multilang.uk}>
                <InputContainer
                  name="categories"
                  id={id}
                  style={{ marginRight: '12px' }}
                  type="radio"
                  value={name_multilang.uk}
                  checked={selectedCategory === name_multilang.uk}
                  onChange={hendleClickCategories}
                  onClick={hendleClickCategories}
                />
                <Label htmlFor={id}>{name_multilang.uk}</Label>
                <Icon />
                <TextNumber>{total}</TextNumber>
              </Item>
            );
          })}
      </Container>
      <Container>
        <Text>Статус товару</Text>
        <Item key="available">
          <InputContainer
            id="available"
            style={{ marginRight: '12px' }}
            type="radio"
            name="available"
            value="В наявності"
            checked={selectedAvailable === 'В наявності'}
            onChange={nendleClickAvailable}
            onClick={nendleClickAvailable}
          />
          <Label htmlFor="available">В наявності</Label>
          <Icon />
          <TextNumber>{total}</TextNumber>
        </Item>
        <Item key="not-available">
          <InputContainer
            id="not-available"
            style={{ marginRight: '12px' }}
            type="radio"
            disabled
          />
          <Label htmlFor="not-available">Немає в наявності</Label>
          <Icon />
          <TextNumber>{total}</TextNumber>
        </Item>
      </Container>
      <Container className="price-slider-container">
        <PriceInput />
      </Container>
    </Wrapper>
  );
};
