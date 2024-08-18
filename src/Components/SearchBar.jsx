import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const SearchBar = () => {
  const queryClient = useQueryClient();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const searchtText = event.target.search.value;
    console.log(searchtText);
    const response = await axios.get(
      `https://server-side-seven-xi.vercel.app/products?name=${searchtText}`
    );
    queryClient.setQueryData(["products"], response.data);
  };

  const handleSelectFilter = async (event) => {
    console.log(event.target.value);
    const response = await axios.get(
      `https://server-side-seven-xi.vercel.app/products?filters=${event.target.value}`
    );
    queryClient.setQueryData(["products"], response.data);
  };

  return (
    <>
      <div className="">
        <div className="bg-white p-2 rounded-xl mb-2 drop-shadow-sm">
          <div className="flex gap-5 justify-end">
            <form onSubmit={handleFormSubmit} className="flex gap-2">
              <label className="border px-5 rounded-xl flex items-center gap-2">
                <input
                  type="text"
                  className="focus:outline-none w-5 md:w-full"
                  name="search"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <button
                type="submit"
                className="btn btn-primary text-white font-bold"
              >
                SEARCH
              </button>
            </form>
            <div>
              <label className="flex justify-center items-center border rounded-xl">
                <select
                  onChange={handleSelectFilter}
                  className="select focus:outline-none"
                >
                  <option disabled selected value="">
                    Filters:
                  </option>
                  <option value="LowToHigh">Price Low to High</option>
                  <option value="HighToLow">Price High to Low</option>
                  <option value="NewFirst">Newest First</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
