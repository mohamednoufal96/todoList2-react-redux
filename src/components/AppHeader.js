import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../features/todo/todoSlice";

const AppHeader = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const filterStatus = useSelector((state) => state.todo.filterStatus);

    const updateFilter = (event) => {
        dispatch(updateFilterStatus(event.target.value));
    };
    return (
        <div className={styles.appHeader}>
            <Button variant="secondary" onClick={() => setModalOpen(true)}>
                Add Task
            </Button>
            <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
                <option value="all">ALL</option>
                <option value="incomplete">INCOMPLETE</option>
                <option value="complete"> COMPLETE</option>
            </SelectButton>
            <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} type="add" />
        </div>
    );
};

export default AppHeader;
