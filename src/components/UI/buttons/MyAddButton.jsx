import React from 'react';
import classes from "./MyAddButton.module.css";

function MyAddButton({ children, addNewTask }) {    // кнопка для создания задачи
    return (
        <button onClick={addNewTask} className={classes.MyAddBtn}>
            {children}
        </button>
    );
}

export default MyAddButton;