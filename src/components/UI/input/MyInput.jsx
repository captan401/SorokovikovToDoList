import React from 'react';
import classes from './MyInput.module.css';

function MyInput(props) {   // отдельный input с готовым стилем
    return (
        <input className={classes.myInput} {...props} />
    );
}

export default MyInput;