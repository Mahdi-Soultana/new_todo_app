import React from "react";
import { useDispatch } from "react-redux";
import { destroyTodo, updateTodo } from "../../redux/todos_Thunk";
import toast from "react-hot-toast";
function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const { isComplete, name, id } = todo;

  function handelDelete() {
    dispatch(destroyTodo(id));
    toast.error("TODO Removed 🤗");
  }
  function handelUpdate({ target: { checked } }) {
    dispatch(updateTodo({ ...todo, isComplete: checked }));
    if (checked) {
      toast.success("Todo Completed ✔️", {
        duration: 5000,
        position: "bottom-center",
        // Styling
        style: {
          fontSize: "1rem",
        },
        // Custom Icon
        icon: "✔️",
      });
    }
  }

  return (
    <li className={isComplete ? "completed" : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isComplete}
          id={id}
          onChange={handelUpdate}
        />
        <label htmlFor={id}>{name}</label>
        <button className="destroy" onClick={handelDelete} />
      </div>
    </li>
  );
}

export default TodoItem;
