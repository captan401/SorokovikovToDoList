import React, { useState } from 'react';
import MyRemoveButton from './UI/buttons/MyRemoveButton';/*--------------------------------------------*/
import MyEditButton from './UI/buttons/MyEditButton';/*-----------------------------------------------*/
import MyCloseButton from './UI/buttons/MyCloseButton';/*------Созданы отдельно для разделений стилей*/
import MyInput from './UI/input/MyInput';/*---------------------------------------------------------*/
import MyTextArea from './UI/textArea/MyTextArea';/*-----------------------------------------------*/
import '../styles/TaskEditForm.css'


function TaskForm({ create, oneTask, removeTask, setVisible }) {
    const [task, setTask] = useState({ title: oneTask.title, body: oneTask.body, }); // хук для задачи cразу с нужными нам значениями
    function editTask() { // функция создания новой отредактированной задачи
        const newTask = {
            ...task, id: Date.now(),
        }
        create(newTask);
        setTask({ title: '', body: '', });
    }

    function addNewEditTask(e) { // функция нужна для проверки того, внесли ли мы какие либо изменения в нашей задаче
        e.preventDefault();

        if (task.title !== oneTask.title && task.body !== oneTask.body) {
            editTask(); // если изменили везде

        }
        else if (task.title !== oneTask.body && task.body === oneTask.body) {
            editTask();// если изменили только title
            task.body = oneTask.body;
        }
        else if (task.title === oneTask.title && task.body !== oneTask.body) {
            editTask();// если изменили только body
            task.title = oneTask.title;
        }
        else {
            alert('Вы ничего не редактируете!')
        }
        // если же нечего не меняли то выводит сообщение
    };


    return (
        <form >
            <h1> Редактирование задачи</h1>

            <MyInput
                value={task.title}
                onChange={e => setTask({ ...task, title: e.target.value })}
                type="text"
                placeholder={'Название заметки'}
            />
            <div className="txtLine"></div>
            <MyTextArea
                value={task.body}
                onChange={e => setTask({ ...task, body: e.target.value })}
                type="text"
                placeholder={'Текст'}
            />

            <MyEditButton addNewTask={addNewEditTask} removeTask={() => removeTask(oneTask)}>Редактирование</MyEditButton>
            <MyRemoveButton removeTask={() => removeTask(oneTask)}>Удалить</MyRemoveButton>
            <MyCloseButton setVisible={setVisible} setTask={setTask}> Закрыть</MyCloseButton>
        </form>
    );
}

export default TaskForm;