import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const Login = () => {
  const { Login, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    Login(email, password)
      .then((result) => {
        console.log(result);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="pt-36 py-10">
      <h1 className="text-center text-2xl">Please Login</h1>
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
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
