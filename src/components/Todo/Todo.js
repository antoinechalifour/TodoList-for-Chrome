import React, { Component } from 'react'
import styled from 'styled-components'
import CheckBoxOutline from 'react-icons/lib/md/check-box-outline-blank'
import CheckBox from 'react-icons/lib/md/check-box'
import Remove from 'react-icons/lib/md/highlight-remove'
import Validate from 'react-icons/lib/md/check-circle'

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

const Input = styled.input`
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  padding: 0 8px;
`

const TodoView = ({ id, text, status, actions, toggleMode }) => {
  const isDone = status === 'done'
  const CheckBoxElement = isDone ? CheckBox : CheckBoxOutline

  return (
    <Container>
      {React.createElement(CheckBoxElement, {
        onClick: () => actions.toggleTodo(id)
      })}

      <Text
        done={status === 'done'}
        onDoubleClick={() => toggleMode('edit')}
      >
        {text}
      </Text>

      <Remove onClick={() => actions.removeTodo(id)} />
    </Container>
  )
}

class TodoEdit extends Component {
  constructor (props) {
    super(props)

    this.state = { text: props.text }

    this.onChange = this.onChange.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onValidate = this.onValidate.bind(this)
  }

  onChange (e) {
    this.setState({ text: e.target.value })
  }

  onKeyUp (e) {
    if (e.keyCode === 13) {
      this.onValidate()
    }
  }

  onValidate () {
    this.props.actions.updateTodo(this.props.id, this.state.text)
    this.props.toggleMode('view')
  }

  render () {
    return (
      <Container>
        <Validate onClick={this.onValidate} />

        <Input
          type='text'
          value={this.state.text}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
        />

        <Remove onClick={() => this.props.toggleMode('view')} />
      </Container>
    )
  }
}

class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = { mode: 'view' }

    this.toggleMode = this.toggleMode.bind(this)
  }

  toggleMode (mode) {
    this.setState({ mode })
  }

  render () {
    const TodoComponent = this.state.mode === 'view' ? TodoView : TodoEdit

    return React.createElement(TodoComponent, {
      ...this.props,
      toggleMode: this.toggleMode
    })
  }
}

export default Todo
