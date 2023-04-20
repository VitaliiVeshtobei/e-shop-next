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

export const FilterBar = ({ data, setSliderValue, setFilterStatus }) => {
  const router = useRouter();
  const { category } = router.query;

  const categoriesList = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAvailable, setSelectedAvailable] = useState('');
  const [status, setStatus] = useState(false);
  const [categories, setCategories] = useState([]);

  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  useEffect(() => {
    const localCategories = typeof window !== 'undefined' ? window.localStorage.getItem('categories') : null;
    const categoriesLocal = localCategories ? JSON.parse(localCategories) : categoriesList;
    setCategories(categoriesLocal);
    if (category === 'all') {
      setFilterStatus('');
      setSelectedCategory(category);
    }
  }, [categoriesList, category, setFilterStatus]);

  const [available, setAvailable] = useState(0);
  const [waiting, setWaiting] = useState(0);
  const [notAvailable, setNotAvailable] = useState(0);

  useEffect(() => {
    let available = 0;
    let notAvailable = 0;
    let waiting = 0;

    data.map((item) => {
      if (item.presence === 'available') {
        return ++available;
      }
      if (item.presence === 'waiting') {
        return ++waiting;
      }
      if (item.presence === 'not_available') {
        return ++notAvailable;
      }
    });
    setWaiting(waiting);
    setAvailable(available);
    setNotAvailable(notAvailable);
  }, [data, selectedCategory]);

  const hendleClickCategories = (event) => {
    const { id, value } = event.target;
    const ctatusId = id === 'all' ? id : +id;
    setStatus(true);
    setFilterStatus('');
    setSelectedAvailable('');

    if (+id === selectedCategory) {
      setFilterStatus('');
      router.push({
        pathname: '/products',
        query: { category: 'all' },
      });
      return setSelectedCategory('all');
    }

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
  }, [category, selectedCategory, setFilterStatus, status]);

  const hendleClickIcon = (event) => {
    setSelectedAvailable('');
    if (event === selectedCategory) {
      setFilterStatus('');
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
      setFilterStatus('');
      return setSelectedAvailable('');
    }
    setSelectedAvailable(value);
    setFilterStatus(event);
  };

  const hendleClickAvailableIcon = (event) => {
    if (event === selectedAvailable) {
      setFilterStatus('');
      return setSelectedAvailable('');
    }
    setSelectedAvailable(event);
    setFilterStatus(event);
  };

  const resetInput = () => {
    setFilterStatus('');
    setSelectedAvailable('');
    setSelectedCategory('all');
    setStatus(true);
    router.push({
      pathname: '/products',
      query: { category: 'all' },
    });
  };

  useEffect(() => {
    const price = data.map(({ price }) => price);
    const min = Math.min.apply(null, price);
    const max = Math.max.apply(null, price);

    setPriceMin(min);
    setPriceMax(max);

    setSliderValue([+min, +max]);
  }, [data, setSliderValue]);

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
              </Item>
            );
          })}
      </Container>
      <Container>
        <Text>Статус товару</Text>
        <Item key="available">
          <InputContainer
            id="available"
            type="radio"
            name="available"
            value="available"
            checked={selectedAvailable === 'available'}
            onChange={hendleClickAvailable}
            onClick={hendleClickAvailable}
          />
          <Label htmlFor="available">В наявності</Label>
          <Icon onClick={() => hendleClickAvailableIcon('available')} />
          <TextNumber>{available}</TextNumber>
        </Item>
        <Item
          key="waiting"
          disabled={!waiting}
        >
          <InputContainer
            id="waiting"
            type="radio"
            name="waiting"
            value="waiting"
            checked={selectedAvailable === 'waiting'}
            onChange={hendleClickAvailable}
            onClick={hendleClickAvailable}
            disabled={!waiting ? true : null}
          />
          <Label htmlFor="waiting">Очікується</Label>
          <Icon onClick={() => hendleClickAvailableIcon('waiting')} />
          <TextNumber>{waiting}</TextNumber>
        </Item>
        <Item
          key="not_available"
          disabled={!notAvailable}
        >
          <InputContainer
            id="not_available"
            type="radio"
            name="not_available"
            value="not_available"
            checked={selectedAvailable === 'not_available'}
            onChange={hendleClickAvailable}
            onClick={hendleClickAvailable}
            disabled={!notAvailable ? true : null}
          />
          <Label htmlFor="not_available">Немає в наявності</Label>
          <Icon onClick={() => hendleClickAvailableIcon('not_available')} />
          <TextNumber>{notAvailable}</TextNumber>
        </Item>
      </Container>
      <ContainerPrice className="price-slider-container">
        <PriceInput
          data={data}
          min={priceMin}
          max={priceMax}
          fnFilter={setSliderValue}
        />
      </ContainerPrice>
    </Wrapper>
  );
};
