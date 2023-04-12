import { selectCategories } from '@/redux/products/selectors';

import { useSelector } from 'react-redux';
import {
  Button,
  Container,
  ContainerPrice,
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
import Link from 'next/link';

export const FilterBar = ({ data }) => {
  const router = useRouter();
  const { category } = router.query;

  const categoriesList = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAvailable, setSelectedAvailable] = useState('');
  const [status, setStatus] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const localCategories = typeof window !== 'undefined' ? window.localStorage.getItem('categories') : null;
    const categoriesLocal = localCategories ? JSON.parse(localCategories) : categoriesList;
    setCategories(categoriesLocal);
    if (category === 'all') {
      setSelectedCategory(category);
    }
  }, [categoriesList, category]);

  const [available, setAvailable] = useState(0);
  const [notAvailable, setNotAvailable] = useState(0);

  useEffect(() => {
    let available = 0;
    let notAvailable = 0;
    data.map((item) => {
      if (item.in_stock) {
        return ++available;
      }
      return ++notAvailable;
    });
    setAvailable(available);
    setNotAvailable(notAvailable);
  }, [data, selectedCategory]);

  const hendleClickCategories = (event) => {
    const { id, value } = event.target;
    const ctatusId = id === 'all' ? id : +id;
    setStatus(true);
    if (value === 'all') {
      router.push({
        pathname: '/products',
        query: { category: 'all' },
      });
      return setSelectedCategory('all');
    }
    setSelectedCategory(ctatusId);
    router.push({
      pathname: '/products',
      query: { category: id },
    });
  };

  useEffect(() => {
    if (category !== 'undefined' && !status && selectedCategory === 'all') {
      if (category === 'all') {
        return setSelectedCategory(category);
      }
      return setSelectedCategory(+category);
    }
  }, [category, selectedCategory, status]);

  const hendleClickIcon = (event) => {
    if (event === selectedCategory) {
      router.push({
        pathname: '/products',
        query: { category: 'all' },
      });
      return setSelectedCategory('all');
    }
    setSelectedCategory(event);
    router.push({
      pathname: '/products',
      query: { category: event },
    });
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
    setSelectedCategory('all');
    setStatus(true);
    router.push({
      pathname: '/products',
      query: { category: 'all' },
    });
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
            value={'all'}
            checked={selectedCategory === 'all'}
            onChange={hendleClickCategories}
            onClick={hendleClickCategories}
          />
          <Label htmlFor="all">Всі товари</Label>
          <Icon onClick={() => hendleClickIcon('all')} />
        </Item>
        {categories.length >= 0 &&
          categories.map(({ name_multilang, id }) => {
            return (
              <Item key={name_multilang.uk}>
                <Link href="#">
                  <InputContainer
                    name="categories"
                    id={id}
                    style={{ marginRight: '12px' }}
                    type="radio"
                    value={name_multilang.uk}
                    checked={selectedCategory === id}
                    onChange={hendleClickCategories}
                    onClick={hendleClickCategories}
                  />
                  <Label htmlFor={id}>{name_multilang.uk}</Label>
                  <Icon onClick={() => hendleClickIcon(id)} />
                </Link>
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
      <ContainerPrice className="price-slider-container">
        <PriceInput />
      </ContainerPrice>
    </Wrapper>
  );
};
