import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const { Login, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setErrorMsg("");
    setSuccessMsg("");

    Login(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMsg("You have successfully Log in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.massege);
        setErrorMsg("Your password is incorrect");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        setSuccessMsg("You have successfully Log in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg("Your password is incorrect");
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result);
        setSuccessMsg("You have successfully Log in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg("Your password is incorrect");
      });
  };
  return (
    <div className="pt-36 py-10">
      <h1 className="text-center text-4xl font-bold text-green-900">Please Login</h1>
      <div className="hero">
        <div className="hero-content  lg:w-1/2">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-5">
            <form onSubmit={handleLogIn} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn rounded-xl bg-green-900 hover:bg-transparent border hover:border-green-900 text-white hover:text-green-900 ">
                  Login
                </button>
              </div>
            </form>
            <span className="text-center">
              Do not have an account ?{" "}
              <Link className="text-purple-500" to="/register">
                Register
              </Link>
            </span>
            <div className="px-8 py-5 flex gap-2 items-center justify-around">
              <button onClick={handleGoogleLogin} className="btn">
                <FaGoogle></FaGoogle>
                google
              </button>
              <button onClick={handleGithubLogin} className="btn">
                <FaGithub></FaGithub>
                Github
              </button>
            </div>
            <div className="text-center">
              {errorMsg && <p className="text-xl text-red-800">{errorMsg}</p>}
              {successMsg && (
                <p className="text-xl text-green-600">{successMsg}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
