import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [allTodos, setAllTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    return (
        <TodoContext.Provider
            value={{ allTodos, setAllTodos, completedTodos, setCompletedTodos }}
        >
            {children}
        </TodoContext.Provider>
    );
};
