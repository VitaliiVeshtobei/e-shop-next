import { PaginationStyled } from './Pagination.styled';

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <>
      {pageCount > 1 && (
        <PaginationStyled
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          // initialPage={0}
        />
      )}
    </>
  );
};

export default Pagination;
