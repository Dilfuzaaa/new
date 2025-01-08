import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  const handleSaveEdit = () => {
    if (editText.trim() !== '') {
      const updatedTasks = tasks.map((t, i) =>
        i === editIndex ? editText : t
      );
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditText('');
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Yangi vazifa qo'shing"
            className="task-input"
          />
          <button onClick={handleAddTask} className="add-btn">Qo'shish</button>
        </div>

        {editIndex !== null ? (
          <div className="edit-container">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
            />
            <button onClick={handleSaveEdit} className="save-btn">Saqlash</button>
            <button onClick={() => setEditIndex(null)} className="cancel-btn">Bekor qilish</button>
          </div>
        ) : null}

        <div className="tasks-container">
          {tasks.map((task, index) => (
            <div key={index} className="task-card">
              <p className="task-text">{task}</p>
              <button onClick={() => handleEditTask(index)} className="edit-btn">Tahrirlash</button>
              <button onClick={() => handleDeleteTask(index)} className="delete-btn">O'chirish</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
