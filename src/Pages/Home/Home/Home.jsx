import Aside from "../../../Components/Aside";
import Footer from "../../../Components/Footer";
import Navbar from "../../../Components/Navbar";
// import Pagination from "../../../Components/Pagination";
import SearchBar from "../../../Components/SearchBar";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <div className="sm:space-x-5 flex gap-5">
            <div className="max-w-2xl">
              <Aside />
            </div>
            <div className="flex-1">
              <div className="">
                <SearchBar />
              </div>
              <div>
                <Products />
              </div>
            </div>
          </div>
        </div>
        <div>
            <Footer/>
        </div>
      </div>
    </>
  );
};
export default Home;
