import React from "react";
import Photo from "../../Assets/images/topBanner.png";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";

const AddToDo = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const { data: addTodo, isLoading } = useQuery("userFeedBack", () =>
      fetch("https://warm-journey-62382.herokuapp.com/reviews").then((res) =>
        res.json()
      )
    );
      const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
       

              const ToDos = {
                name: data.name,
                review: data.review,
             
              };
    
              
          
      };

  return (
    <div>
      <div>
        <div class="hero min-h-screen bg-base-100">
          <div class="hero-content flex-col lg:flex-row">
            <img src={Photo} class=" max-w-lg rounded-lg shadow-2xl" />

            <div className="px-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  {/* for Name field */}

                  <input
                    type="text"
                    placeholder="Task Name"
                    className="input input-bordered w-full max-w-xs text-black"
                    {...register("name", {
                      required: {
                        value: true,
                        message: " Your Task Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.pName?.type === "required" && (
                      <span className="label-text-alt text-red-400">
                        {errors.Taskname.message}
                      </span>
                    )}
                  </label>

                  {/* for review */}

                  <input
                   
                    type="date"
                    placeholder="Select date"
                    className="input input-bordered w-full max-w-xs text-black"
                    {...register("review", {
                      required: {
                        value: true,
                        message: " Date is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.date?.type === "required" && (
                      <span className="label-text-alt text-red-400">
                        {errors.date.message}
                      </span>
                    )}
                  </label>

                  {/* user Task */}

                  <textarea
                    type="text"
                    name="txtname"
                    rows="8" cols="50"
                    placeholder="Your Task Details "
                    className="input input-bordered w-full max-w-xs text-black"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.task?.type === "required" && (
                      <span className="label-text-alt text-red-400">
                        {errors.task.message}
                      </span>
                    )}
                  </label>
                </div>
                <input
                  className="btn btn-outline w-full max-w-xs "
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default AddToDo;
