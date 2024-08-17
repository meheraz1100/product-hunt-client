import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer } from "react-toastify";

const Register = () => {
  const { register, updateUser, successToast, errorToast } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const navigateToHomePage = () => {
    setTimeout(() => {
      navigate("/");
      location.reload();
    }, 2000);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    register(email, password).then((userCredential) => {
      updateUser(name)
        .then(() => {
          successToast("Registration Successful");
          event.target.reset();
          navigateToHomePage();
        })
        .catch((error) => {
          errorToast(error.message);
        });
    });

    console.log(name, email, password);
  };
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 border">
            <h1 className="text-2xl font-bold text-start">Create an Account</h1>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
                />
              </div>
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
              <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">
                Create Account
              </button>
            </form>
            <p className="text-xs text-center sm:px-6 text-gray-600">
              Already have an Account?
              <span className="text-blue-700">
                <Link to="/login"> Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};
export default Register;
