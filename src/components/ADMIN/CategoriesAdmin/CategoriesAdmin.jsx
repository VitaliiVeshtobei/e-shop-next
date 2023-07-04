import React, { useState } from 'react';

import { useCategoryStore } from './useCategoryStore';
import { BsGridFill, BsJustify } from 'react-icons/bs';

import { CategoriesCardAdmin } from './CategoriesCardAdmin/CategoriesCardAdmin';
import { OptionButtons } from '../OptionButtons/OptionButtons';
import { ButtonChangeView, CategoriesListStyled, HeaderContainer, MainContainer } from './CategoriesAdmin.styled';
import { useRouter } from 'next/router';
import { DeleteModalAdmin } from '../DeleteModalAdmin/DeleteModalAdmin';
import { TableAdmin } from '../TableAdmin/TableAdmin';
import { CategoriesTableBodyAdmin } from './CategoriesTableBodyAdmin/CategoriesTableBodyAdmin';

const listThead = ['Вибрати', 'Категорія', 'Фото'];

export const CategoriesAdmin = ({ categories: initialCategories }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [viewWindow, setViewWindow] = useState(false);
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
      <MainContainer>
        <HeaderContainer>
          <ButtonChangeView
            type="button"
            onClick={() => setViewWindow(!viewWindow)}
          >
            {viewWindow ? <BsJustify /> : <BsGridFill />}
          </ButtonChangeView>
          <OptionButtons listBtn={listBtn} />
        </HeaderContainer>
        {!viewWindow ? (
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
        ) : (
          <TableAdmin listThead={listThead}>
            {categories.map((category) => (
              <CategoriesTableBodyAdmin
                key={category._id}
                id={category._id}
                img={category.image}
                category={category.name}
                setCheckedData={setCheckedData}
                checkedData={checkedData}
              />
            ))}
          </TableAdmin>
        )}
      </MainContainer>

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
