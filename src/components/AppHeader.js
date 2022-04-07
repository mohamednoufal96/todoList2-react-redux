import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";

const AppHeader = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className={styles.appHeader}>
            <Button variant="secondary" onClick={() => setModalOpen(true)}>
                Add Task
            </Button>
            <SelectButton id="status">
                <option value="all">ALL</option>
                <option value="incomplete">INCOMPLETE</option>
                <option value=" complete"> COMPLETE</option>
            </SelectButton>
            <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    );
};

export default AppHeader;
