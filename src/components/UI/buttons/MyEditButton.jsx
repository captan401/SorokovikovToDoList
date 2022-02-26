import React from 'react';
import classes from "./MyEditButton.module.css";

function MyEditButton({ children, addNewTask, removeTask }) { // кнопка для редактирования



    return (
        <button onMouseDown={addNewTask} onMouseUp={removeTask} className={classes.MyEddBtn}>
            {children}
        </button>
    );
}

export default MyEditButton;