import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function TaskFilter() {
  const [showCompleted, setShowCompleted] = useState(false);
  const tasks = useSelector(state => state.tasks);

  const handleShowCompleted = () => {
    setShowCompleted(true);
  };

  const handleShowIncomplete = () => {
    setShowCompleted(false);
  };

  const filteredTasks = tasks.filter(task => task.isdone === showCompleted);

  return (
    <div>
      <button onClick={handleShowIncomplete}>Show Incomplete Tasks</button>
      <button onClick={handleShowCompleted}>Show Completed Tasks</button>

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskFilter;
