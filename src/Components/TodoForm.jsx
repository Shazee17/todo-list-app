import React, { useState } from "react";
import plusIcon from "../assets/add-button.svg";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (value != "") {
      addTodo(value);
    } else {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 3000);
    }

    // clear the form after submitting
    setValue("");
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={submitHandler}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add new task"
          onChange={(e) => {
            setValue(e.target.value),
            setIsEmpty(false)
          }}
        />

        <button title="Add" type="submit" className="submit-btn">
          <img src={plusIcon} alt="plus-icon" className="plus-icon" />
        </button>
      </form>

      <small className={isEmpty ? "visible" : "hidden"}>
        Oops! Please write something
      </small>
    </div>
  );
};

export default TodoForm;
