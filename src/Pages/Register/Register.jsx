import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const Register = () => {
  const { createUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [showName, setShowName] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
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
    <div className="my-10">
      <h1 className="text-center text-4xl font-bold">Please Register</h1>
      <div className="hero">
        <div className="hero-content  lg:w-1/2">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-5">
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
                <button className="btn bg-[#1d4734] text-white">
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

export default Register;
