import React from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";

const AppHeader = () => {
    return (
        <div className={styles.appHeader}>
            <Button variant="secondary">Add Task</Button>
            <SelectButton id="status">
                <option value="all">ALL</option>
                <option value="incomplete">INCOMPLETE</option>
                <option value=" complete"> COMPLETE</option>
            </SelectButton>
            <TodoModal></TodoModal>
        </div>
    );
};

export default AppHeader;
