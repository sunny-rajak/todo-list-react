import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoProvider";
import "../Styles/addedTodo.css";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const AddedTodo = () => {
    const { allTodos, setAllTodos, completedTodos, setCompletedTodos } =
        useContext(TodoContext);

    const [isEditing, setIsEditing] = useState(null); // Track which Todo is being edited
    const [editedTodo, setEditedTodo] = useState({
        title: "",
        description: "",
    }); // Store edited values

    const handleEditClick = (index) => {
        // When edit button is clicked, set the selected Todo for editing
        setIsEditing(index);
        setEditedTodo({
            title: allTodos[index].title,
            description: allTodos[index].description,
        });
    };

    const handleSaveClick = () => {
        // Save the edited Todo
        const updatedTodos = [...allTodos];
        updatedTodos[isEditing] = editedTodo;
        setAllTodos(updatedTodos);
        setIsEditing(null); // Stop editing
    };

    const handleChange = (e) => {
        // Update the editedTodo state when user changes the input
        const { name, value } = e.target;
        setEditedTodo((prev) => ({ ...prev, [name]: value }));
    };

    const deletelogic = (index) => {
        const reducedTodoArr = [...allTodos];
        reducedTodoArr.splice(index, 1);
        setAllTodos(reducedTodoArr);
    };

    const completedOn = () => {
        let now = new Date();
        let date = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        return `${date}-${month}-${year} at ${hours}:${minutes}:${seconds}`;
    };

    const completedTodoLogic = (index) => {
        const completedTodoItems = {
            ...allTodos[index],
            completedOn: completedOn(),
        };
        const updatedTodos = [...allTodos];
        updatedTodos.splice(index, 1);
        setAllTodos(updatedTodos);

        const completedTodoArr = [...completedTodos, completedTodoItems];
        setCompletedTodos(completedTodoArr);
    };

    return (
        <div className="added_todo_container">
            <h2>Todos</h2>
            <div className="scrollable_container">
                {allTodos.length === 0 ? (
                    <p className="pre_text">No Todos Available</p>
                ) : (
                    allTodos.map((todo, index) => (
                        <div className="added_todo_item" key={index}>
                            <div className="added_todo_content">
                                {isEditing === index ? (
                                    // Inline editing enabled
                                    <div className="edit_container">
                                        <div className="edit_title">
                                            <p>
                                                <strong>Title : </strong>
                                            </p>
                                            <input
                                                type="text"
                                                name="title"
                                                value={editedTodo.title}
                                                onChange={handleChange}
                                                placeholder="Edit title"
                                            />
                                        </div>

                                        <div className="edit_description">
                                            <p>
                                                <strong>Description : </strong>
                                            </p>
                                            <input
                                                type="text"
                                                name="description"
                                                value={editedTodo.description}
                                                onChange={handleChange}
                                                placeholder="Edit description"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <h3>
                                            {index + 1}. {todo.title}
                                        </h3>
                                        <p>{todo.description}</p>
                                    </>
                                )}
                            </div>

                            <div className="added_todo_icons">
                                {isEditing === index ? (
                                    // Show "Save" button when editing
                                    <button onClick={handleSaveClick}>
                                        Save
                                    </button>
                                ) : (
                                    <FaRegEdit
                                        className="edit_icon"
                                        title="Edit"
                                        onClick={() => handleEditClick(index)}
                                    />
                                )}
                                <MdDelete
                                    className="delete_icon"
                                    title="Delete"
                                    onClick={() => deletelogic(index)}
                                />
                                <FaCheck
                                    className="check_icon"
                                    title="Complete"
                                    onClick={() => completedTodoLogic(index)}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AddedTodo;
