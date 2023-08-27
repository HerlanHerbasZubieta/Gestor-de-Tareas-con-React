import { useEffect, useState } from "react";
import "../styles/addTask.css";
const Tasks = ({ showEmptyMessage, setShowEmptyMessage }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, { text: newTask, completed: false }];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setNewTask("");
    } else {
      setShowEmptyMessage(true);
      setTimeout(() => {
        setShowEmptyMessage(false);
      }, 3000);
    }
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };


  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1); 
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="todo-list">
      <h1 className="encb-1">Gestor de Tareas</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Ingresa contenido"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <h2 className="encb-2">Tareas pendientes</h2>
      <div className="task-list">
        {tasks.map((task, index) => (
          <span
            key={index}
            className={`container-task ${task.completed ? "completed" : ""}`}
          >
            <p>{task.text}</p>
            <button className={task.completed ? 'complete' : ''} onClick={() => handleCompleteTask(index)}>
              {task.completed ? "Tarea completada" : "Marcar como completada"}
            </button>
            <button onClick={() => handleDeleteTask(index)}>Eliminar Tarea</button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
