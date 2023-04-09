import { selectCategories, selectProductsByCategory } from '@/redux/products/selectors';

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
import { useEffect, useState } from 'react';
import { PriceInput } from './PriceInput/PriceInput';
import { useRouter } from 'next/router';

export const FilterBar = ({ selectedCategory, setSelectedCategory, selectedAvailable, setSelectedAvailable }) => {
  const router = useRouter();
  const { category } = router.query;

  const products = useSelector(selectProductsByCategory);

  const [total, setTotal] = useState([]);
  const [available, setAvailable] = useState(0);
  const [notAvailable, setNotAvailable] = useState(0);

  useEffect(() => {
    const res = products.reduce((acc, cur) => {
      if (!acc[cur.group.id]) {
        acc[cur.group.id] = { idCategory: cur.group.id, total: 0, name_multilang: cur.group.name_multilang };
      }
      acc[cur.group.id].total++;
      return acc;
    }, {});
    const resultArray = Object.values(res);
    setTotal(resultArray.reverse());
  }, [products]);

  useEffect(() => {
    let available = 0;
    let notAvailable = 0;
    products.map((item) => {
      if (item.in_stock) {
        return ++available;
      }
      return ++notAvailable;
    });
    setAvailable(available);
    setNotAvailable(notAvailable);
  }, [products, selectedCategory]);

  const hendleClickCategories = (event) => {
    const { id, value } = event.target;
    const ctatusId = id === '' ? id : +id;
    if (ctatusId === selectedCategory || value === '') {
      return setSelectedCategory('');
    }
    setSelectedCategory(ctatusId);
  };

  useEffect(() => {
    if (category !== undefined && selectedCategory === '') {
      return setSelectedCategory(+category);
    }
    if (category === undefined && selectedCategory === '') {
      return setSelectedCategory('');
    }
  }, [category, selectedCategory]);

  const hendleClickIcon = (event) => {
    if (+event === selectedCategory) {
      return setSelectedCategory('');
    }
    setSelectedCategory(+event);
  };

  const hendleClickAvailable = (event) => {
    const { value } = event.target;
    if (value === selectedAvailable) {
      return setSelectedAvailable('');
    }
    setSelectedAvailable(value);
  };

  const hendleClickAvailableIcon = (event) => {
    if (event === selectedAvailable) {
      return setSelectedAvailable('');
    }
    setSelectedAvailable(event);
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
        {!category && (
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
            <Label htmlFor="all">Всі товари</Label>
            <Icon onClick={() => hendleClickIcon('')} />
            <TextNumber>{products.length}</TextNumber>
          </Item>
        )}
        {total.length >= 0 &&
          total.map(({ name_multilang, idCategory, total }) => {
            return (
              <Item key={name_multilang.uk}>
                <InputContainer
                  name="categories"
                  id={idCategory}
                  style={{ marginRight: '12px' }}
                  type="radio"
                  value={name_multilang.uk}
                  checked={selectedCategory === +idCategory}
                  onChange={hendleClickCategories}
                  onClick={hendleClickCategories}
                />
                <Label htmlFor={idCategory}>{name_multilang.uk}</Label>
                <Icon onClick={() => hendleClickIcon(idCategory)} />
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
            onChange={hendleClickAvailable}
            onClick={hendleClickAvailable}
          />
          <Label htmlFor="available">В наявності</Label>
          <Icon onClick={() => hendleClickAvailableIcon('В наявності')} />
          <TextNumber>{available}</TextNumber>
        </Item>
        <Item key="not-available">
          <InputContainer
            id="not-available"
            style={{ marginRight: '12px' }}
            type="radio"
            disabled
          />
          <Label htmlFor="not-available">Немає в наявності</Label>
          <Icon onClick={() => hendleClickAvailableIcon('')} />
          <TextNumber>{notAvailable}</TextNumber>
        </Item>
      </Container>
      <Container className="price-slider-container">
        <PriceInput />
      </Container>
    </Wrapper>
  );
};
