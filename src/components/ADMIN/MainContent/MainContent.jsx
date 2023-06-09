import React from 'react';
import { Table } from './Table/Table';
import { ListButtons } from './ListButtons/ListButtons';

export const MainContent = ({ data }) => {
  return (
    <>
      <ListButtons />
      <Table data={data} />
    </>
  );
};
