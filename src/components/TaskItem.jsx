import React, { useState } from 'react';
import '../styles/TaskItem.css'

function TaskItem(props) {
    const [color, setColor] = useState('');// хук для изменения цветового фона задачи

    function truncate(str, maxlength) {
        return (str.length > maxlength) ?
            str.slice(0, maxlength - 1) + '…' : str;
    }   //Функция для обрезания конца наименования

    function onClick() {    // Если мы кликаем по заданию то у нас выбирается конкретное задание и его данные переносятся в блок редактирования
        if (props.visible) {
            props.setVisible(false);
            props.getTask(props.task);
        }
    }

    function onChange(e) { // функция изменения select
        let elem = e ? e.target : window.SVGElement;

        if (elem.value === 'blue') { // проверка того что мы выбрали и какой цвет поставить на задачу
            setColor(() => elem.value);
        } else if (elem.value === 'grey') {
            setColor(() => elem.value);
        } else {
            setColor(() => elem.value);
        }
    }


    return (
        <div>

            <button onClick={onClick} className={(color === 'green') ? 'TaskItem3' : (color === 'grey') ? 'TaskItem2' : 'TaskItem1'}>
                <strong>
                    {props.numder}. {truncate(props.task.title, 30)}
                </strong>
                <select onChange={onChange} className='MySelect'>
                    <option value={'blue'}>В процессе</option>
                    <option value={'grey'}>Ожидает</option>
                    <option value={'green'}>Выполнена</option>
                </select>
            </ button>

        </div >
    );
}

export default TaskItem;