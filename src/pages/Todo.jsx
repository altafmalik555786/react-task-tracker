import Header from "../component/Header";
import Tasks from "../component/Tasks.jsx";
import { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState([
        {
          id: 1,
          text: "Muhammad Altaf Malik",
          date: "Feb 5th at 2:30pm",
          remainder: true,
        },
    
        {
          id: 2,
          text: "Mushtaq Malik",
          date: "March 25th at 9:30pm",
          remainder: false,
        },
    
        {
          id: 3,
          text: "Mukhtar Malik",
          date: "Feb 15th at 4:40am",
          remainder: true,
        },
      ]);
    
      const onDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
      };
    return (
        <div>
            <h1>Todo</h1>
            <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} />
      ) : (
        "There is no Task"
      )}
            
        </div>
    )
}

export default Todo
