import React, { useState } from 'react';
import { AddTaskContainer, Input, AddButton} from './AddTask.styles'

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleAddClick() {
    if (text.trim() !== '') {
      onAddTask(text);
      setText('');
    }
  }

  return (
    <AddTaskContainer>
      <Input type="text" value={text} onChange={handleTextChange} placeholder="Add a new task..." />
      <AddButton onClick={handleAddClick}>Add Task</AddButton>
    </AddTaskContainer>
  );
}
