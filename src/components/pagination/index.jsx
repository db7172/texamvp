import PropTypes from "prop-types";
import React from "react";
import Paginations from "react-js-pagination";
import "./Pagination.css";
const Pagination = ({
  sizePerPage,
  totalNumberOfValues,
  currentPage,
  paginate,
  className,
}) => {
  return (
    <div className={className}>
      <Paginations
        activePage={currentPage}
        firstPageText="<<"
        itemClass="item"
        itemsCountPerPage={sizePerPage}
        lastPageText=">>"
        linkClass="link"
        nextPageText="Next"
        pageRangeDisplayed={5}
        prevPageText="Previous"
        totalItemsCount={totalNumberOfValues}
        onChange={paginate}
      />
    </div>
  );
};

Pagination.propTypes = {
  sizePerPage: PropTypes.number.isRequired,
  totalNumberOfValues: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Pagination;
