import React, { Component } from 'react'
import styled from 'styled-components'
import EmptyIcon from 'react-icons/lib/md/playlist-add'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
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

const Item = SortableElement(Todo)

const List = SortableContainer(({ todos }) => (
  <div>
    {todos.map((x, index) => (
      <Item
        {...x}
        key={x.id}
        index={index}
      />
    ))}
  </div>
))

class TodoList extends Component {
  constructor (props) {
    super(props)

    this.onSortEnd = this.onSortEnd.bind(this)
  }

  onSortEnd ({ oldIndex, newIndex }) {
    const movedTodo = this.props.todos[oldIndex]
    const nextTo = this.props.todos[newIndex]

    this.props.actions.moveTodo(movedTodo.id, nextTo.id)
  }

  render () {
    const { todos = [] } = this.props

    return (
      <Container>
        {todos.length === 0 ? (
          <Empty>
            <EmptyIcon />
            <div>This list is empty</div>
          </Empty>
        ) : (
          <List
            onSortEnd={this.onSortEnd}
            todos={todos}
          />
        )}
      </Container>
    )
  }
}

export default TodoList
