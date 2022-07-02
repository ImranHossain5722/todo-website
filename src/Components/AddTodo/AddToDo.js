import React from "react";
import Photo from "../../Assets/images/topBanner.png";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
const AddToDo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: addTodo, isLoading } = useQuery("addToDo", () =>
    fetch("https://polite-zed-22063.herokuapp.com/todos").then((res) =>
      res.json()
    )
  );
  const onSubmit = async (data) => {
    const todos = {
      TaskName: data.name,
      date: data.date,
      TaskDescription: data.TaskDescription,
    };

    // send data Database
    fetch("https://polite-zed-22063.herokuapp.com/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todos),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Your To do task add successfully ");
          reset();
        } else {
          toast.error("Failed to add your To do task ");
        }
      });
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
                    {...register("date", {
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
                    name="TaskDescription"
                    rows="8"
                    cols="50"
                    placeholder="Your Task Details "
                    className="input input-bordered w-full max-w-xs text-black"
                    {...register("TaskDescription", {
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
