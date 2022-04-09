import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";
import toast from "react-hot-toast";
import TodoModal from "./TodoModal";
import CheckButton from "./CheckButton";
import { motion } from "framer-motion";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const [updataModalOpen, setUpdateModalOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (todo.status === "complete") {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [todo.status]);

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
        toast.success("Todo deleted successfully");
    };
    const handleUpdate = () => {
        setUpdateModalOpen(true);
    };

    const handleCheck = () => {
        setChecked(!checked);
        dispatch(updateTodo({ ...todo, status: checked ? "incomplete" : "complete" }));
        toast.success("Updated successfully");
    };

    const child = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };
    return (
        <>
            <motion.div className={styles.item} variants={child}>
                <div className={styles.todoDetails}>
                    <CheckButton checked={checked} handleCheck={handleCheck} />
                    <div className={styles.texts}>
                        <p
                            className={getClasses([
                                styles.todoText,
                                todo.status === "complete" && styles["todoText--completed"],
                            ])}
                        >
                            {todo.title}
                        </p>
                        <p className={styles.time}>{format(new Date(todo.time), "p, MM/dd/yyyy")}</p>
                    </div>
                </div>
                <div className={styles.todoActions}>
                    <div className={styles.icon} onClick={handleUpdate} role="button" tabIndex={0} onKeyDown={handleUpdate}>
                        <MdEdit />
                    </div>
                    <div className={styles.icon} onClick={handleDelete} role="button" tabIndex={0} onKeyDown={handleDelete}>
                        <MdDelete />
                    </div>
                </div>
            </motion.div>

            <TodoModal modalOpen={updataModalOpen} setModalOpen={setUpdateModalOpen} type="update" todo={todo} />
        </>
    );
};

export default TodoItem;
