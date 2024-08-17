import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <>
      <div>
        <div className="bg-base-100 ">
          {" "}
          <div className="navbar max-w-7xl mx-auto mb-5">
            <div className="navbar-start">
              <p className="text-xl font-semibold">
                product<span className="text-primary">Finder</span>
              </p>
            </div>
            <div className="navbar-end">
              <button
                onClick={() => {
                  logOut();
                }}
                className="btn btn-primary text-white"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
