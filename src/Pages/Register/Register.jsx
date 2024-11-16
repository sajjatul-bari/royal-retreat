import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { createUser, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showName, setShowName] = useState({});
  const [registerError, setResgisterError] = useState("");
  const [sucess, setSucess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);
    setResgisterError("");
    setSucess("");

    if (password.length < 6) {
      setResgisterError("please password should be 6 charecter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setResgisterError("You should use one upper case charecter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setResgisterError("You should use one lower case charecter");
      return;
    } else if (!/[0-9]/.test(password)) {
      setResgisterError("You should use one number charecter");
      return;
    } else if (!/[!@#$%^&*()\-__+.]/.test(password)) {
      setResgisterError("You should use one spcial charecter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSucess("user create suceessfully");
        navigate(location?.state ? location.state : "/login");
      })
      .catch((error) => {
        console.log(error);
        setResgisterError(error.message);
      });
  };

  return (
    <div className="pt-36 pb-12">
      <h1 className="text-center text-4xl font-bold text-green-900">
        Please Register
      </h1>
      <div className="hero">
        <div className="hero-content  lg:w-1/2">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-8">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="type3-1"
                  className="flex w-full max-w-[140px] flex-col space-y-2"
                >
                  <span className="label-text">Your photo</span>
                  <p className="w-80 truncate rounded-lg hover:shadow-[0px_0px_4px_0.5px] border-[1px] border-1 px-4 py-3 text-sm font-medium text-slate-500 ">
                    {showName.name ? showName.name : "CHOOSE FILE"}
                  </p>
                </label>
                <input
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const imageFile = e.target.files[0];
                      setShowName(imageFile);
                    }
                  }}
                  className="hidden"
                  type="file"
                  name="photo"
                  id="type3-1"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative mb-16">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered absolute w-full "
                    required
                  />
                  <span
                    className="absolute top-3 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <IoEye className="text-3xl"></IoEye>
                    ) : (
                      <IoEyeOff className="text-3xl"></IoEyeOff>
                    )}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn rounded-xl bg-green-900 hover:bg-transparent border hover:border-green-900 text-white hover:text-green-900">
                  Register
                </button>
              </div>
            </form>
            <span className="text-center">
              Already have an account ?
              <Link className="text-purple-500" to="/login">
                Login
              </Link>
            </span>
            <div>
              {registerError && (
                <p className="text-red-700 text-center">{registerError}</p>
              )}
              {sucess && <p className="text-green-700 text-center">{sucess}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
