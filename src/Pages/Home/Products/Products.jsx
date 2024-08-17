import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Product from "../Product/Product";
import Pagination from "../../../Components/Pagination";
// eslint-disable-next-line
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Products = () => {
  
  const { currentPage, setCurrentPage } = useContext(AuthContext);

  const itemsPerPage = 10;
  // eslint-disable-next-line
  const queryClient = useQueryClient();

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/products");
      return response.data;
    },
  });

  const { data: productLength = [] } = useQuery({
    queryKey: ["productLength"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/products-length");
      return response.data;
    },
  });

  const numberOfPages = Math.ceil(productLength.length / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div>
          <Pagination
            currentPage={currentPage}
            handlePageClick={handlePageClick}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            pages={pages}
          />
        </div>
      </div>
    </>
  );
};
export default Products;
