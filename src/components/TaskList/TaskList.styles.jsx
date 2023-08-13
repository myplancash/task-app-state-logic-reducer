import styled from 'styled-components';

export  const TaskListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export  const TaskItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export  const TaskCheckbox = styled.input`
  margin-right: 10px;
`;

export  const TaskText = styled.span`
  flex: 1;
  font-size: 18px;
  ${({ done }) => done && 'text-decoration: line-through;'}
`;

export  const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;