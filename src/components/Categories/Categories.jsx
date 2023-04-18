import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { List, Nav, Text, Wrapper } from './Categories.styled';
import { CategoriesCard } from './CategoriesCard/CategoriesCard';
import { selectCategories } from '../../redux/products/selectors';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const data = useSelector(selectCategories);
  useEffect(() => {
    setCategories(data);
  }, [data]);

  return (
    <Wrapper>
      <Text>Категорії</Text>
      <Nav>
        <List>
          {categories.map((item) => (
            <CategoriesCard
              key={item.id}
              id={item.id}
              img={item.image}
              category={item.name_multilang.uk}
            />
          ))}
        </List>
      </Nav>
    </Wrapper>
  );
};
