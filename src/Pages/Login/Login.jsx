import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const { googleSignIn, login, successToast, errorToast } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    setTimeout(() => {
      navigate(location?.state ? location.state : "/");
    },1000);
  }; 

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);

    login(email, password)
      .then((userCredential) => {
        successToast("Login Successfull");
        navigateToHomePage();
      })
      .catch((error) => {
        errorToast("You have entered an invalid Email Or Password");
      });
  };

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 border">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
                />
              </div>
              <button
                type="submit"
                className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600"
              >
                Sign in
              </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
              <p className="px-3 text-sm text-gray-600">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
                onClick={() => {
                  googleSignIn();
                  navigateToHomePage();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 text-gray-600">
              Don't have an account?
              <span className="text-blue-700">
                <Link to="/register"> Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};
export default Login;
