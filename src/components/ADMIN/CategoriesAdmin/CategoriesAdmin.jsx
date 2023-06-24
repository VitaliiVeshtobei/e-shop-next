import React, { useState } from 'react';

import { useCategoryStore } from './useCategoryStore';

import { CategoriesCardAdmin } from './CategoriesCardAdmin/CategoriesCardAdmin';
import { OptionButtons } from '../OptionButtons/OptionButtons';
import { CategoriesListStyled } from './CategoriesAdmin.styled';
import { useRouter } from 'next/router';

export const CategoriesAdmin = ({ categories: initialCategories }) => {
  const router = useRouter();
  const { categories, deleteCategoriesById, refetchCategories } = useCategoryStore(initialCategories);
  const [checkedData, setCheckedData] = useState([]);

  const deleteCheckedDate = async () => {
    await deleteCategoriesById(checkedData);
    await refetchCategories();
  };

  const listBtn = [
    { key: 'create', type: 'button', text: ' Створити категорію', onClick: () => router.push('category/create') },
    { key: 'update', type: 'button', text: ' Редагувати', onClick: () => console.log('Я вже скоро буду працювати :)') },
    { key: 'delete', type: 'button', text: ' Видалити', onClick: deleteCheckedDate },
  ];

  return (
    <>
      <OptionButtons listBtn={listBtn} />
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
