import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";

const Login = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement ;
    let from =location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const [token] =useToken(user|| googleUser)
    const onSubmit = (data) => {

        signInWithEmailAndPassword(data.email, data.password);

      };

      if (loading || googleLoading) {
        return <Loading />;
      }
    
      let loginError;
    
      if (error || googleError) {
        loginError = (
          <p className="text-red-500">{error?.message || googleError?.message}</p>
        );
      }

    

  return (
    <div
      class="hero min-h-screen"
      
    >
  
      <div class="hero-overlay bg-opacity-90"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-full">
          <div className=" flex h-screen justify-center items-center">
            <div className="card w-96 bg-white text-primary-content drop-shadow-2xl">
              <div className="card-body">
                <h2 className="text-center font-bold text-4xl text-black">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full max-w-xs text-black"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is Required",
                        },

                        pattern: {
                          value: /[A-Za-z]{3}/,
                          message: "Provide Valid Email",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-400">
                          {errors.email.message}
                        </span>
                      )}

                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-400">
                          {errors.email.message}
                        </span>
                      )}
                    </label>

                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>

                    <input
                      type="password"
                      placeholder="Your Password"
                      className="input input-bordered w-full max-w-xs text-black"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-400">
                          {errors.password.message}
                        </span>
                      )}

                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-400">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {loginError}
                  <input
                    className="btn btn-outline w-full max-w-xs "
                    type="submit"
                    value="Login"
                  />
                </form>
                <p className="pt-3 text-xs text-primary text-center">
                  New TODO   
                    <Link className="text-secondary" to="/signUp">
                    Create New Account
                  </Link>
                </p>
                <div className="divider">OR</div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
