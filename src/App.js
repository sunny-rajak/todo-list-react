import React from "react";
import "./App.css";
import Todo from "./Components/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddedTodo from "./Components/AddedTodo";
import CompletedTodo from "./Components/CompletedTodo";
import { TodoProvider } from "./Context/TodoProvider";

const App = () => {
    return (
        <TodoProvider>
            <BrowserRouter basename="/todo-list-react">
                <Todo />
                <Routes>
                    <Route path="/" element={<AddedTodo />}></Route>
                    <Route
                        path="/completed"
                        element={<CompletedTodo />}
                    ></Route>
                    <Route path="*" element={<p>Page Not Found</p>} />
                </Routes>
            </BrowserRouter>
        </TodoProvider>
    );
};

export default App;
