import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'

type PaginationProps = {
    currentPage: number,
    handleChangePage: any
}

const Pagination: React.FC<PaginationProps> = ({currentPage, handleChangePage}) => {

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
      />
  );
};

export default Pagination;