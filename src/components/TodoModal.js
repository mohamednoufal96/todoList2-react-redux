import React, { useState } from "react";
import styles from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import toast from "react-hot-toast";

const TodoModal = ({ modalOpen, setModalOpen }) => {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("incomplete");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(title, status);

        if (title && status) {
            dispatch(
                addTodo({
                    id: uuid(),
                    title: title,
                    status: status,
                    time: new Date().toLocaleString(),
                })
            );

            toast.success("Task Added Successfully");
            setTitle("");
            setStatus("");
            setModalOpen(false);
        } else {
            toast.error("Title shouldn't be empty");
        }
    };
    return (
        <>
            {modalOpen && (
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <div
                            className={styles.closeButton}
                            onClick={() => setModalOpen(false)}
                            onKeyDown={() => setModalOpen(false)}
                            tabIndex={0}
                            role="button"
                        >
                            <MdOutlineClose></MdOutlineClose>
                        </div>
                        <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
                            <h1 className={styles.formTitle}>Add Task </h1>
                            <label htmlFor="title">
                                Title
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                    id="title"
                                />
                            </label>
                            <label htmlFor="status">
                                Status
                                <select
                                    name="status"
                                    value={status}
                                    onChange={(event) => setStatus(event.target.value)}
                                    id="status"
                                >
                                    <option value="incomplete">Incomplete</option>
                                    <option value="complete">Complete</option>
                                </select>
                            </label>
                            <div className={styles.buttonContainer}>
                                <Button type="submit" variant="primary">
                                    Add task
                                </Button>
                                <Button
                                    type="button"
                                    variant="secondary"
                                    onClick={() => setModalOpen(false)}
                                    onKeyDown={() => setModalOpen(false)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default TodoModal;
