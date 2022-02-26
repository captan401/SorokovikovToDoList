import React, { useState, useMemo } from 'react';
import TaskEditForm from './components/TaskEditForm';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import './styles/app.css';

function App() {

  const [tasks, setTasks] = useState([]); // хук для всех задач
  const [oneTask, setOneTask] = useState(''); // хук для выбора одной задачи
  const [searchTask, setSearchTask] = useState(''); // хук для поиска задач
  const [visible, setVisible] = useState(true); // хук для показа окна редактирования
  const sorted = ('');// для сортировки

  const sortedTasks = useMemo(() => {
    if (sorted) {
      return [...tasks].sort((a, b) => a[sorted].localeCompare(b[sorted]));
    }
    return tasks;
  }, [sorted, tasks]);  //сортирует задачи по фильтру

  const sortedSerchedTasks = useMemo(() => {
    return sortedTasks.filter(task => task.title.toLowerCase().includes(searchTask));
  }, [searchTask, sortedTasks]); //Фильтрует задачи


  function createTask(newTask) {
    setTasks([...tasks, newTask]); // создание новой задачи
  }

  function removeTask(task) {
    setVisible(() => true);
    setTasks([...tasks.filter(t => t.id !== task.id)]); //удаление задачи
  }

  function getTask(task) {
    console.log('asdfasdf')
    setOneTask(() => task); // получение одной выбранной задачи
  }


  return (

    <div className="App">

      <div className='Left__block'>
        {/* происходит деление на 2 блока, здесь идет левый, а ниже праый */}
        <h1>Список задач</h1>

        <div>
          <input
            className='searchInput'
            value={searchTask}
            onChange={e => setSearchTask(e.target.value)} /* input нужен для строки поиска */
            placeholder='Поиск'
          />
        </div>

        {sortedSerchedTasks.length !== 0  /*Проверка на то что есть ли задачи через поиск*/
          ?
          sortedSerchedTasks.map((task, index) => /*Тут идет создаение всего списка заметок */
            <TaskItem
              visible={visible}
              setVisible={setVisible}
              numder={index + 1}
              task={task}
              key={task.id}
              getTask={getTask}
            />)
          : <h2>Список пуст :(</h2>
        }
      </div>

      <div className='Right__block'>

        {visible ?  /* идет проверка на то, выбрано у нас окно редактирование или нет */
          <TaskForm create={createTask} /> :  /* тут блок создания задачи, при условии что не выбрано задание для редактирования*/
          <TaskEditForm /* Блок редактирования задачи */
            create={createTask}
            oneTask={oneTask}
            removeTask={removeTask}
            setVisible={setVisible}
          />}
      </div>
      <div className="line"></div>
    </div>
  );
}

export default App;