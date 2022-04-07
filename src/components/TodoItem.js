import { format } from "date-fns";
import React from "react";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

const TodoItem = ({ item, key }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };
    const handleUpdate = () => {};
    return (
        <div className={styles.item}>
            <div className={styles.todoDetails}>
                <div className={styles.texts}>
                    <p
                        className={getClasses([
                            styles.todoText,
                            item.status === "complete" && styles["todoText--completed"],
                        ])}
                    >
                        {item.title}
                    </p>
                    <p className={styles.time}>{format(new Date(item.time), "p, MM/dd/yyyy")}</p>
                </div>
            </div>
            <div className={styles.todoActions}>
                <div className={styles.icon} onClick={handleUpdate} role="button" tabIndex={0} onKeyDown={handleUpdate}>
                    <MdEdit />
                </div>
                <div
                    className={styles.icon}
                    onClick={handleDelete(key)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={handleDelete(key)}
                >
                    <MdDelete />
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
