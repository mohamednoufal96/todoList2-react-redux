import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const AppContent = () => {
    const todoList = useSelector((state) => state.todo.todoList);
    console.log(todoList);

    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
    return (
        <div>
            {sortedTodoList && sortedTodoList.length > 0
                ? sortedTodoList.map((item, index) => <TodoItem key={index} item={item} />)
                : "no todos found"}
        </div>
    );
};

export default AppContent;
