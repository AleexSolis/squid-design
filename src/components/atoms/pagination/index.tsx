import React, { MouseEvent, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PaginationProps } from "./types";
import "./style.scss";

const range = (start: number, stop: number, step: number = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const Pagination = ({ records, recordsPerPage, onChangePage }: PaginationProps) => {
  const [pages] = useState(range(1, Math.ceil(records / recordsPerPage)));
  const [currentPage, setCurrentPage] = useState(1);
  const finalPage = pages.length;

  const onClick = (event: MouseEvent, page: number) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const prevPage = (event: MouseEvent) => {
    event.preventDefault();
    setCurrentPage((prevPage) => (prevPage !== 1 ? prevPage - 1 : 1));
  };

  const nextPage = (event: MouseEvent) => {
    event.preventDefault();
    setCurrentPage((prevPage) => (prevPage !== pages[finalPage - 1] ? prevPage + 1 : finalPage));
  };

  useEffect(() => {
    if (onChangePage) onChangePage(currentPage);
  }, [currentPage]);

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>
        &laquo;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={(event: MouseEvent) => onClick(event, page)}
          className={`${currentPage === page ? "active" : ""}`}
        >
          {page}
        </button>
      ))}
      <button onClick={nextPage} disabled={currentPage === finalPage}>
        &raquo;
      </button>
    </div>
  );
};

Pagination.defaultProps = {
  records: 10,
  recordsPerPage: 10,
};

Pagination.propTypes = {
  records: PropTypes.number.isRequired,
  recordsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
