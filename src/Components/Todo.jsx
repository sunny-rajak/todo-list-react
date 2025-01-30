import React, { useContext, useState } from "react";
import "../Styles/todo.css";
import { Link } from "react-router-dom";
import { TodoContext } from "../Context/TodoProvider";

const Todo = () => {
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [toggleColor, setToggleColor] = useState(true);
    const { allTodos, setAllTodos } = useContext(TodoContext);

    const handleAddClick = () => {
        if (!newTitle.trim() || !newDescription.trim()) {
            alert("Title and description cannot be empty");
            return;
        }

        let newTodoItems = {
            title: newTitle,
            description: newDescription,
        };

        let updatedTodoArray = [...allTodos, newTodoItems];
        setAllTodos(updatedTodoArray);

        setNewTitle("");
        setNewDescription("");
    };

    return (
        <div className="todo_app">
            <h1>My Todos</h1>
            <div className="todo_container">
                <div className="input_section">
                    <div className="input_item">
                        <label>Title : </label>
                        <input
                            type="text"
                            placeholder="What's the title of your Task?"
                            value={newTitle}
                            onChange={(e) => {
                                setNewTitle(e.target.value);
                            }}
                        />
                    </div>

                    <div className="input_item">
                        <label>Description : </label>
                        <input
                            type="text"
                            placeholder="What's the Description of your Task?"
                            value={newDescription}
                            onChange={(e) => {
                                setNewDescription(e.target.value);
                            }}
                        />
                    </div>

                    <div className="input_item">
                        <button
                            type="button"
                            className="add_button"
                            onClick={handleAddClick}
                        >
                            Add
                        </button>
                    </div>
                </div>

                <div>
                    <Link to="/">
                        <button
                            className={`toggle_btn ${
                                toggleColor === true ? "active" : ""
                            }`}
                            onClick={() => {
                                setToggleColor(true);
                            }}
                        >
                            Todo
                        </button>
                    </Link>
                    <Link to="/completed">
                        <button
                            className={`  toggle_btn ${
                                toggleColor === false ? "active" : ""
                            }`}
                            onClick={() => setToggleColor(false)}
                        >
                            Completed
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Todo;
