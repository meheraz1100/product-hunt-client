import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { CiMenuBurger } from "react-icons/ci";
 
const Aside = () => {
  const {
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    checkedBrand,
    setCheckedBrand,
    checkedCategory,
    setCheckedCategory,
    currentPage,
  } = useContext(AuthContext);

  const queryClient = useQueryClient();

  useEffect(() => {
    axios
      .get(
        `https://server-side-seven-xi.vercel.app/products?brandChecked=${checkedBrand}&categoryChecked=${checkedCategory}&minPrice=${minValue}&maxPrice=${maxValue}&page=${currentPage}`
      )
      .then((response) => [
        queryClient.setQueryData(["products"], response.data),
      ]);
  }, [checkedBrand, checkedCategory, minValue, maxValue, currentPage, queryClient]);

  const handleBrandCheckboxChange = async (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setCheckedBrand([...checkedBrand, value]);
    } else {
      setCheckedBrand(checkedBrand.filter((item) => item !== value));
    }
  };

  const handleCateogryCheckedBoxChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setCheckedCategory([...checkedCategory, value]);
    } else {
      setCheckedCategory(checkedCategory.filter((item) => item !== value));
    }
  };

  return (
    <>
      <div className="">
        <div className="drawer lg:drawer-open max-h-screen z-10">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn text-black ml-3 drawer-button lg:hidden"
            >
              <CiMenuBurger />
            </label>
          </div>
          <div className="drawer-side h-full">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="text-base-content h-full w-80">
              <div className="w-full">
                <div className="space-y-2">
                  {/* Price Range */}
                  <div className="bg-white rounded-md drop-shadow-sm">
                    <div className="pt-5 px-5">
                      <p className="text-xl">Price Range</p>
                    </div>
                    <div className="divider m-0 p-0"></div>
                    <div className="pl-5 px-5 pb-5">
                      <div className="space-y-3">
                        <div>
                          <div className="grid grid-cols-2 gap-10">
                            <span>
                              <span>Min: </span>
                              <input
                                type="text"
                                className="border text-center max-w-20"
                                placeholder={minValue}
                                onChange={(event) => {
                                  setMinValue(event.target.value);
                                }}
                              />
                            </span>
                            <span>
                              <span>Max: </span>
                              <input
                                type="text"
                                className="border text-center max-w-20"
                                placeholder={maxValue}
                                onChange={(event) => {
                                  setMaxValue(event.target.value);
                                }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Brand Section */}
                  <div className="bg-white rounded-md drop-shadow-sm">
                    <div className="pt-5 px-5">
                      <p className="text-xl">Brand Name</p>
                    </div>
                    <div className="divider m-0 p-0"></div>
                    <ul className="pl-5 pb-5">
                      <li>
                        <input
                          type="checkbox"
                          value="Apple"
                          onChange={handleBrandCheckboxChange}
                        />
                        <span> Apple</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Samsung"
                          onChange={handleBrandCheckboxChange}
                        />
                        <span> Samsung</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Xiaomi"
                          onChange={handleBrandCheckboxChange}
                        />
                        <span> Xiaomi</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Tecno"
                          onChange={handleBrandCheckboxChange}
                        />
                        <span> Tecno</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Adidas"
                          onChange={handleBrandCheckboxChange}
                        />
                        <span> Adidas</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Nike"
                          onChange={handleBrandCheckboxChange}
                        />
                        <span> Nike</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="JBL"
                          onChange={handleBrandCheckboxChange}
                        />
                        <span> JBL</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category Section */}
                  <div className="bg-white rounded-md drop-shadow-sm">
                    <div className="pt-5 px-5">
                      <p className="text-xl">Category</p>
                    </div>
                    <div className="divider m-0 p-0"></div>
                    <ul className="pl-5 pb-5">
                      <li>
                        <input
                          type="checkbox"
                          value="Mobile"
                          onChange={handleCateogryCheckedBoxChange}
                        />{" "}
                        <span> Mobile</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Watch"
                          onChange={handleCateogryCheckedBoxChange}
                        />{" "}
                        <span> Watch</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Sneaker"
                          onChange={handleCateogryCheckedBoxChange}
                        />{" "}
                        <span> Sneaker</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Laptop"
                          onChange={handleCateogryCheckedBoxChange}
                        />{" "}
                        <span> Laptop</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Earphones"
                          onChange={handleCateogryCheckedBoxChange}
                        />{" "}
                        <span> Earphones</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Earbuds"
                          onChange={handleCateogryCheckedBoxChange}
                        />{" "}
                        <span> Earbuds</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Cap"
                          onChange={handleCateogryCheckedBoxChange}
                        />{" "}
                        <span> Cap</span>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          value="Bag"
                          onChange={handleCateogryCheckedBoxChange}
                        />{" "}
                        <span> Bag</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aside;
