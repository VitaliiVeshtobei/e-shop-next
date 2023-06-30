import React, { useState } from 'react';

import { useCategoryStore } from './useCategoryStore';

import { CategoriesCardAdmin } from './CategoriesCardAdmin/CategoriesCardAdmin';
import { OptionButtons } from '../OptionButtons/OptionButtons';
import { CategoriesListStyled } from './CategoriesAdmin.styled';
import { useRouter } from 'next/router';
import { DeleteModalAdmin } from '../DeleteModalAdmin/DeleteModalAdmin';

export const CategoriesAdmin = ({ categories: initialCategories }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const router = useRouter();
  const { categories, deleteCategoriesById, refetchCategories } = useCategoryStore(initialCategories);
  const [checkedData, setCheckedData] = useState([]);

  const deleteCheckedDate = async () => {
    await deleteCategoriesById(checkedData);
    await refetchCategories();
    setCheckedData([]);
    setShowDeleteModal(false);
  };

  const listBtn = [
    { key: 'create', type: 'button', text: ' Створити категорію', onClick: () => router.push('category/create') },
    {
      key: 'update',
      type: 'button',
      text: ' Редагувати',
      disabled: checkedData.length !== 1,
      onClick: () =>
        checkedData.length === 1 && router.push({ pathname: 'category/edit', query: { id: checkedData[0] } }),
    },
    {
      key: 'delete',
      type: 'button',
      text: ' Видалити',
      disabled: !checkedData.length,
      onClick: () => setShowDeleteModal(true),
    },
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
      {showDeleteModal && (
        <DeleteModalAdmin
          text={`Ви точно бажаєте видалити ${checkedData.length} ${
            checkedData.length === 1 ? 'категорію' : 'категорії'
          }?`}
          deleteFunction={deleteCheckedDate}
          close={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
};
