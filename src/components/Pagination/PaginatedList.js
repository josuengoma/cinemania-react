import { useState } from "react";
import './PaginatedList.css'

const PaginatedList = ({ data, Component, itemsPerPage = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = data.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <div className="box-container">
        {currentItems.map((item) => (
          <Component key={item.id} {...item} />
        ))}
      </div>

      {/* Simple pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default PaginatedList;