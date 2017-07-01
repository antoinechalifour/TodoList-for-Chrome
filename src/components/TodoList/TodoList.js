import React from 'react'
import styled from 'styled-components'
import EmptyIcon from 'react-icons/lib/md/playlist-add'
import Todo from '../Todo'

const Container = styled.div`
  padding: 0 16px;
  min-height: 125px;
`

const Empty = styled.div`
  text-align: center;
  color: #8c979a;
  padding: 24px 0;

  svg {
    margin-bottom: 12px;
    font-size: 48px;
  }
`

const TodoList = ({ todos = [] }) => (
  <Container>
    {todos.length === 0 ? (
      <Empty>
        <EmptyIcon />
        <div>This list is empty</div>
      </Empty>
    ) : (
      <div>
        {todos.map(x => (
          <Todo
            {...x}
            key={x.id}
          />
        ))}
      </div>
    )}
  </Container>
)

export default TodoList
