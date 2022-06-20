import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'

const Pagination = ({currentPage, handleChangePage}) => {
  return (
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => handleChangePage(e.selected + 1)}
        pageRangeDisplayed={8}
        pageCount={3}
        forcePage={currentPage -1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
  );
};

export default Pagination;