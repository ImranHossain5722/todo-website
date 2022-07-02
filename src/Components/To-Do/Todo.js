import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Todo = () => {
  const [todos, setToDos] = useState([]);

  const navigate = useNavigate();

  const navigateButton = (_id) => {
    navigate(`todo/${_id}`);
  };

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setToDos(data));
  }, []);
  return (
    <div className="min-h-screen mx-5">
      <h1 className="text-xl font-bold p-5">Our To Do List {todos.length}</h1>
      <div class="">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Task Name</th>
              <th>Date</th>
              <th>Task Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{todo.TaskName}</td>
                <td>{todo.date}</td>
                <td className="w-2/4 whitespace-pre-line">
                  {todo.TaskDescription}
                </td>
                <td>
                <label for="my-todo-modal" class="btn modal-button">
                    Edit
                </label>
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
              <th></th>
            </tr>
          </tfoot>
        </table>

      </div>
    </div>
  );
};

export default Todo;
