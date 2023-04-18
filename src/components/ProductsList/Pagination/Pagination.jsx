import { PaginationStyled } from './Pagination.styled';

const Pagination = ({ pageCount, handlePageClick, currentPage }) => {
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
          forcePage={currentPage}
        />
      )}
    </>
  );
};

export default Pagination;
