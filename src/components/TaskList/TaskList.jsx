import React from 'react';
import { TaskListContainer, TaskItemContainer, TaskCheckbox, TaskText, DeleteButton } from './TaskList.styles'

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onChangeTask={onChangeTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </TaskListContainer>
  );
}

function TaskItem({ task, onChangeTask, onDeleteTask }) {
  function handleCheckboxChange() {
    onChangeTask({ ...task, done: !task.done });
  }

  function handleDeleteClick() {
    onDeleteTask(task.id);
  }

  return (
    <TaskItemContainer>
      <TaskCheckbox type="checkbox" checked={task.done} onChange={handleCheckboxChange} />
      <TaskText done={task.done}>{task.text}</TaskText>
      <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>
    </TaskItemContainer>
  );
}