import React from 'react';
import classes from "./MyTextArea.module.css";

function MyTextArea(props) {// отдельный textarea с готовым стилем
    return (
        <textarea
            className={classes.MyTxtArea} {...props}
        />
    );
}

export default MyTextArea;