import React from 'react';
import {
    useSignInWithGoogle,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
  } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { updateEmail } from "firebase/auth";
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
   const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
   const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const [token] = useToken(user || googleUser )
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  
    navigate("/")
  };

  
  if (loading || googleLoading || updating) {
    return <Loading />;
  }
  let loginError;

  if (error || googleError || updateError) {
    loginError = (
      <p className="text-red-500">
        {error?.message || googleError?.message || updateError?.message}
      </p>
    );
  }

  // if (token) {
    
  //   navigate ('/')
  // }
   

    return (
        <div
      class="hero min-h-screen" 
       >
        
      <div class="hero-overlay bg-opacity-40"></div>
      <div class="hero-content text-left text-neutral-content">
        <div class="max-w-full">
        <div className=" flex h-screen justify-center items-center">
      <div className="card w-96 bg-white text-primary-content drop-shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-4xl text-black">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              {/* for Name field */}
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-400">
                    {errors.name.message}
                  </span>
                )}
              </label>
              {/* for email */}
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
              {/* for password */}
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
                    value:6,
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
              value="Sign Up"
            />
          </form>
          <p className="pt-3 text-xs text-center text-black">
            Already have a Account?
            <Link className="text-secondary" to="/login">
              Login Please
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-secondary"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>

          
        </div>
      </div>
    </div>
    );
};

export default SignUp;