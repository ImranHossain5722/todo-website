import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OurToDoList = () => {
  const [todos, setToDos] = useState([]);

  const navigate = useNavigate();

  const navigateButton = (_id) => {
    navigate(`todo/${_id}`);
  };

  useEffect(() => {
    fetch("https://polite-zed-22063.herokuapp.com/todos")
      .then((res) => res.json())
      .then((data) => setToDos(data));
  }, []);
  return (
    <div className="px-28">
      <h1 className="text-4xl font-bold ">Our To-DO List {todos.length}</h1>

      <div>
        <progress class="progress w-6 "></progress>

        <div>
          <div class="">
            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Task Name</th>
                  <th>Date</th>
                  <th>Task Description</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{todo.TaskName}</td>
                    <td>{todo.date}</td>
                    <td className="whitespace-pre-line">
                      {todo.TaskDescription}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurToDoList;
