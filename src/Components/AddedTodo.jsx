import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoProvider";
import "../Styles/addedTodo.css";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const AddedTodo = () => {
    const { allTodos, setAllTodos, completedTodos, setCompletedTodos } =
        useContext(TodoContext);

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
                                <h3>
                                    {index + 1}. {todo.title}
                                </h3>
                                <p>{todo.description}</p>
                            </div>

                            <div className="added_todo_icons">
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
