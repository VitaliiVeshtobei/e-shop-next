import React, { useState } from 'react';

import { useCategoryStore } from './useCategoryStore';

import { CategoriesCardAdmin } from './CategoriesCardAdmin/CategoriesCardAdmin';
import { OptionButtons } from '../OptionButtons/OptionButtons';
import { CategoriesListStyled } from './CategoriesAdmin.styled';

export const CategoriesAdmin = ({ categories: initialCategories }) => {
  const { categories, deleteCategoriesById, refetchCategories } = useCategoryStore(initialCategories);
  const [checkedData, setCheckedData] = useState([]);

  const deleteCheckedDate = async () => {
    await deleteCategoriesById(checkedData);
    await refetchCategories();
  };

  return (
    <>
      <OptionButtons deleteCheckedDate={deleteCheckedDate} />

      <CategoriesListStyled>
        {categories?.map((category) => (
          <CategoriesCardAdmin
            key={category._id}
            id={category._id}
            img={category.image}
            category={category.name}
            setCheckedData={setCheckedData}
            checkedData={checkedData}
          />
        ))}
      </CategoriesListStyled>
    </>
  );
};
