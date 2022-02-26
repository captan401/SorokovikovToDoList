import React from 'react';
import classes from "./MyCloseButton.module.css";

function MyCloseButton({ children, setVisible, setTask }) { // кнопка для закрытия вкладки редактирования

    function onClick(e) {
        e.preventDefault()
        setTask({ title: '', body: '', })
        setVisible(true)

    }


    return (
        <button onClick={onClick} className={classes.MyClsBtn}>
            {children}
        </button>
    );
}

export default MyCloseButton;