import React from "react";
import "./PaginatedList.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="pagination">
            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => onPageChange(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;