import React from 'react'
import styled from 'styled-components'
import CheckBoxOutline from 'react-icons/lib/md/check-box-outline-blank'
import CheckBox from 'react-icons/lib/md/check-box'
import Remove from 'react-icons/lib/md/highlight-remove'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;

  & + & {
    border-top: 1px solid #d7d7d9;
  }

  svg {
    font-size: 20px;
    cursor: pointer;
    color: #8c979a;
  }
`

const Text = styled.div`
  flex: 1;
  padding: 0 8px;
  text-decoration: ${({ done }) => done ? 'line-through' : 'none'};
  color: ${({ done }) => done ? '#bcbcbc' : 'inherit'}
`

const Todo = ({ id, text, status, actions }) => {
  const isDone = status === 'done'
  const CheckBoxElement = isDone ? CheckBox : CheckBoxOutline

  return (
    <Container>
      {React.createElement(CheckBoxElement, {
        onClick: () => actions.toggleTodo(id)
      })}

      <Text done={status === 'done'}>{text}</Text>

      <Remove onClick={() => actions.removeTodo(id)} />
    </Container>
  )
}

export default Todo
