import React from 'react';
import { useSelector } from 'react-redux';
import { List, Nav, Text, Wrapper } from './Categories.styled';
import { CategoriesCard } from './CategoriesCard/CategoriesCard';
import { selectCategories } from '../../redux/porducts/selectors';

export const Categories = () => {
  const data = useSelector(selectCategories);

  return (
    <Wrapper>
      <Text>Категорії</Text>
      <Nav>
        <List>
          {data.map((item) => (
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
