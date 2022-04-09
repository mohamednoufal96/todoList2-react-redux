import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/modules/app.module.scss";

const container = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const AppContent = () => {
    const todoList = useSelector((state) => state.todo.todoList);
    const filterStatus = useSelector((state) => state.todo.filterStatus);

    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

    const filteredTodoList = sortedTodoList.filter((todo) => {
        if (filterStatus === "all") {
            return true;
        }
        return todo.status === filterStatus;
    });
    return (
        <motion.div className={styles.content__wrapper} variants={container} initial="hidden" animate="visible">
            <AnimatePresence>
                {filteredTodoList && filteredTodoList.length > 0 ? (
                    filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                ) : (
                    <motion.p className={styles.emptyText} variants={child} initial="hidden" animate="visible">
                        No todos found
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default AppContent;
