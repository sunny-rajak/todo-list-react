import React, { useContext } from "react";
import "../Styles/completedTodo.css";
import { TodoContext } from "../Context/TodoProvider";

const CompletedTodo = () => {
    const { completedTodos } = useContext(TodoContext);

    return (
        <div className="completed_todo_container">
            <h2>Completed</h2>
            <div className="scrollable_container">
                {completedTodos.length === 0 ? (
                    <p className="pre_text">No Completed Todos</p>
                ) : (
                    completedTodos.map((todo, index) => {
                        return (
                            <div className="completed_todo_item" key={index}>
                                <h3>
                                    {index + 1}. {todo.title}
                                </h3>
                                <p>{todo.description}</p>
                                <p>Completed On: {todo.completedOn}</p>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default CompletedTodo;
