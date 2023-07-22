import { Table } from './TableAdmin.styled';

export const TableAdmin = ({ children, listThead }) => {
  return (
    <Table>
      <thead>
        <tr>{listThead && listThead.map((thead) => <th key={thead}>{thead}</th>)}</tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};
