import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../redux/todos_Thunk";
import { toast } from "react-hot-toast";
// import { todosAction} from "../../redux/todo_slice";

function TodoForm(props) {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  function handelSubmit(e) {
    e.preventDefault();

    if (!todo.trim()) {
      toast.error("Please Fill Your Todo Before Submit 😓", {
        duration: 4000,
        position: "top-center",
        // Styling
        style: {
          backgroundColor: "lightsalmon",
          color: "white",
          width: "auto",
          fontSize: "1rem",
        },
        // Custom Icon
        icon: "😓",
      });
      return;
    }
    setTodo("");
    dispatch(saveTodo(todo));
    toast.success("Todo Added Successfully 🥳", {
      duration: 5000,
      position: "bottom-center",
      // Styling
      style: {
        fontSize: "1rem",
      },
      // Custom Icon
      icon: "🥳",
    });
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        autoFocus
        value={todo}
        onChange={(e) => setTodo((prevState) => e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  );
}

export default TodoForm;
