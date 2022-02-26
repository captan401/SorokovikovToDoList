import React, { useState } from 'react';
import MyAddButton from './UI/buttons/MyAddButton'; /*-------------------------------------------*/
import MyInput from './UI/input/MyInput';/*------------- Созданы отдельно для разделений стилей */
import MyTextArea from './UI/textArea/MyTextArea';/* ------------------------------------------*/
import '../styles/TaskForm.css'

function TaskForm({create}) {
    const [task, setTask] = useState({ title: '', body: '', }); // хук для одной новой задачи

    function addNewTask(e) { // функция создания новой задачи задачи
        e.preventDefault();
        if (task.title) { // проверка на то написали ли мы что-либо в title
            const newTask = {
                ...task, id: Date.now(),
            }
            create(newTask);
            setTask({ title: '', body: '', });
        }
        else { alert('Введите название заметки!!!') }
    };

    return (
        <form >
            <h1> Создание задачи</h1>
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
                placeholder='Текст'
            />
            <MyAddButton addNewTask={addNewTask}>Создать</MyAddButton>
        </form>
    );
}

export default TaskForm;