import React, { useState } from 'react';
import { Table } from './Table/Table';
import { ListButtons } from '../OptionButtons/OptionButtons';
import { useCategoryStore } from '../CategoriesAdmin/useCategoryStore';

export const MainContent = ({ data: initialData }) => {
  const { categories, deleteCategoriesById, refetchCategories } = useCategoryStore(initialData);
  const [checkedData, setCheckedData] = useState([]);

  const deleteCheckedDate = async () => {
    await deleteCategoriesById(checkedData);
    await refetchCategories();
  };

  return (
    <>
      <ListButtons deleteCheckedDate={deleteCheckedDate} />
      <Table
        data={categories}
        setCheckedData={setCheckedData}
        checkedData={checkedData}
      />
    </>
  );
};
