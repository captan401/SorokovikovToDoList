import React from 'react';
import classes from "./MyRemoveButton.module.css";

function MyRemoveButton({ children, removeTask}) { // кнопка для удаления
    return (
        <button onClick={removeTask} className={classes.MyRemBtn}>
            {children}
        </button>
    );
}

export default MyRemoveButton;