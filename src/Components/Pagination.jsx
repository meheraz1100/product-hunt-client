import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Pagination = ({
  handlePageClick,
  handlePrevPage,
  handleNextPage,
  pages,
}) => { 
  const { currentPage } = useContext(AuthContext);

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="flex justify-center space-x-1 dark:text-gray-800">
          <button
            onClick={handlePrevPage}
            type="button"
            className="btn btn-square"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          {pages.map((page) => (
            <input
              key={page}
              onClick={() => handlePageClick(page)}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={page}
              checked={currentPage === page ? "selected" : undefined}
            />
          ))}
          <button
            onClick={handleNextPage}
            type="button"
            className="btn btn-square"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default Pagination;
